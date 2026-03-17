import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary-900 text-white shadow hover:bg-primary-800 focus-visible:ring-primary-500",
        teal:
          "bg-teal-600 text-white shadow hover:bg-teal-700 focus-visible:ring-teal-500",
        outline:
          "border-2 border-primary-900 text-primary-900 bg-transparent hover:bg-primary-50 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary-950",
        ghost:
          "text-primary-900 hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-primary-950",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        link: "text-primary-900 underline-offset-4 hover:underline dark:text-primary-300",
      },
      size: {
        sm:      "h-8 px-3 text-xs",
        default: "h-10 px-5 py-2",
        lg:      "h-12 px-8 text-base",
        xl:      "h-14 px-10 text-lg",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

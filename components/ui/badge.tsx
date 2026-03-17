import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:  "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200",
        teal:     "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
        outline:  "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
        success:  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        warning:  "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

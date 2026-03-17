import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold text-primary-900 dark:text-primary-300 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Page Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild variant="teal" size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="mt-10  text-center min-h-screen">
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl">
        Something went wrong!!!
      </p>
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl mt-2 mb-10">
        {error.message}
      </p>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
};

export default ErrorPage;

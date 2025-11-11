import { Button } from "@/components/ui/button";

import { XCircle } from "lucide-react";

interface GlobalErrorProps {
  errorMsg?: string;
  goBackBtnHandler?: () => void;
}

function GlobalError({ errorMsg, goBackBtnHandler }: GlobalErrorProps) {
  return (
    <div className="mt-10 bg-white flex flex-col items-center justify-center">
      <div className="max-w-md text-center px-8">
        <XCircle className="mx-auto h-24 w-24 text-red-500 mb-8" />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          {errorMsg
            ? errorMsg
            : "We apologize for the inconvenience. The page you're looking for couldn't be found or is temporarily unavailable."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600"
          >
            Try Again
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              goBackBtnHandler ? goBackBtnHandler() : window.history.back()
            }
            className="border-red-200 text-red-500 hover:bg-red-50"
          >
            Go Back
          </Button>
        </div>
      </div>

      <div className="mt-16 text-sm text-gray-500">
        Error Code: 404 | Need help? Contact Web Infotech
      </div>
    </div>
  );
}

export default GlobalError;

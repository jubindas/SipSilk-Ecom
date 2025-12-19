import { CheckCircle } from "lucide-react";

interface SuccessToastProps {
  message?: string | null;
}

export default function SuccessToast({ message }: SuccessToastProps) {
  return (
    <div
      className={`
        fixed top-6 right-6 z-50
        transition-all duration-500 ease-out
        ${
          message
            ? "translate-x-0 opacity-100"
            : "translate-x-[120%] opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className="
          flex items-center gap-3
          bg-green-50 border border-green-200
          text-green-800
          px-5 py-4 rounded-xl shadow-lg
          min-w-[260px]
        "
      >
        <CheckCircle className="w-6 h-6 text-green-600" />
        <p className="text-sm font-medium">{message ?? ""}</p>
      </div>
    </div>
  );
}

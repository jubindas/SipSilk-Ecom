import type { ReactNode } from "react";

interface GreenInputProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon?: ReactNode;
  type?: string;
}

export default function GreenInput({
  label,
  value,
  onChange,
  placeholder,
  icon,
  type = "text",
}: GreenInputProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-green-900">{label}</label>

      <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
        {icon && <span className="text-green-600">{icon}</span>}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full outline-none text-sm bg-transparent placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}

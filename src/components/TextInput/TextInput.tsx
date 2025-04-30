'use client';

import { cn } from "@/lib/utils";

type TextInputProps = {
  label: string;
  placeholder: string;
  value: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange: (value: string) => void;
};

export const TextInput = ({ label, placeholder, value, className, labelClassName, inputClassName, onChange }: TextInputProps) => {
  return (
    <div className={cn('flex flex-col w-full p-2 gap-2', className)}>
      <label className={cn("text-sm font-medium text-gray-700", labelClassName)}>{label}</label>
      <input type="text" className={cn("w-full h-full bg-slate-600 rounded-md p-2", inputClassName)} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

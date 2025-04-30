'use client';

import { cn } from "@/lib/utils";

type TextInputItemProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  inputClassName?: string;
}


export const TextInputItem = ({ placeholder, value, onChange, inputClassName }: TextInputItemProps) => {
  return  <input type="text" className={cn("w-full h-full bg-slate-600 rounded-md p-2", inputClassName)} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
  
}

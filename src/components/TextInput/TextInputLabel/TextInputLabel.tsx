'use client';

import { cn } from "@/lib/utils";

type TextInputLabelProps = {
  label: string;
  labelClassName?: string;
}

export const TextInputLabel = ({ label, labelClassName }: TextInputLabelProps) => {
  return <label className={cn("text-sm font-medium text-gray-700", labelClassName)}>{label}</label>
}

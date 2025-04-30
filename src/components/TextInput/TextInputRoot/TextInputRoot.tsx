'use client';

import { cn } from "@/lib/utils"
import { ReactNode } from "react";

type TextInputRootProps = {
  children: ReactNode;
  className?: string;
}

export const TextInputRoot = ({ children, className }: TextInputRootProps) => {
  return (
    <div className={cn('flex flex-col w-full p-2 gap-2', className)}>
      {children}
    </div>
  )
}

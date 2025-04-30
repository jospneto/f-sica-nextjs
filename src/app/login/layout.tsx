import { ReactNode } from "react";

type LoginLayoutProps = {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps){
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-500 to-blue-300 gap-4">
      {children}
    </div>
  )
}
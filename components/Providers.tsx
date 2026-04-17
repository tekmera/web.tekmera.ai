"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Toaster />
      <SonnerToaster />
      {children}
    </TooltipProvider>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl text-foreground tracking-tight">Tekmera</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-body font-medium">
          <div className="relative group">
            <Link href="/work-with-us" className="text-secondary-foreground hover:text-foreground transition-colors">
              Work With Us
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-md shadow-lg py-2 min-w-[220px]">
                <Link
                  href="/work-with-us/adobe-practice"
                  className="block px-4 py-2 text-secondary-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  Adobe Practice
                </Link>
              </div>
            </div>
          </div>
          <Link href="/system-notes" className="text-secondary-foreground hover:text-foreground transition-colors">
            From the Field
          </Link>
          <Link href="/about" className="text-secondary-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-secondary-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-body font-medium">
            <Link href="/work-with-us" className="text-secondary-foreground hover:text-foreground">
              Work With Us
            </Link>
            <Link href="/work-with-us/adobe-practice" className="text-secondary-foreground hover:text-foreground pl-4">
              Adobe Practice
            </Link>
            <Link href="/system-notes" className="text-secondary-foreground hover:text-foreground">
              From the Field
            </Link>
            <Link href="/about" className="text-secondary-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-secondary-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

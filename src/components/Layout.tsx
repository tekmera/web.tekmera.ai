import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import tekmeraIcon from "@/assets/tekmera_icon.png";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={tekmeraIcon} alt="Tekmera" className="h-8 w-auto" />
          <span className="font-heading text-2xl text-foreground tracking-tight italic">Tekmera</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-body font-medium">
          <Link to="/how-we-work" className="text-secondary-foreground hover:text-foreground transition-colors">
            How We Work
          </Link>
          <Link to="/system-notes" className="text-secondary-foreground hover:text-foreground transition-colors">
            From the Field
          </Link>
          <Link to="/about" className="text-secondary-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-secondary-foreground hover:text-foreground transition-colors">
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
            <p className="text-muted-foreground text-xs uppercase tracking-wider">Services</p>
            <Link to="/services/workfront" className="text-secondary-foreground hover:text-foreground pl-2">
              Adobe Workfront
            </Link>
            <Link to="/services/ai-automation" className="text-secondary-foreground hover:text-foreground pl-2">
              AI & Automation
            </Link>
            <div className="border-t border-border my-1" />
            <Link to="/how-we-work" className="text-secondary-foreground hover:text-foreground">
              How We Work
            </Link>
            <Link to="/system-notes" className="text-secondary-foreground hover:text-foreground">
              From the Field
            </Link>
            <Link to="/about" className="text-secondary-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-secondary-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="border-t border-border mt-24">
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
      <div>
        <p className="font-heading text-xl italic text-foreground mb-2 flex items-center gap-2">
          <img src={tekmeraIcon} alt="Tekmera" className="h-6 w-auto" />
          Tekmera
        </p>
        <p className="text-sm text-muted-foreground">Fredericton, New Brunswick, Canada</p>
        <a href="mailto:contact@tekmera.ai" className="text-sm text-primary hover:underline">
          contact@tekmera.ai
        </a>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="/services/workfront" className="text-secondary-foreground hover:text-foreground">Adobe Workfront</Link>
        <Link to="/services/ai-automation" className="text-secondary-foreground hover:text-foreground">AI & Automation</Link>
        <Link to="/how-we-work" className="text-secondary-foreground hover:text-foreground">How We Work</Link>
        <Link to="/system-notes" className="text-secondary-foreground hover:text-foreground">From the Field</Link>
        <Link to="/about" className="text-secondary-foreground hover:text-foreground">About</Link>
        <Link to="/contact" className="text-secondary-foreground hover:text-foreground">Contact</Link>
      </div>
      <div>
        <a
          href={BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-primary hover:underline"
        >
          Book an Introductory Strategy Call →
        </a>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;

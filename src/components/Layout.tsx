import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl text-foreground tracking-tight">Tekmera</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-body font-medium">
          <div className="relative group">
            <Link to="/how-we-work" className="text-secondary-foreground hover:text-foreground transition-colors">
              Work With Us
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-md shadow-lg py-2 min-w-[220px]">
                <Link
                  to="/how-we-work/adobe-practice"
                  className="block px-4 py-2 text-secondary-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  Adobe Practice
                </Link>
              </div>
            </div>
          </div>
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
            <Link to="/how-we-work" className="text-secondary-foreground hover:text-foreground">
              Work With Us
            </Link>
            <Link to="/how-we-work/adobe-practice" className="text-secondary-foreground hover:text-foreground pl-4">
              Adobe Practice
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
        <p className="font-heading text-xl text-foreground mb-2">
          Tekmera
        </p>
        <p className="text-sm text-muted-foreground">Fredericton, New Brunswick, Canada</p>
        <a href="mailto:contact@tekmera.ai" className="text-sm text-primary hover:underline">
          contact@tekmera.ai
        </a>
      </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/how-we-work" className="text-secondary-foreground hover:text-foreground">Work With Us</Link>
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

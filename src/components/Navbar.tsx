import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mind-Body Evidence", href: "/for-providers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Fees", href: "/fees" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border py-3 pl-4 pr-3 md:py-4 md:px-8 flex justify-between items-center bg-hero backdrop-blur-md sticky top-0 z-50">
      <Link to="/" className="flex items-baseline gap-2 leading-tight">
        <span className="font-serif font-medium text-base md:text-xl tracking-tight text-foreground">
          Vanesa Sakota
        </span>
        <span className="text-[10px] md:text-[11px] text-muted-foreground tracking-wide">
          BSc Psych MPAC
        </span>
      </Link>

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="border border-foreground text-foreground px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-card transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-hero border-b border-border p-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-foreground text-foreground px-5 py-2 text-sm font-medium text-center"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

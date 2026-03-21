import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
  { label: "Fees", href: "/fees" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border py-4 px-6 md:px-8 flex justify-between items-center bg-card/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-serif text-xl font-bold tracking-tighter text-foreground">
        </Link>
      </div>

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
          to="/#book"
          className="ml-2 bg-foreground text-card px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Book Now
        </Link>
        <a
          href="mailto:vanesa@vanesasakota.com.au"
          className="border border-foreground text-foreground px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-card transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border p-6 flex flex-col gap-4 lg:hidden">
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
            to="/#book"
            className="bg-foreground text-card px-5 py-2 text-sm font-medium text-center"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}

import { useState } from "react";
import { Menu, X, Phone, MessageSquare, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const navLinks = [
  { label: "About", href: "/" },
  
  { label: "Mind-Body Evidence", href: "/for-providers" },
  { label: "Appointments", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setOpen(false);
    setContactOpen(true);
  };

  return (
    <nav className="border-b border-border py-3 pl-4 pr-3 md:py-4 md:px-8 flex justify-between items-center bg-hero/80 backdrop-blur-md sticky top-0 z-50">
      <Link to="/" className="flex flex-col leading-tight">
        <span className="font-serif font-medium text-base md:text-xl tracking-tight text-foreground">
          Vanesa Sakota
          <span className="ml-2 text-[10px] md:text-[11px] text-muted-foreground tracking-wide font-sans align-middle">
            MA, BSc, PACFA Reg.
          </span>
        </span>
        <span className="text-[10px] md:text-[11px] text-muted-foreground tracking-wide mt-0.5 font-sans">
          Psychotherapist
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
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Toggle menu">
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
        </div>
      )}

      {/* Contact Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-md bg-hero">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-foreground">Get in Touch</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Reach Vanesa directly. All enquiries answered within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-2">
            <a
              href="tel:0405933722"
              className="flex items-center justify-center gap-3 border border-foreground text-foreground px-5 py-4 text-base font-medium hover:bg-foreground hover:text-card transition-colors"
            >
              <Phone size={18} />
              Call Vanesa
            </a>
            <a
              href="sms:0405933722"
              className="flex items-center justify-center gap-3 border border-foreground text-foreground px-5 py-4 text-base font-medium hover:bg-foreground hover:text-card transition-colors"
            >
              <MessageSquare size={18} />
              Send a Text
            </a>
            <a
              href="mailto:vanesa@vanesasakota.com.au"
              className="flex items-center justify-center gap-3 border border-foreground text-foreground px-5 py-4 text-base font-medium hover:bg-foreground hover:text-card transition-colors"
            >
              <Mail size={18} />
              Email Me
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}

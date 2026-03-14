export default function FooterSection() {
  return (
    <footer className="bg-foreground text-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Vanesa Sakota</h3>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">Location</h4>
            <p className="text-sm opacity-70 leading-relaxed">
              Level 3, 26 College Street<br />
              Darlinghurst NSW 2010
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">Contact</h4>
            <p className="text-sm opacity-70">Phone: 0404 933 722</p>
            <p className="text-sm opacity-70">Email: vanesa.sakota@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-card/10 mt-12 pt-8 text-sm opacity-40">
          © {new Date().getFullYear()} Holdsworth House Medical Practice. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

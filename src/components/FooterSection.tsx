export default function FooterSection() {
  return (
    <footer className="bg-foreground text-card">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">Professional Memberships</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Psychotherapy and Counselling Federation of Australia (PACFA)</li>
              <li>Australian Psychological Society (APS)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">Location</h4>
            <p className="text-sm opacity-70 leading-relaxed">
              504/135 Macquarie St,<br />
              Sydney NSW 2000<br />
              <span className="italic">By appointment only.</span><br />
              Also available online via Zoom.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">Contact</h4>
            <p className="text-sm opacity-70">Phone: 0405 933 722</p>
            <p className="text-sm opacity-70">Email: <a href="mailto:vanesa@vanesasakota.com.au" className="hover:opacity-100 hover:underline transition-opacity">vanesa@vanesasakota.com.au</a></p>
          </div>
        </div>
        <div className="border-t border-card/10 mt-12 pt-8">
          <p className="text-sm opacity-40">
            © {new Date().getFullYear()} Vanesa Sakota Psychotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

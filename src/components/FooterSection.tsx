import { useEffect, useRef } from "react";

export default function FooterSection() {
  const sealRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!sealRef.current) return;

    const anchor = sealRef.current;
    const scriptId = "pt-verified-seal-callback";
    if (document.getElementById(scriptId)) return;

    const callback = (data: {
      name: string;
      badgeId: string | number;
      image: { content: string; dimensions: { width: number; height: number } };
    }) => {
      if (String(data.badgeId) !== "13" || !anchor) return;
      anchor.style.display = "block";
      anchor.style.backgroundRepeat = "no-repeat";
      anchor.style.backgroundImage = `url("data:image/svg+xml;base64,${data.image.content}")`;
      anchor.style.width = `${data.image.dimensions.width}px`;
      anchor.style.height = `${data.image.dimensions.height}px`;
      anchor.title = "Psychology Today Verified Profile";
    };

    (window as unknown as Record<string, unknown>).sxcallback = callback;

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src =
      "https://www.psychologytoday.com/api/verified-seal/seals/13/profile/1712769?callback=sxcallback";

    document.body.appendChild(script);

    return () => {
      script.remove();
      delete (window as unknown as Record<string, unknown>).sxcallback;
      anchor.style.backgroundImage = "";
      anchor.style.width = "";
      anchor.style.height = "";
      anchor.title = "";
    };
  }, []);

  return (
    <footer className="bg-foreground text-card">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">Location</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              BMA House<br />
              Level 5, Suite 504<br />
              135 Macquarie Street<br />
              Sydney NSW 2000<br /><br />
              <span className="italic">By appointment only</span>
            </p>
            <a
              ref={sealRef}
              href="https://www.psychologytoday.com/profile/1712769"
              className="sx-verified-seal inline-block mt-4"
              aria-label="Psychology Today verified profile"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">Contact</h2>
            <p className="text-sm opacity-70">Phone: 0405 933 722</p>
            <p className="text-sm opacity-70">Email: <a href="mailto:vanesa@vanesasakota.com.au" className="hover:opacity-100 hover:underline transition-opacity">vanesa@vanesasakota.com.au</a></p>
          </div>
        </div>
        <div className="border-t border-card/10 mt-8 pt-6 space-y-4">
          <p className="text-sm opacity-60 italic leading-relaxed max-w-2xl">
            I acknowledge the Gadigal people of the Eora Nation, the Traditional Custodians of the land on which I live and work. I pay my respects to Elders past and present.
          </p>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Vanesa Sakota Psychotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

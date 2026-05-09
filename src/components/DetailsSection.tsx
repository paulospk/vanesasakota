import { Link } from "react-router-dom";

const helpItems = [
  "Vaginismus",
  "Vulvodynia",
  "Chronic pain",
  "Anxiety & stress",
  "Persistent physical symptoms",
  "Nervous system dysregulation",
  "Sexual pain & intimacy concerns",
  "Mind-body symptoms",
];

export default function DetailsSection() {
  return (
    <>
      {/* What I Help With */}
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                What I Help With
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Areas of focus
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-foreground text-base md:text-lg">
                {helpItems.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border/60 pb-3 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-[680px] space-y-8">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              How I work
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
              My work integrates evidence-based psychotherapy, nervous system awareness, and mind-body approaches to help clients better understand their symptoms, reduce fear and tension, and feel safer in their bodies.
            </p>
            <div className="pt-2">
              <Link
                to="/for-providers"
                className="inline-block text-sm tracking-wide text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
              >
                Read more on the mind-body connection →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

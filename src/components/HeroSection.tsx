



export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-up max-w-[800px]">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Evidence-Based Integrative Psychotherapy Sydney
            </h1>
            <div className="space-y-1">
              <p className="font-serif font-semibold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                Vanesa Sakota
              </p>
              <p className="text-sm text-muted-foreground leading-snug">
                BA (Psychology) MA (Psychotherapy and Counselling)
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div
              className="rounded-[20px] p-3 md:p-4 shadow-sm"
              style={{ background: "var(--hero-portrait-gradient)" }}
            >
              <picture>
                <source srcSet="/images/hero-1040.webp" type="image/webp" />
                <img
                  src="/images/hero-1040.jpg"
                  alt="Vanesa Sakota"
                  width={1040}
                  height={1387}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover object-top rounded-[16px]"
                />
              </picture>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

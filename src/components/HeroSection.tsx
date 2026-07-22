const profileImg = { url: "/images/vanesa-portrait-2026.jpg" };


export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-up max-w-[800px]">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Integrative Psychotherapy Sydney
            </h1>
            <div className="space-y-1">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-tight">
                Vanesa Sakota
              </p>
              <p className="text-sm text-muted-foreground leading-snug">
                BSc (Psychology) MA (Psychotherapy and Counselling) PACFA
              </p>
            </div>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75] max-w-[52ch]">
              Trauma-informed registered psychotherapist working with adults living with anxiety, depression, trauma, addiction, stress, and chronic pain conditions.
            </p>
          </div>

          {/* Right: Image */}
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <img
              src={profileImg.url}
              alt="Vanesa Sakota"
              className="w-full aspect-[4/5] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

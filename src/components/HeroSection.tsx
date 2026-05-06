import profileImg from "@/assets/profile-hero.jpg";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-8 pb-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-4 animate-fade-up max-w-[800px]">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
              Registered Member, PACFA
            </p>
            <p className="font-serif text-lg md:text-xl text-foreground">
              Vanesa Sakota
              <span className="block text-sm md:text-base text-muted-foreground font-sans mt-1">
                Psychotherapist | BSc (Psychology), MA (Psychotherapy &amp; Counselling)
              </span>
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Psychophysiological Psychotherapy
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-[55ch]">
              Resolving chronic physical symptoms through a neurobiological lens. Specialized support for pelvic pain, IBS, and stress-sensitive skin.
            </p>
            <div className="pt-2">
              <a
                href="/for-providers"
                className="inline-block bg-foreground text-card px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Clinical Evidence
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="relative">
              <div className="absolute -inset-3 border border-border -z-10 translate-x-3 translate-y-3" />
              <img
                src={profileImg}
                alt="Vanesa Sakota"
                className="w-full aspect-[4/5] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

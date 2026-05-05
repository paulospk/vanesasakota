import profileImg from "@/assets/profile-hero.jpg";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-12 pb-8 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-up">
            <div className="space-y-2">
              <p className="text-muted-foreground text-base">
                Vanesa Sakota — Psychotherapist | BSc (Psychology), MA (Psychotherapy &amp; Counselling)
              </p>
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
                Registered Member, PACFA
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Where Physical Symptoms and Psychological Health Intersect.
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-[55ch]">
              I work with individuals facing persistent somatic symptoms—such as female pelvic pain, IBS, and stress-sensitive skin—that medicine alone hasn't resolved. My approach focuses on the powerful nervous system drivers underlying physical presentation to facilitate sustainable healing.
            </p>
            <div className="pt-2">
              <a
                href="/for-providers"
                className="inline-block bg-foreground text-card px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Explore the Evidence
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

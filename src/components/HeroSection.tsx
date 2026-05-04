import profileImg from "@/assets/profile.jpg";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-up">
            <div className="space-y-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
                Vanesa Sakota
              </h1>
              <p className="text-muted-foreground text-base">
                Psychotherapist | BSc (Psychology), MA (Psychotherapy &amp; Counselling)
              </p>
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
                Registered Member, PACFA
              </p>
            </div>
            <h2 className="font-serif text-xl md:text-2xl text-foreground/80 leading-snug max-w-[32ch]">
              A Warm, Evidence-Based Approach to Psychophysiological Health
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-[55ch]">
              Creating a safe, clinical, and supportive space to resolve symptoms at the intersection of the nervous system and the mind-body connection.
            </p>
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

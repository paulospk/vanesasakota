import profileImg from "@/assets/profile.jpg";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
              Psychotherapist
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Vanesa Sakota
            </h1>
            <h2 className="font-serif text-xl md:text-2xl text-foreground/80 leading-snug max-w-[28ch]">
              A Warm, Evidence-Based Approach to Therapy
            </h2>
            <p className="text-muted-foreground text-base">
              BSc (Psychology) MA (Psychotherapy and Counselling)
            </p>
            <a
              href="#book"
              className="inline-block bg-foreground text-card px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity mt-4"
            >
              Book Now
            </a>
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

import profileImg from "@/assets/profile-hero.jpg";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-16 pb-6 md:pt-24 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-5 animate-fade-up max-w-[800px]">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Where Physical Symptoms and Psychological Health Intersect
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-[55ch]">
              Resolving chronic physical symptoms through a neurobiological lens. Specialized support for pelvic pain, IBS, and stress-sensitive skin.
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

import profileImg from "@/assets/profile-hero.jpg";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-24 pb-20 md:pt-36 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-10 animate-fade-up">
            <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-espresso/70">
              Sydney | In-Person & Online
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-espresso leading-[1.02]">
              Mind-Body Psychotherapy Sydney
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-chocolate leading-[1.4] max-w-[42ch]">
              Integrative psychotherapy for complex somatic, psychophysiological and relational presentations.
            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 animate-fade-up space-y-5" style={{ animationDelay: "100ms" }}>
            <img
              src={profileImg}
              alt="Vanesa Sakota, Sydney psychotherapist"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="text-left">
              <p className="font-serif text-xl md:text-2xl text-espresso">
                Vanesa Sakota
              </p>
              <p className="text-xs text-espresso/60 tracking-[0.15em] uppercase mt-2">
                BSc Psychology | MA Psychotherapy & Counselling | PACFA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

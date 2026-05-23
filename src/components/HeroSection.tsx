import profileImg from "@/assets/profile-hero.jpg";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-12 md:pt-28 md:pb-20">
        {/* Main heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1] max-w-[18ch] mb-10 md:mb-14 animate-fade-up">
          Mind-Body Psychotherapy Sydney
        </h1>

        {/* About Vanesa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 animate-fade-up">
            <img
              src={profileImg}
              alt="Vanesa Sakota, Mind-Body Psychotherapist in Sydney"
              className="w-full aspect-[4/5] object-cover object-top"
            />
          </div>

          <div className="lg:col-span-7 space-y-5 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-muted-foreground">
              About Vanesa
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
              A specialised, integrative approach to complex mind-body conditions.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Persistent physical symptoms can be complex, and experiencing them without a clear structural explanation can be challenging.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              When medical investigations rule out organic disease, research indicates that symptoms may be driven and maintained by functional changes in how the nervous system processes stress, trauma, and adversity. My practice provides a specialised, integrative approach to support individuals navigating these complex mind-body conditions.
            </p>
            <p className="text-sm text-muted-foreground tracking-wide pt-2">
              Vanesa Sakota <span className="px-2">|</span> BSc (Psychology) MA (Psychotherapy and Counselling) PACFA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

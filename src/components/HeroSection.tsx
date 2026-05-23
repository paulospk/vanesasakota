import profileImg from "@/assets/profile-hero.jpg";


export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-up max-w-[800px]">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Mind-Body Psychotherapy Sydney
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[52ch]">
              Persistent physical symptoms can be complex, and experiencing them without a clear structural explanation can be challenging.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[52ch]">
              When medical investigations rule out organic disease, research indicates that symptoms may be driven and maintained by functional changes in how the nervous system processes stress, trauma, and adversity. My practice provides a specialised, integrative approach to support individuals navigating these complex mind-body conditions.
            </p>
          </div>

          {/* Right: Image */}
          <div className="animate-fade-up space-y-4" style={{ animationDelay: "100ms" }}>
            <img
              src={profileImg}
              alt="Vanesa Sakota"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="text-left">
              <p className="font-serif text-xl md:text-2xl text-foreground">
                Vanesa Sakota
              </p>
              <p className="text-sm text-muted-foreground tracking-wide mt-1">
                BSc (Psychology) MA (Psychotherapy and Counselling) PACFA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

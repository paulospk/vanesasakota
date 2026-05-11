import profileImg from "@/assets/profile-hero.jpg";


export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-8 animate-fade-up max-w-[800px]">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Mind-Body Psychotherapy Sydney
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-[52ch]">
              Sydney-based psychotherapist specialising in the relationship between psychological states, stress physiology, and physical health.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[52ch]">
              My area of interest is working with symptoms that persist despite clear medical investigations, particularly where autonomic dysregulation, chronic stress physiology, and nervous system threat responses appear to drive or maintain physical symptoms.
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

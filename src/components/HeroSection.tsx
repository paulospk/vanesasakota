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
            <div className="space-y-0.5">
              <p className="font-serif text-lg md:text-xl text-foreground leading-tight">
                Vanesa Sakota, <span className="text-muted-foreground">BSc, MPsych&amp;Couns, PACFA</span>
              </p>
            </div>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75] max-w-[52ch]">
              Sydney-based psychotherapist working with chronic stress, trauma, and psychophysiological symptoms.
            </p>
          </div>

          {/* Right: Image */}
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <img
              src={profileImg}
              alt="Vanesa Sakota"
              className="w-full aspect-[4/5] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

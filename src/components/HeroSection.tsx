import profileImg from "@/assets/profile-hero.jpg";


export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="sketchy">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" seed="3" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
        </filter>
        <filter id="sketchy-mobile">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" seed="3" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </svg>
      <style>{`
        #sketch-text {
          filter: url(#sketchy);
          text-shadow: 1px 1px 0px rgb(28 43 58 / 0.35);
        }
        @media (max-width: 375px) {
          #sketch-text {
            filter: url(#sketchy-mobile);
            text-shadow: 0.5px 0.5px 0px rgb(28 43 58 / 0.35);
          }
        }
      `}</style>
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-up max-w-[800px]">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              <span id="sketch-text" className="inline">Mind-Body</span> Psychotherapy Sydney
            </h1>
            <div className="space-y-1">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-tight">
                Vanesa Sakota
              </p>
              <p className="text-sm text-muted-foreground leading-snug">
                BSc (Psychology) MA (Psychotherapy and Counselling) PACFA
              </p>
            </div>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75] max-w-[52ch]">
              Trauma-informed registered psychotherapist working with adults living with anxiety, depression, trauma histories and psychophysiological symptoms.
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

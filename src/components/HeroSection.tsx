import profileImg from "@/assets/profile-hero.jpg";
import mindBodyMark from "@/assets/mindbody-mark.png.asset.json";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-up max-w-[800px]">
            <div className="space-y-2">
              <img
                src={mindBodyMark.url}
                alt="mind.body — Vanesa Sakota Psychotherapy"
                className="h-16 md:h-20 lg:h-24 w-auto select-none"
                draggable={false}
              />
              <p className="font-serif text-lg md:text-xl text-foreground/80">
                Psychotherapy Sydney
              </p>
            </div>
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

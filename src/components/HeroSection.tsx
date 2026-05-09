import profileImg from "@/assets/profile-hero.jpg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-hero border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-8 animate-fade-up max-w-[800px]">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              Psychotherapy for<br />the mind-body connection.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-[52ch]">
              I support individuals experiencing psychophysiological symptoms, with a special interest in stress-sensitive skin conditions and female pelvic pain.
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

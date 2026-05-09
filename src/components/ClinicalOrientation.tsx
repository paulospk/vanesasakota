import { Link } from "react-router-dom";

export default function ClinicalOrientation() {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
        <div className="max-w-[640px] space-y-8">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug tracking-tight">
            Hi, I'm Vanesa.
          </h2>
          <div className="space-y-5 text-muted-foreground text-base md:text-[17px] leading-[1.8]">
            <p>
              I'm a psychotherapist with a special interest in the connection between emotional wellbeing, the nervous system, and physical symptoms.
            </p>
            <p>
              I work with people experiencing conditions such as vaginismus, vulvodynia, chronic pain, anxiety, and stress-related symptoms. My approach is warm, collaborative, and grounded in evidence-based therapy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function DetailsSection() {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
          <div className="lg:col-span-3 space-y-2">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              The Approach
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 max-w-[680px]">
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
              My approach draws on: Acceptance and Commitment Therapy (ACT), Clinical Parts Therapy, Imagery Rescripting, and Emotional Awareness &amp; Expression Therapy (EAET).
            </p>
            <Link
              to="/approach"
              className="inline-block text-[15px] md:text-base text-foreground border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
            >
              Learn about my therapeutic approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

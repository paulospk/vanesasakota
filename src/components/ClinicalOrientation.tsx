export default function ClinicalOrientation() {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-muted-foreground mb-4">
              Scope of Practice
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              A broader women&rsquo;s practice
            </h2>
          </div>
          <div className="lg:col-span-7 max-w-[680px]">
            <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
              While I hold a clinical special interest in pelvic pain conditions such as <strong className="text-foreground font-medium">vulvodynia</strong> and <strong className="text-foreground font-medium">vaginismus</strong>, much of my work supports women navigating <strong className="text-foreground font-medium">anxiety, trauma, relationship difficulties, emotional overwhelm and chronic stress</strong>, alongside the quieter work of identity, self-worth and intimacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

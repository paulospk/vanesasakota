const coreFocus = [
  {
    title: "Somatic Resolution",
    description: "Working with the nervous system to address stress and physical symptoms.",
  },
  {
    title: "Parts Work",
    description: "Understanding the internal landscape to resolve deep-seated patterns.",
  },
  {
    title: "Anxiety & Stress",
    description: "Evidence-based strategies for psychophysiological regulation.",
  },
  {
    title: "Relational Therapy",
    description: "Navigating the complexities of connection and personal development.",
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* Core Focus */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
              Core Focus
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
              Areas of Specialised Practice
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {coreFocus.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border bg-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
                Philosophy
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                A Philosophy of Integrated Care
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                I believe the therapeutic relationship is at the heart of meaningful change. My approach is integrative—blending clinical evidence with a deep respect for your lived experience. Whether you are navigating anxiety, depression, or symptoms that feel physically persistent, we work collaboratively to uncover patterns and develop practical strategies for well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
                Background
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                Background & Training
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                Vanesa transitioned from a career in technology to focus on the human element of health, holding a Bachelor of Science in Psychology and a Master of Psychotherapy and Counselling.
              </p>
              <p>
                Throughout her training, Vanesa developed expertise in a range of therapeutic modalities including somatic and parts-based approaches, Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), and psychodynamic psychotherapy. She draws on these flexibly, tailoring her work to each client's unique needs and goals.
              </p>
              <p>
                Vanesa has accumulated extensive clinical experience across community mental health settings and private practice, working with individuals from diverse cultural backgrounds and across a wide spectrum of presenting concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

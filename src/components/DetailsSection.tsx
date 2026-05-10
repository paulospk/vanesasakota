import { Link } from "react-router-dom";

const helpItems = [
  {
    title: "Pelvic Health",
    description:
      "Somatic manifestations in the pelvic floor, including vulvodynia, vaginismus, and chronic pelvic pain. The nervous system's learned protective responses can maintain symptoms long after an initial trigger has resolved.",
  },
  {
    title: "Psychodermatology",
    description:
      "Stress-responsive skin conditions including eczema, psoriasis, alopecia, and chronic pruritus (itch), supported by an understanding of the neuro-immune pathways linking psychological states and skin reactivity.",
  },
  {
    title: "Functional Gastrointestinal Disorders",
    description:
      "IBS and gut-brain axis dysregulation, particularly where investigations return clear results but symptoms persist, pointing to central sensitisation and autonomic contributions to gut function.",
  },
  {
    title: "Chronic Pain & Musculoskeletal Tension",
    description:
      "Working with adaptive bracing patterns, tension-type headaches, and chronic musculoskeletal pain understood through a biopsychosocial and nervous system lens, rather than as structural damage or learned protective physiology.",
  },
  {
    title: "Other",
    description:
      "Vanesa also works with a broader range of stress-sensitive and psychophysiological presentations, including nervous system dysregulation, autonomic hypervigilance, somatic anxiety, and persistent physical symptoms that lack a clear structural or organic medical explanation.",
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* What I Help With */}
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                What I can help with
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-y-5 max-w-[640px]">
                {helpItems.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-border/60 pb-4"
                  >
                    <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-[720px] space-y-6">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              How I work
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-[1.8]">
              <p>
                My work is integrative, trauma-informed, and grounded in contemporary neuroscience and relational psychotherapy. I draw on a range of modalities including CBT, Acceptance and Commitment Therapy (ACT), EMDR, Brainspotting, Resource Therapy, and attachment-informed approaches, selecting and adapting these based on what each individual needs at each stage of the work.
              </p>
              <p>
                Central to my practice is the integration of top-down and bottom-up processing. Cognitive and meaning-making work is valuable, but it is rarely sufficient on its own when the body is holding the story. Bottom-up, somatic, and polyvagal-informed approaches allow clients to work directly with nervous system states, building the capacity for safety, tolerance, and regulation from within the body itself, not just from insight.
              </p>
              <p>
                I work within a multidisciplinary framework and welcome referrals from GPs, integrative and functional medicine practitioners, dermatologists, gynaecologists, pelvic floor physiotherapists, pain specialists, and allied health professionals. Collaborative care, particularly for complex or medically entangled presentations, is something I actively seek out rather than work around.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/for-providers"
                className="inline-block text-sm tracking-wide text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
              >
                Read more on the mind-body connection →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

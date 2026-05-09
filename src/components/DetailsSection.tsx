import { Link } from "react-router-dom";

const helpItems = [
  "Female pelvic pain (including Vulvodynia and Vaginismus)",
  "Stress-sensitive skin conditions — eczema, psoriasis, hair loss, chronic itching, vitiligo",
  "Psychophysiological and nervous system-based symptom presentations",
  "Chronic stress-related physical symptoms",
  "IBS and functional gastrointestinal symptoms",
  "Chronic tension and pain conditions",
  "Nervous system hypervigilance and autonomic dysregulation",
];

export default function DetailsSection() {
  return (
    <>
      {/* What I Help With */}
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                What I Help With
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Areas of focus
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-y-4 text-foreground text-base md:text-lg max-w-[640px]">
                {helpItems.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border/60 pb-3 leading-relaxed"
                  >
                    {item}
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
                My approach is integrative, trauma-informed, and grounded in both neuroscience and psychotherapy. Therapy may incorporate psychoeducation, CBT, Acceptance and Commitment Therapy, somatic and body-based approaches, nervous system regulation work, EMDR, Brainspotting, Resource Therapy, attachment-informed psychotherapy, and polyvagal-informed approaches.
              </p>
              <p>
                Alongside top-down cognitive approaches, I place strong importance on bottom-up work — supporting clients to develop greater safety within the body, reduce chronic states of fight-or-flight, and better understand the nervous system patterns contributing to symptom persistence.
              </p>
              <p>
                I work collaboratively within a multidisciplinary framework and welcome referrals from GPs, integrative and functional medicine practitioners, dermatologists, gynaecologists, pelvic floor physiotherapists, pain specialists, and allied health practitioners.
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

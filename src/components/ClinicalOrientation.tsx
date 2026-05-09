import { Link } from "react-router-dom";

export default function ClinicalOrientation() {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
        <div className="max-w-[640px] space-y-8">
          <h2 className="font-serif text-2xl md:text-3xl text-slate-700 leading-snug tracking-tight">
            The Neurobiology of Persistent Symptoms
          </h2>
          <p className="text-slate-600 text-base md:text-[17px] leading-[1.8]">
            Many chronic physical symptoms—including persistent pain, IBS, and skin flare-ups—are maintained by a nervous system stuck in a cycle of high alert. My practice focuses on the interface where the brain and body meet, utilising evidence-based interventions to resolve functional symptoms that are not organic in nature.
          </p>
          <div className="pt-2">
            <Link
              to="/for-providers"
              className="inline-block text-sm tracking-wide text-slate-700 border-b border-slate-400 pb-1 hover:text-slate-900 hover:border-slate-700 transition-colors"
            >
              Explore the Evidence Base →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

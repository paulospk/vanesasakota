import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const MyApproach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-[800px] space-y-6 animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              My Approach
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              How I work.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-[58ch]">
              A grounded, collaborative approach to working with the body, the nervous system, and the stories we carry.
            </p>
          </div>
        </div>
      </section>

      {/* Listening first */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Starting Point
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">Listening first</h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-5 text-muted-foreground text-base md:text-lg leading-[1.8]">
              <p>
                Many people I see have spent a long time looking for answers. Their symptoms are real, often distressing, and frequently dismissed. My work begins with listening carefully and taking what you bring seriously.
              </p>
              <p>
                Together we make sense of what's happening in your body and your life — gently, at your pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The work */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                The Work
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">An integrative approach</h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-5 text-muted-foreground text-base md:text-lg leading-[1.8]">
              <p>
                I draw on evidence-based psychotherapy, nervous system awareness, and mind-body approaches — including Brainspotting, parts work, and CBT — adapted to what you need.
              </p>
              <p>
                The aim is to reduce fear, settle the nervous system, and help you feel safer in your body again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three modes */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-[800px] mb-14">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Mind-Body Framework
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              Three ways into the work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
                Bottom-Up
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">Working with the body and nervous system</h3>
              <p className="text-muted-foreground text-base leading-[1.8]">
                Using somatic and Brainspotting techniques to help the nervous system process what words alone can't reach — softening protective responses and restoring a sense of safety in the body.
              </p>
            </div>

            <div className="space-y-4">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
                Top-Down
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">Working with thought and meaning</h3>
              <p className="text-muted-foreground text-base leading-[1.8]">
                Exploring the beliefs, fears, and stories that shape how the body responds — using approaches like CBT and parts work to gently shift the patterns that keep symptoms locked in.
              </p>
            </div>

            <div className="space-y-4">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
                Systems Approach
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">Working with the whole picture</h3>
              <p className="text-muted-foreground text-base leading-[1.8]">
                Considering relationships, history, environment, and the medical journey alongside the symptom itself — because mind-body work is never just about the body in isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pioneers of somatic work */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-[800px] mb-14">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Lineage
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              The pioneers behind this work
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-[1.8]">
              The mind-body approach I use is grounded in decades of research and clinical practice from a small group of pioneers who reshaped how we understand trauma, stress, and the body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
                Peter Levine
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">Somatic Experiencing</h3>
              <p className="text-muted-foreground text-base leading-[1.8]">
                Levine showed that trauma lives in the body as incomplete survival responses. His work helps the nervous system gently release stored stress and return to balance.
              </p>
            </div>

            <div className="space-y-4">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
                Bessel van der Kolk
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">The Body Keeps the Score</h3>
              <p className="text-muted-foreground text-base leading-[1.8]">
                Van der Kolk's research transformed our understanding of how trauma is held in the body and brain — and why healing requires more than talk alone.
              </p>
            </div>

            <div className="space-y-4">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
                Gabor Maté
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">When the Body Says No</h3>
              <p className="text-muted-foreground text-base leading-[1.8]">
                Maté's work draws clear links between chronic stress, suppressed emotion, and physical illness — reminding us that the body always speaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What sessions look like */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Sessions
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">What sessions look like</h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-5 text-muted-foreground text-base md:text-lg leading-[1.8]">
              <p>
                Sessions are 50 minutes, online via Zoom. We start with a conversation about what's bringing you in and what you're hoping for. From there, the work unfolds in a way that suits you — there's no script.
              </p>
              <p>
                Some people come for a few sessions to work through something specific. Others stay longer. Both are welcome.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block text-sm tracking-wide text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                >
                  Book a session →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default MyApproach;

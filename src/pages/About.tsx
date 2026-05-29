import profileImg from "@/assets/profile-hero.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-4 md:space-y-5 animate-fade-up">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                About
              </p>
              <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
                About Vanesa
              </h1>
              <div className="space-y-4 text-muted-foreground text-[15px] md:text-base leading-[1.7]">
                <p>
                  Vanesa is a psychotherapist based in Sydney. She holds a Master of Psychotherapy and Counselling and a Bachelor of Science in Psychology, following a previous career in medical technology. She completed her training and placements in Sydney, developing a practice that integrates traditional talk therapy with trauma-informed somatic and mind-body approaches.
                </p>
                <p>
                  Vanesa works with people experiencing persistent physical symptoms where stress, emotional experience, and nervous system patterns can play a role in how symptoms are felt and maintained. This includes both complex presentations that are not fully explained by medical investigations, and stress-sensitive conditions where symptoms are medically recognised but fluctuate with stress and arousal.
                </p>
                <p>
                  She has a particular interest in pelvic pain presentations, including vulvodynia, vaginismus, and chronic pelvic pain, where pelvic floor muscle guarding, threat responses, and central sensitisation processes may be relevant. She also works with stress-responsive skin and hair conditions such as eczema, psoriasis, and stress-related hair loss, where symptom flares often correlate with stress physiology and emotional load.
                </p>
                <p>
                  Her work draws on evidence-based therapies such as CBT and ACT, alongside somatic and parts-based modalities such as Resource Therapy and Brainspotting with ongoing clinical supervision to stay current and grounded in her practice.
                </p>
                <p>
                  Vanesa offers a collaborative, and relational therapeutic space that supports emotional steadiness, flexibility, and meaningful change over time.
                </p>
                <p>
                  When she is not with her clients, she enjoys time with family, writing, and getting to a Pilates class.
                </p>
              </div>
            </div>
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

      {/* How I work */}
      {/* How I work */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Approach
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                An Integrative Systems Approach
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[640px]">
              <div className="divide-y divide-border/60">
                <div className="py-5 first:pt-0 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Cognitive Processes | Top Down</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
                    Drawing on Cognitive Behavioural Therapy (CBT) and Acceptance and Commitment Therapy (ACT), treatment addresses thought patterns, core beliefs, and psychological flexibility that can influence symptom-related distress and everyday functioning.
                  </p>
                </div>
                <div className="py-5 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Emotional &amp; Relational Processes</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
                    Using Resource Therapy (Parts Work), we explore internal emotional states and protective patterns that may have developed in response to historical stress, adversity, or a lack of environmental safety. The goal is to support greater self-awareness, emotional integration, and more adaptive responding.
                  </p>
                </div>
                <div className="py-5 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Autonomic &amp; Physiological Processes | Bottom Up</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
                    Drawing on Somatic Experiencing and contemporary understandings of autonomic nervous system functioning, treatment focuses on increasing awareness of physiological stress responses, supporting the body&rsquo;s capacity for regulation, and assisting the nervous system in shifting out of chronic threat states.
                  </p>
                </div>
                <div className="py-5 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Emotional Awareness &amp; Expression Therapy (EAET)</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
                    Developed specifically for chronic pain by leading mind-body medicine pioneers Dr. Howard Schubiner and Dr. Mark Lumley, EAET is a neuro-somatic framework. Unlike therapies focused solely on adapting to discomfort, EAET treats centralized or neuroplastic symptoms as potentially reversible. By identifying and safely processing hidden emotional stressors, we work to deactivate the central nervous system&rsquo;s chronic threat response.
                  </p>
                </div>
                <div className="py-5 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Resource Therapy (Advanced Parts Work)</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
                    Founded by Australian psychologist Professor Gordon Emmerson, Resource Therapy is a trauma-informed, psychodynamic framework deeply rooted in relational and attachment concepts. It operates on the premise that our personality is composed of distinct internal parts. In chronic illness, physical symptoms can manifest as a somatic defense mechanism &mdash; the body speaking what a part cannot voice. By safely addressing underlying attachment wounds and internal conflicts, we reduce the systemic tension driving physical pain.
                  </p>
                </div>
                <div className="py-5 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Supportive CBT &amp; Acceptance and Commitment Therapy (ACT)</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
                    To support this deeper processing, I integrate elements of Cognitive Behavioral Therapy (CBT) and ACT as vital grounding frameworks. While EAET and Parts Work target symptom resolution, CBT and ACT provide the essential structural support. They offer practical tools to navigate daily stress, defuse from catastrophic thoughts about pain, and build the psychological flexibility needed to safely engage with your body&rsquo;s healing process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Memberships */}
      <section>
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Credentials
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[640px]">
              <ul className="divide-y divide-border/60">
                <li className="py-4 first:pt-0">
                  <p className="text-[15px] md:text-base text-foreground">Master of Psychotherapy and Counselling</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Western Sydney University, 2023 — Dean&rsquo;s Merit List</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Bachelor of Science in Psychology</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Griffith University, 2012</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Certificate, Clinical Resource Therapist</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Resource Therapy International, 2023</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Registered Member</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Psychotherapy and Counselling Federation of Australia (PACFA)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;

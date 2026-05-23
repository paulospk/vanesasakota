import profileImg from "@/assets/profile-hero.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-6 animate-fade-up max-w-[800px]">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
                About
              </p>
              <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
                Hi, I'm Vanesa.
              </h1>
              <div className="space-y-5 text-muted-foreground text-lg leading-[1.8]">
                <p>
                  I'm a psychotherapist with a special interest in the connection between emotional wellbeing, the nervous system, and physical symptoms.
                </p>
                <p>
                  I work with people experiencing conditions such as vaginismus, vulvodynia, chronic pain, anxiety, and stress-related symptoms. My approach is warm, collaborative, and grounded in evidence-based therapy.
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
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Approach
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                An Integrative Systems Approach
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-5 text-muted-foreground text-base md:text-lg leading-[1.8]">
              <p>
                Persistent physical symptoms are rarely maintained by a single factor. My approach considers the interaction between cognitive, emotional, behavioural, relational, and autonomic processes that may contribute to symptom persistence following appropriate medical assessment.
              </p>

              <div className="pt-4 space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Cognitive Processes</h3>
                  <p>
                    Drawing on Cognitive Behavioural Therapy (CBT) and Acceptance and Commitment Therapy (ACT), treatment addresses thought patterns, beliefs, emotional responses, and psychological flexibility that may influence symptom-related distress and daily functioning.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Emotional &amp; Relational Processes</h3>
                  <p>
                    Using Resource Therapy, treatment explores internal states and protective patterns that may have developed in response to stress, adversity, or perceived threat. The goal is to support greater self-awareness, emotional integration, and adaptive responding.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Autonomic &amp; Physiological Processes</h3>
                  <p>
                    Drawing on Somatic Experiencing and contemporary understandings of autonomic nervous system functioning, treatment focuses on increasing awareness of physiological stress responses and developing greater capacity for regulation, flexibility, and recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education & Memberships */}
      <section>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px]">
              <ul className="space-y-6">
                <li>
                  <p className="text-foreground">Master of Psychotherapy and Counselling</p>
                  <p className="text-muted-foreground text-sm mt-1">Western Sydney University, 2023 (Dean&rsquo;s Merit List)</p>
                </li>
                <li>
                  <p className="text-foreground">Bachelor of Science in Psychology</p>
                  <p className="text-muted-foreground text-sm mt-1">Griffith University, 2012</p>
                </li>
                <li>
                  <p className="text-foreground">Certificate, Clinical Resource Therapy</p>
                  <p className="text-muted-foreground text-sm mt-1">Resource Therapy International, 2023</p>
                </li>
                <li>
                  <p className="text-foreground">Registered Member</p>
                  <p className="text-muted-foreground text-sm mt-1">Psychotherapy and Counselling Federation of Australia (PACFA)</p>
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

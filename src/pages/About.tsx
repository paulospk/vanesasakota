import profileImg from "@/assets/profile.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-up">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
                About Vanesa
              </p>
              <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
                A Warm, Evidence-Based Approach to Therapy
              </h1>
              <p className="text-muted-foreground text-lg max-w-[55ch]">
                Creating a safe and supportive space where you can explore your thoughts, feelings, and experiences without judgement.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="relative">
                <div className="absolute -inset-3 border border-border -z-10 translate-x-3 translate-y-3" />
                <img
                  src={profileImg}
                  alt="Vanesa Sakota"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Unique Perspective on Health */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">A Unique Perspective on Health</h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              Therapy offers a space to explore what's beneath the surface — the emotional patterns, physical symptoms, and experiences that are often difficult to put into words. My work focuses on the connection between mind and body: the way unresolved experiences can show up as chronic pain, tension, fatigue, stress-sensitive skin conditions, pelvic pain, and a nervous system that never quite settles.
            </p>
            <p>
              I work with adults navigating these presentations alongside trauma, relationship issues, anxiety and depression.
            </p>
            <p>
              I draw on Clinical Resource Therapy, Brainspotting and CBT to work across both conscious and unconscious processes — addressing thoughts and beliefs, as well as the deeper emotional and somatic material that often drives symptoms and patterns.
            </p>
            <p>
              Please don't hesitate to reach out if you have any questions.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;

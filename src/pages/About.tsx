import profileImg from "@/assets/profile-hero.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Approach
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">How I work</h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-5 text-muted-foreground text-base md:text-lg leading-[1.8]">
              <p>
                Many of the people I see have spent a long time looking for answers. Their symptoms are real, often distressing, and frequently dismissed. My work begins with listening carefully and taking what you bring seriously.
              </p>
              <p>
                Together we make sense of what's happening in your body and your life — gently, at your pace. The goal is to reduce fear, settle the nervous system, and help you feel safer in your body again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Memberships */}
      <section>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Credentials
              </p>
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

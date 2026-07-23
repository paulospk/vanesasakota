import { Helmet } from "react-helmet-async";
const profileImg = { url: "/images/room-3.jpg" };
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Vanesa Sakota | Integrative Psychotherapist Sydney CBD</title>
        <meta name="description" content="Vanesa Sakota is a PACFA-registered psychotherapist in Sydney CBD with a Master of Psychotherapy from Western Sydney University. Integrative approach combining CBT, ACT, Somatic Experiencing and Resource Therapy." />
        <link rel="canonical" href="https://vanesasakota.com.au/about" />
        <meta property="og:title" content="About Vanesa Sakota | Integrative Psychotherapist Sydney CBD" />
        <meta property="og:description" content="PACFA-registered psychotherapist in Sydney CBD. Master of Psychotherapy, Western Sydney University. Integrative mind-body approach." />
        <meta property="og:url" content="https://vanesasakota.com.au/about" />
      </Helmet>
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
                  Driven by a lifelong curiosity about human behavior, Vanesa completed her undergraduate training in Psychological Science at <strong className="text-foreground font-semibold">Griffith University</strong> in <strong className="text-foreground font-semibold">2008</strong>. Recognizing early on that effective therapy requires both academic knowledge and lived maturity, she intentionally took time to gain real-world experience before entering clinical practice.
                </p>
                <p>
                  This journey led to a dynamic <strong className="text-foreground font-semibold">seven-year</strong> career in health tech, where Vanesa served as <strong className="text-foreground font-semibold">Head of Product</strong> for an Australian medical software startup. Leading international teams, navigating high-stakes environments, and building solutions from the ground up provided her with a unique understanding of systemic pressure, high-performance burnout, and personal recalibration.
                </p>
                <p>
                  Returning to her original calling, Vanesa completed a <strong className="text-foreground font-semibold">Master of Psychotherapy and Counselling</strong> at <strong className="text-foreground font-semibold">Western Sydney University</strong> in <strong className="text-foreground font-semibold">2023</strong>. This program was rigorous, highly experiential and emphasized trauma-informed practice and the critical development of the therapist’s inner capacity.
                </p>
                <p>
                  Trained directly by <strong className="text-foreground font-semibold">Penny Gardner</strong> (<em><strong className="text-foreground font-semibold">A Safe Place for Change</strong></em>) and under the ongoing clinical supervision of senior psychologist <strong className="text-foreground font-semibold">Philipa Thornton</strong>, Vanessa brings clinical precision, rich real-world context, and deep empathy to her private practice, offering a grounded, collaborative space where lived experience meets rigorous clinical care.
                </p>
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <img
                src={profileImg.url}
                alt="Vanesa Sakota's therapy room"
                className="w-full aspect-[4/3] object-cover"
              />
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
                  <p className="text-[15px] md:text-base text-foreground"><strong>Master of Psychotherapy and Counselling</strong></p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2"><strong className="text-foreground font-semibold">Western Sydney University</strong>, <strong className="text-foreground font-semibold">2023</strong>: <strong className="text-foreground font-semibold">Dean&rsquo;s Merit List</strong></p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground"><strong>Bachelor of Science in Psychology</strong></p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2"><strong className="text-foreground font-semibold">Griffith University</strong>, <strong className="text-foreground font-semibold">2012</strong></p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground"><strong>Registered Psychotherapist</strong></p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2"><strong className="text-foreground font-semibold">Psychotherapy and Counselling Federation of Australia (PACFA)</strong></p>
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

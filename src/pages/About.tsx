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
                  Driven by a lifelong curiosity about human behavior, Vanesa completed her undergraduate training in Psychological Science at Griffith University in 2008. Recognizing early on that effective therapy requires both academic knowledge and lived maturity, she intentionally took time to gain real-world experience before entering clinical practice.
                </p>
                <p>
                  This journey led to a dynamic seven-year career in health tech, where Vanesa served as Head of Product for an Australian medical software startup. Leading international teams, navigating high-stakes environments, and building solutions from the ground up provided her with a unique understanding of systemic pressure, high-performance burnout, and personal recalibration.
                </p>
                <p>
                  Returning to her original calling, Vanesa completed a Master of Psychotherapy and Counselling at Western Sydney University in 2023. This program was rigorous, highly experiential and emphasized trauma-informed practice and the critical development of the therapist’s inner capacity.
                </p>
                <p>
                  Trained directly by Penny Gardner (author of <em>A Safe Place for Change</em>) and today under the ongoing supervision of senior psychologist Philipa Thornton, Vanesa brings a grounded, deeply empathetic, and refined approach to her private practice, firmly believing that a therapist can only guide clients as far as she has walked herself.
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
                  <p className="text-[15px] md:text-base text-foreground">Master of Psychotherapy and Counselling</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Western Sydney University, 2023: Dean&rsquo;s Merit List</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Bachelor of Science in Psychology</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Griffith University, 2012</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Registered Psychotherapist</p>
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

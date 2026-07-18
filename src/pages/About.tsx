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
                  I've been drawn to understanding people for as long as I can remember: how we think, why we do what we do, what sits underneath our behaviour. It was never really a decision so much as a pull, so I studied psychology straight out of high school at Griffith University in Brisbane.
                </p>
                <p>
                  But when I finished my degree, I made a choice that ended up shaping everything that came after: I decided I wasn't ready to practise. I was in my early twenties, and I couldn't picture myself sitting across from someone decades into a life I hadn't yet lived, and offering them something real. I trusted that instinct, and I moved to Sydney instead, without a clear plan beyond knowing there was more life to live first.
                </p>
                <p>
                  What followed was seven years in health tech, as part of a startup building medical software, where I eventually became Head of Product. It was an intense, formative chapter: pitching to investors, travelling globally, building something from the ground up, succeeding faster than I expected to. Eventually that chapter came to an end, and I found myself needing to rebuild and recalibrate. In that process, I realised the pull back to psychology had never really left. It had just been waiting.
                </p>
                <p>
                  Too much time had passed for a straightforward Master's in Psychology, so I chose a Master of Psychotherapy and Counselling at Western Sydney University instead, a decision I'm genuinely glad I made. Unlike more conventional training, this program was highly experiential and trauma-informed, with a real emphasis on developing the person of the therapist, not just accumulating techniques. It asked as much of me personally as it did academically, and I think that's exactly what makes for good therapy: the person doing the work has to have done their own work too. I completed the degree in 2023 and have been in private practice since.
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
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Cognitive Processes</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
                    Drawing on Cognitive Behavioural Therapy (CBT) and Acceptance and Commitment Therapy (ACT), treatment addresses thought patterns, beliefs, emotional responses, and psychological flexibility that may influence symptom-related distress and daily functioning.
                  </p>
                </div>
                <div className="py-5 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Emotional &amp; Relational Processes</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
                    Using Resource Therapy, treatment explores internal states and protective patterns that may have developed in response to stress, adversity, or perceived threat. The goal is to support greater self-awareness, emotional integration, and adaptive responding.
                  </p>
                </div>
                <div className="py-5 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">Autonomic &amp; Physiological Processes</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const TeenageCounselling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Teenage Counselling Sydney | Anxiety &amp; Stress Therapy</title>
        <meta name="description" content="Teenage counselling in Sydney CBD for older teens (16+) navigating anxiety, social anxiety, school and family stress, and life transitions. PACFA registered." />
        <meta name="keywords" content="teenage counselling Sydney, teen therapy Sydney, adolescent counselling Sydney, social anxiety disorder therapy, generalised anxiety disorder, anxiety therapy Sydney" />
        <link rel="canonical" href="https://www.vanesasakota.com.au/teenage-counselling-sydney" />
        <meta property="og:title" content="Teenage Counselling Sydney | Anxiety &amp; Stress Therapy" />
        <meta property="og:description" content="Teenage counselling in Sydney CBD for older teens (16+) navigating anxiety, social anxiety, school and family stress, and life transitions." />
        <meta property="og:url" content="https://www.vanesasakota.com.au/teenage-counselling-sydney" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-16">
          <div className="max-w-[720px] space-y-4 md:space-y-5 animate-fade-up">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Teenage Counselling
            </p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
              Teenage Counselling in Sydney CBD
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.7]">
              Therapy for older teenagers, aged 16 and above, who are navigating anxiety, social anxiety, school and family stress, or a period of significant change.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section>
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-16">
          <div className="max-w-[680px] space-y-8">
            <div className="space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Who this is for
              </h2>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
                I see older teenagers alongside my adult caseload, which means sessions are grounded in the same evidence based, trauma informed approach I use with adults, adapted to where a young person is developmentally. Many of the teenagers I work with are managing generalised anxiety, a persistent social anxiety that makes school, part time work or socialising feel exhausting, perfectionism and performance pressure, family conflict, or the transition out of school and into study, work and independence.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                How sessions work
              </h2>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
                Sessions are 50 minutes, with a longer first appointment to understand what has brought your teenager to therapy and to cover relevant history. Parents are usually involved in the initial conversation, and then the therapeutic relationship belongs to the young person, with confidentiality explained clearly at the outset and safety exceptions named up front. Progress is reviewed collaboratively, and a parent or carer can be brought back into the work when it will help.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                The approach
              </h2>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
                The work draws on Acceptance and Commitment Therapy, clinical parts therapy and nervous system regulation, so a young person learns to notice what is happening in their body, understand the patterns underneath the worry, and keep moving toward the things that matter to them. You can read more about the frameworks I use on the{" "}
                <Link to="/approach" className="text-foreground underline underline-offset-4 hover:opacity-60 transition-opacity">
                  approach page
                </Link>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Getting started
              </h2>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
                No GP referral or Mental Health Care Plan is required. Sessions are held in person at BMA House, 135 Macquarie Street, Sydney CBD, with online sessions available. If you are unsure whether therapy is the right step for your teenager right now, please{" "}
                <Link to="/contact" className="text-foreground underline underline-offset-4 hover:opacity-60 transition-opacity">
                  get in touch
                </Link>{" "}
                and we can talk it through before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default TeenageCounselling;

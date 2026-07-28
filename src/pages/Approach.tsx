import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Approach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>The Approach | Vanesa Sakota Psychotherapy Sydney</title>
        <meta name="description" content="An integrative mind-body psychotherapy approach drawing on EAET, Clinical Parts Therapy, Imagery Rescripting, Brainspotting, CBT and ACT." />
        <link rel="canonical" href="https://vanesasakota.com.au/approach" />
        <meta property="og:title" content="The Approach | Vanesa Sakota Psychotherapy Sydney" />
        <meta property="og:description" content="An integrative mind-body psychotherapy approach drawing on EAET, Clinical Parts Therapy, Imagery Rescripting, Brainspotting, CBT and ACT." />
        <meta property="og:url" content="https://vanesasakota.com.au/approach" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="space-y-4 md:space-y-5 animate-fade-up max-w-[720px]">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Approach
            </p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
              The Approach
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.7]">
              My approach draws on:
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Approach;

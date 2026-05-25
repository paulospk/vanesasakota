export default function BookingSection() {
  return (
    <section id="book" className="border-t border-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
        <div className="max-w-xl">
          <h2 className="font-serif text-2xl text-foreground mb-6">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If you would like to schedule an appointment or have any questions, please don't hesitate to reach out via phone or email. Vanesa will be happy to assist you.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Phone:</span>{" "}
              <a href="tel:0405933722" className="hover:text-foreground transition-colors">0405 933 722</a>
            </p>
            <p>
              <span className="font-semibold text-foreground">Email:</span>{" "}
              <a href="mailto:contact@vanesasakota.com.au" className="hover:text-foreground transition-colors">contact@vanesasakota.com.au</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

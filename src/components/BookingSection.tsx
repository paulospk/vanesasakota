export default function BookingSection() {
  return (
    <section id="book" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* New Patient Info */}
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-6">New Patient Bookings</h2>
            <p className="text-muted-foreground leading-relaxed max-w-[55ch]">
              If you are a new patient and would like to schedule an appointment with our clinic, we kindly request that you call our front desk during our regular business hours. Our friendly staff will be more than happy to assist you in finding a suitable appointment time.
            </p>
            <a
              href="#"
              className="inline-block mt-6 border border-foreground text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-card transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Booking embed placeholder */}
          <div className="bg-card border border-border p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
            <h3 className="font-serif text-xl text-foreground mb-2">Book Online</h3>
            <p className="text-sm text-muted-foreground mb-6">Select a time that works for you via HotDoc.</p>
            <a
              href="https://www.hotdoc.com.au/medical-centres/darlinghurst-NSW-2010/holdsworth-house-medical-practice-sydney/doctors"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-foreground text-card font-semibold text-center hover:opacity-90 transition-opacity"
            >
              SCHEDULE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

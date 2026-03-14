const specialInterests = [
  "Nutritional assessment",
  "Counselling and lifestyle coaching",
  "Diabetes",
  "Gastro intestinal problems",
  "FODMAPS for irritable bowel syndrome",
  "Heart disease",
  "HIV",
  "Liver disease",
  "Renal disease",
  "Sports nutrition",
  "Weight management",
];

const workingDays = ["Tue", "Wed"];

export default function DetailsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-4 space-y-12">
          <div>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Special Interests</h2>
            <ul className="space-y-2">
              {specialInterests.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Working Days</h2>
            <div className="flex gap-2">
              {workingDays.map((day) => (
                <span key={day} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm">
                  {day}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Personal Website</h2>
            <a href="#" className="text-sm text-primary hover:underline">View Website</a>
          </div>
        </div>

        {/* Right column: Biography */}
        <div className="lg:col-span-8">
          <h2 className="font-serif text-2xl text-foreground border-b border-border pb-3 mb-6">Biography</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              Louise Houtzager, an accredited practicing Dietitian for over 16 years, provides nutritional assessment, counselling and lifestyle coaching for a range of health issues. Louise has a special interest in, diabetes, gastrointestinal problems, heart disease, HIV infection, liver and kidney disease and sports nutrition.
            </p>
            <p>
              Louise's work also involves research, education, community nutrition and international development projects at the The Albion Centre, where she specialises in HIV and Hepatitis C.
            </p>
            <p>
              Louise holds academic appointments and lectures to undergraduate and postgraduate dietetic students from the Universities of Sydney, Wollongong and Canberra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

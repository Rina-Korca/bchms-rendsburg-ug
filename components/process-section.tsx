const steps = [
  {
    number: "01",
    title: "Beratung",
    description:
      "Wir beginnen mit einer kostenlosen Vor-Ort-Beratung, um Ihre Vision zu verstehen, Ihr Grundstuck zu bewerten und Ihr Budget und Ihren Zeitplan zu besprechen.",
  },
  {
    number: "02",
    title: "Planung & Entwurf",
    description:
      "Unser Designteam erstellt einen detaillierten Landschaftsplan mit 3D-Visualisierungen, Pflanzenauswahl und Materialempfehlungen.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description:
      "Unser erfahrenes Team setzt den Entwurf mit Prazision und Sorgfalt um und halt Sie wahrend des gesamten Prozesses auf dem Laufenden.",
  },
];

export function ProcessSection() {
  return (
    <section className="pt-64 pb-32 bg-white relative overflow-hidden lg:pt-72 lg:pb-60">
      {/* Decorative Watering Can - Top Right */}
      <div className="absolute top-40 md:top-48 -right-8 md:right-4 lg:right-12 w-40 md:w-56 lg:w-72 opacity-100 pointer-events-none rotate-[8deg] hidden sm:block">
        <img src="/images/watering-can.png" alt="" className="w-full h-auto" />
      </div>

      {/* Decorative Garden Tools - Bottom Left */}
      <div className="absolute -bottom-4 -left-8 md:left-4 lg:left-12 w-48 md:w-64 lg:w-80 opacity-100 pointer-events-none hidden sm:block">
        <img src="/images/garden-tools.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-green-medium/10 text-green-medium rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Wie wir arbeiten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-dark mb-4 text-balance">
            Unser einfacher 3-Schritte-Prozess
          </h2>
          <p className="text-muted-foreground text-lg">
            Wir haben unseren Prozess optimiert, um Ihr Landschaftsbau-Erlebnis
            so reibungslos und angenehm wie moglich zu gestalten.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] right-0 h-[2px] bg-green-pale z-0" />
              )}

              {/* Number Badge */}
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-green-medium text-white rounded-full text-2xl font-bold mb-6 shadow-lg shadow-green-medium/30">
                {step.number}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-green-dark mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

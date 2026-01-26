const stats = [
  { value: "4.5K+", label: "Abgeschlossene Projekte" },
  { value: "2.5K+", label: "Pflanzensorten" },
  { value: "2.9K+", label: "Zufriedene Kunden" },
  { value: "15+", label: "Jahre Erfahrung" },
]

export function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-medium mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

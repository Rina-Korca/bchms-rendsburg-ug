const images = [
  "/images/WhatsApp Image 2026-01-21 at 12.51.46 1.jpeg",
  "/images/WhatsApp Image 2026-01-21 at 12.51.47.jpeg",
  "/images/WhatsApp Image 2026-01-21 at 12.51.46.jpeg",
  "/images/WhatsApp Image 2026-01-21 at 12.53.20 (1).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 12.53.20 (2).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 12.53.20 (3) (1).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 12.53.20 (5).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 12.53.20 (6).jpeg",
]

export function BlogSection() {
  const duplicatedImages = [...images, ...images]

  return (
    <section id="blog" className="py-16 lg:py-24 bg-green-dark relative overflow-hidden">
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll {
          animation: scroll-right 25s linear infinite;
        }
        .infinite-scroll:hover {
          animation-play-state: paused;
        }
        .scroll-container {
          mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-dark via-green-dark/95 to-green-dark z-0" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-light/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-medium/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-white/10 text-green-light rounded-full px-4 py-2 text-sm font-semibold mb-4 border border-white/20">
            Unsere Arbeiten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Galerie unserer Projekte
          </h2>
          <p className="text-white/70 text-lg">
            Entdecken Sie einige unserer schonsten Garten- und Landschaftsprojekte in Rendsburg und Umgebung.
          </p>
        </div>
      </div>

      {/* Scrolling Gallery */}
      <div className="relative z-10 w-full py-8">
        <div className="scroll-container w-full">
          <div className="infinite-scroll flex gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Projekt ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-dark to-transparent z-20 pointer-events-none" />
    </section>
  )
}

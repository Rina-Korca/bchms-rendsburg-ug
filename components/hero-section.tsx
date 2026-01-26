import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-green-dark overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/WhatsApp Image 2026-01-21 at 12.50.32 (6) 1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-block bg-green-medium/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Professioneller Baumschnitt, dem Sie vertrauen konnen</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Grunere Rasen,<br />
              <span className="text-green-light">Glucklichere Zuhause</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
              Verwandeln Sie Ihren Aussenbereich in eine atemberaubende Oase. Unser Expertenteam 
              bietet professionelle Garten- und Landschaftsbaudienstleistungen, die Ihre Vision 
              zum Leben erwecken und wunderschone Garten schaffen, in die Sie gerne nach Hause kommen.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 font-semibold bg-transparent"
              >
                <a href="#services">Unsere Leistungen</a>
              </Button>
            </div>
          </div>
          
          {/* Right: Image Collage */}
          <div className="relative h-[400px] lg:h-[500px] hidden md:block">
            {/* Large Oval Image */}
            <div className="absolute right-0 top-0 w-64 lg:w-80 h-80 lg:h-96 rounded-[40%] overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/images/WhatsApp Image 2026-01-21 at 12.50.32 (6) (1).jpeg"
                alt="Professioneller Gartner bei der Arbeit beim Heckenschneiden"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Medium Circle Image */}
            <div className="absolute right-48 lg:right-56 top-0 w-32 lg:w-40 h-32 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/images/WhatsApp Image 2026-01-21 at 12.50.32 (7).jpeg"
                alt="Wunderschoner Garten mit bunten Blumen"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Small Circle Image */}
            <div className="absolute right-32 lg:right-40 bottom-8 w-28 lg:w-36 h-28 lg:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/images/WhatsApp Image 2026-01-21 at 12.51.46 (5) 1.jpeg"
                alt="Rasenmahen Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

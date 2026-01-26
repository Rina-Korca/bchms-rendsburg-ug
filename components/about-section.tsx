import { Check } from "lucide-react"

const features = [
  "Zertifizierte professionelle Landschaftsgartner",
  "Umweltfreundliche Praktiken",
  "Individuelle Gartengestaltung",
  "Ganzjahrige Wartungsplane",
  "Zuverlassiger Winterdienst und Schneeraeumung",
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-green-pale/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Main Image */}
            <div className="absolute left-0 top-8 w-64 lg:w-80 h-72 lg:h-80 rounded-3xl overflow-hidden shadow-2xl rotate-[-3deg]">
              <img
                src="/images/WhatsApp Image 2026-01-21 at 12.50.31 (1).jpeg"
                alt="Professioneller Landschaftsgartner bei der Gartenplanung"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Secondary Image */}
            <div className="absolute right-0 lg:right-8 bottom-0 w-56 lg:w-72 h-64 lg:h-72 rounded-3xl overflow-hidden shadow-xl rotate-[3deg]">
              <img
                src="/images/WhatsApp Image 2026-01-21 at 12.50.31 (2) (1).jpeg"
                alt="Wunderschon gestalteter Garten"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute right-4 top-0 bg-white rounded-2xl shadow-lg p-4 rotate-[6deg]">
              <p className="text-3xl font-bold text-green-medium">15+</p>
              <p className="text-sm text-muted-foreground">Jahre<br />Erfahrung</p>
            </div>
          </div>
          
          {/* Right: Text Content */}
          <div>
            <span className="inline-block bg-green-medium/10 text-green-medium rounded-full px-4 py-2 text-sm font-semibold mb-4">
              Uber BCHMS Rendsburg
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-dark mb-6 text-balance">
              Wir schaffen wunderschone Aussenraume seit 2010
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Bei BCHMS Rendsburg sind wir leidenschaftlich dabei, gewohnliche Garten in 
              aussergewohnliche Wohnraume im Freien zu verwandeln. Unser Team aus qualifizierten 
              Fachleuten kombiniert Kreativitat mit gartnerischem Fachwissen, um atemberaubende 
              Landschaften zu schaffen, die die Schonheit und den Wert Ihres Grundstucks steigern.
            </p>
            
            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-medium rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            

          </div>
        </div>
      </div>
    </section>
  )
}

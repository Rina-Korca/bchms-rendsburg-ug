import { Scissors, TreeDeciduous, Flower2, Droplets, Home, Shovel, Snowflake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    description: "Regular mowing, edging, and fertilization to keep your lawn lush and healthy all year round.",
  },
  {
    icon: TreeDeciduous,
    title: "Tree Trimming",
    description: "Professional pruning and trimming services to maintain tree health and enhance your property's appearance.",
  },
  {
    icon: Flower2,
    title: "Garden Design",
    description: "Custom garden planning and installation with beautiful plants, flowers, and hardscape elements.",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Smart irrigation solutions that conserve water while keeping your landscape perfectly watered.",
  },
  {
    icon: Home,
    title: "Landscape Design",
    description: "Complete outdoor makeovers that transform your property into a stunning outdoor living space.",
  },
  {
    icon: Shovel,
    title: "Hardscaping",
    description: "Patios, walkways, retaining walls, and outdoor structures built with quality materials.",
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    description: "Snow plowing, shoveling, and de-icing for driveways, walkways, and parking areas to keep your property safe all winter.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-green-medium/10 text-green-medium rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-dark mb-4 text-balance">
            Complete Landscaping Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine maintenance to complete transformations, we offer a full range of services to meet all your landscaping needs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden bg-white hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-pale rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-medium transition-colors">
                  <service.icon className="w-8 h-8 text-green-medium group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-green-dark mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

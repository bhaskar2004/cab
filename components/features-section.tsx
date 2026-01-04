import { Clock, Car, Shield, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Clock,
    title: "On-Time Pickup",
    description: "Punctual service ensuring you reach your destination on time, every time.",
    color: "primary",
  },
  {
    icon: Car,
    title: "Clean Vehicles",
    description: "Well-maintained and spotlessly clean cars for a comfortable ride.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Experienced Drivers",
    description: "Professional, courteous drivers with extensive local knowledge.",
    color: "secondary",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Best rates guaranteed.",
    color: "primary",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance tracking-tight">Why Choose Us</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto text-pretty leading-relaxed font-light px-4 sm:px-0">
            Experience the difference with our reliable and customer-focused cab service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 group hover:-translate-y-2 bg-card/60 backdrop-blur-sm"
              >
                <CardContent className="pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 px-4 sm:px-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-balance tracking-tight">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed text-pretty font-light">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

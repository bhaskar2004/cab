"use client"

import { Users, Car, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from 'next-intl'

export function ServicesSection() {
  const t = useTranslations('services')

  const services = [
    {
      icon: Car,
      title: t('vehicles.fiveSeater.title'),
      description: t('vehicles.fiveSeater.description'),
      features: [
        t('vehicles.fiveSeater.features.sedan'),
        t('vehicles.fiveSeater.features.ac'),
        t('vehicles.fiveSeater.features.luggage')
      ],
      image: "/fiveSeater.png",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      icon: Users,
      title: t('vehicles.sevenSeater.title'),
      description: t('vehicles.sevenSeater.description'),
      features: [
        t('vehicles.sevenSeater.features.suvMpv'),
        t('vehicles.sevenSeater.features.ac'),
        t('vehicles.sevenSeater.features.luggage')
      ],
      image: "/sevenSeater.png",
      gradient: "from-accent/20 to-secondary/20",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance tracking-tight">{t('heading')}</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto text-pretty leading-relaxed font-light px-4 sm:px-0">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 group bg-card/60 backdrop-blur-sm"
              >
                <div className={`aspect-video relative bg-gradient-to-br ${service.gradient}`}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{service.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 leading-relaxed font-light">{service.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-lg text-xs sm:text-sm font-medium border border-primary/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <Card className="max-w-3xl mx-auto border-2 border-primary/30 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 flex-wrap">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base md:text-lg">{t('localOutstation')}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base md:text-lg">{t('flexibleTiming')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

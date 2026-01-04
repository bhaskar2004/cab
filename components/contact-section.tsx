"use client"

import { Phone, MessageCircle, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

const contacts = [
  {
    name: "Praveen",
    phone: "9019416460",
    icon: Phone,
    role: "primaryContact",
  },
  {
    name: "Yashu",
    phone: "7026639927",
    icon: Phone,
    role: "secondaryContact",
  },
]

export function ContactSection() {
  const t = useTranslations('contact')
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance tracking-tight">{t('heading')}</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto text-pretty leading-relaxed font-light px-4 sm:px-0">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 group bg-card/60 backdrop-blur-sm"
              >
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{contact.name}</h3>
                      <p className="text-sm sm:text-base text-foreground/60 font-light">{t(contact.role)}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a href={`tel:${contact.phone}`} className="block">
                      <Button
                        variant="outline"
                        className="w-full gap-2 sm:gap-3 text-sm sm:text-base h-12 sm:h-14 border-2 border-primary/40 bg-transparent hover:bg-primary/10 font-semibold"
                      >
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                        {t('call')} {contact.phone}
                      </Button>
                    </a>

                    <a
                      href={`https://wa.me/91${contact.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className="w-full gap-2 sm:gap-3 text-sm sm:text-base h-12 sm:h-14 border-2 border-primary/40 bg-transparent hover:bg-primary/10 font-medium"
                      >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                        {t('whatsapp')}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 max-w-3xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight">{t('serviceArea.heading')}</h3>
                  <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                    {t('serviceArea.location')}
                    <br />
                    {t('serviceArea.district')}
                  </p>
                  <p className="text-sm text-foreground/60 mt-4 leading-relaxed font-light">
                    {t('serviceArea.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  return (
    <footer className="bg-background border-t border-border py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <Image
                src="/favicon.png"
                alt="Best Cab Service Logo"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
              <div>
                <h3 className="font-bold text-xl sm:text-2xl tracking-tight">{nav('brandName')}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold tracking-widest uppercase">{nav('location')}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t.rich('tagline', {
                rate: (chunks) => <span className="font-semibold text-primary">{chunks}</span>
              })}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 tracking-tight">{t('quickContact')}</h3>
            <div className="space-y-4 text-sm">
              <a
                href="tel:9019416460"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">Praveen</p>
                  <p className="text-sm text-foreground/60">9019416460</p>
                </div>
              </a>
              <a
                href="tel:7026639927"
                className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">Yashu</p>
                  <p className="text-sm text-foreground/60">7026639927</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 tracking-tight">{t('serviceArea')}</h3>
            <div className="flex items-start gap-3 text-sm text-foreground/70">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base text-foreground">{nav('location')}</p>
                <p className="text-foreground/60 font-light">{t('pincode')}</p>
                <p className="text-foreground/60 font-light">{t('district')}</p>
                <p className="text-foreground/60 font-light">{t('state')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-muted-foreground">
            <p>{t('copyright', { year: new Date().getFullYear() })}</p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-primary">₹12/km</span>
              <span>•</span>
              <span>{t('available')}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

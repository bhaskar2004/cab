"use client"
import { Button } from "@/components/ui/button"
import { useTranslations, useLocale } from 'next-intl'

interface HeroSectionProps {
  onBookNowClick?: () => void
}

export function HeroSection({ onBookNowClick }: HeroSectionProps) {
  const t = useTranslations('hero')
  const locale = useLocale()

  const isKannada = locale === 'kn'

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 sm:pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className={`${isKannada ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl !leading-tight py-2' : 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9]'} font-bold tracking-tight`}>
              {isKannada ? (
                <>
                  {t('heading.line1')} <span className="text-primary">{t('heading.line2')}</span> {t('heading.line3')}
                </>
              ) : (
                <>
                  {t('heading.line1')} <br />
                  <span className="text-primary">{t('heading.line2')}</span> <br />
                  {t('heading.line3')}
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              {t('subtitle')}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <Button
              size="lg"
              onClick={onBookNowClick}
              className="w-full sm:w-auto bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-primary-foreground rounded-xl h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all"
            >
              {t('bookYourRide')}
            </Button>
            <a href="tel:9019416460" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary/40 bg-transparent hover:bg-primary/10 rounded-xl h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all"
              >
                {t('callSupport')}
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-8 sm:pt-10 md:pt-12 max-w-3xl mx-auto">
            {[
              { label: t('stats.rate.label'), value: t('stats.rate.value') },
              { label: t('stats.availability.label'), value: t('stats.availability.value') },
              { label: t('stats.status.label'), value: t('stats.status.value') },
            ].map((stat) => (
              <div key={stat.label} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-primary/40 transition-all hover:shadow-lg">
                <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mb-1 sm:mb-2">{stat.label}</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from "@/components/language-switcher"

interface NavigationProps {
  onBookNowClick?: () => void
}

export function Navigation({ onBookNowClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('nav')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "services", label: t('fleet') },
    { id: "features", label: t('features') },
    { id: "booking", label: t('bookNow') },
    { id: "contact", label: t('contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Image
              src="/favicon.png"
              alt="Best Cab Service Logo"
              width={64}
              height={64}
              priority
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-lg tracking-tight uppercase">{t('brandName')}</span>
              <span className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase">
                {t('location')}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-bold uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <a href="tel:9019416460" className="hidden sm:block">
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 bg-transparent"
              >
                <Phone className="w-4 h-4 text-blue-400" />
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Modern Slide-in Design */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="p-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3.5 text-base font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-primary"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-border mt-4">
              <a href="tel:9019416460" className="block">
                <Button className="w-full gap-3 bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-primary-foreground font-bold h-12 rounded-xl shadow-lg">
                  <Phone className="w-5 h-5" />
                  Call 9019416460
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

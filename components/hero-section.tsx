"use client"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onBookNowClick?: () => void
}

export function HeroSection({ onBookNowClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 sm:pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
              The Best <br />
              <span className="text-primary">Reliable</span> <br />
              Cab Service
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Gauribidanur's most trusted executive transport. Available 24/7 for local and outstation travel.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <Button
              size="lg"
              onClick={onBookNowClick}
              className="w-full sm:w-auto bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-primary-foreground rounded-xl h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all"
            >
              Book Your Ride
            </Button>
            <a href="tel:9019416460" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary/40 bg-transparent hover:bg-primary/10 rounded-xl h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all"
              >
                Call Support
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-8 sm:pt-10 md:pt-12 max-w-3xl mx-auto">
            {[
              { label: "Rate", value: "₹12/km" },
              { label: "Availability", value: "24/7" },
              { label: "Status", value: "Verified" },
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

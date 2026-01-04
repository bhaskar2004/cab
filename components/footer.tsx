import { Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
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
                <h3 className="font-bold text-xl sm:text-2xl tracking-tight">Best Cab Service</h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold tracking-widest uppercase">Gauribidanur</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Your trusted partner for reliable and affordable cab services. Available 24/7 at just <span className="font-semibold text-primary">₹12/km</span>.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 tracking-tight">Quick Contact</h3>
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
            <h3 className="font-bold text-xl mb-6 tracking-tight">Service Area</h3>
            <div className="flex items-start gap-3 text-sm text-foreground/70">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base text-foreground">Gauribidanur</p>
                <p className="text-foreground/60 font-light">Pincode: 561208</p>
                <p className="text-foreground/60 font-light">Chikkaballapur District</p>
                <p className="text-foreground/60 font-light">Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Best Cab Service - Gauribidanur. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-primary">₹12/km</span>
              <span>•</span>
              <span>24/7 Available</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

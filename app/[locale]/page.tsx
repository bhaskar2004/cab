"use client"

import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BookingSection } from "@/components/booking-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const bookingRef = useRef<HTMLDivElement>(null)

  const handleBookNowClick = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      <Navigation onBookNowClick={handleBookNowClick} />
      <main>
        <HeroSection onBookNowClick={handleBookNowClick} />
        <div ref={bookingRef}>
          <BookingSection />
        </div>
        <ServicesSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

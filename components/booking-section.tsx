"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, MessageCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from 'next-intl'

export function BookingSection() {
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [vehicleType, setVehicleType] = useState("5-seater")
  const [name, setName] = useState("")
  const [phone, setPhoneNumber] = useState("")

  const t = useTranslations('booking')

  const handleWhatsAppBooking = () => {
    const message = `${t('whatsappMessage.greeting')}%0A%0A${t('whatsappMessage.name')}: ${name}%0A${t('whatsappMessage.phone')}: ${phone}%0A${t('whatsappMessage.pickup')}: ${pickup}%0A${t('whatsappMessage.destination')}: ${destination}%0A${t('whatsappMessage.vehicle')}: ${vehicleType}%0A${t('whatsappMessage.rate')}: ₹12 per km%0A%0A${t('whatsappMessage.confirmation')}`
    window.open(`https://wa.me/919019416460?text=${message}`, "_blank")
  }

  const handleCallBooking = () => {
    window.location.href = "tel:9019416460"
  }

  return (
    <section id="booking" className="py-12 sm:py-16 md:py-24 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter uppercase">
              {t('heading.line1')} <br />
              <span className="text-primary">{t('heading.line2')}</span> <br />
              {t('heading.line3')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
              {t('description')}
            </p>
            <div className="p-4 sm:p-6 md:p-8 border-2 border-primary bg-background">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{t('currentRate')}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold tracking-tighter">₹12</span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">{t('perKm')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-background border border-border p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-6 sm:gap-y-8">
                {[
                  { id: "name", label: t('form.fullName'), placeholder: t('form.fullNamePlaceholder'), value: name, setter: setName },
                  {
                    id: "phone",
                    label: t('form.phoneNumber'),
                    placeholder: t('form.phoneNumberPlaceholder'),
                    value: phone,
                    setter: setPhoneNumber,
                  },
                  {
                    id: "pickup",
                    label: t('form.pickupLocation'),
                    placeholder: t('form.pickupLocationPlaceholder'),
                    value: pickup,
                    setter: setPickup,
                  },
                  {
                    id: "destination",
                    label: t('form.destination'),
                    placeholder: t('form.destinationPlaceholder'),
                    value: destination,
                    setter: setDestination,
                  },
                ].map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label
                      htmlFor={field.id}
                      className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
                    >
                      {field.label}
                    </Label>
                    <Input
                      id={field.id}
                      type="text"
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      className="rounded-none border-x-0 border-t-0 border-b-2 border-border focus-visible:ring-0 focus-visible:border-primary h-10 sm:h-12 text-base sm:text-lg font-medium px-0"
                    />
                  </div>
                ))}
                <div className="space-y-2">
                  <Label
                    htmlFor="vehicle"
                    className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    {t('form.vehicleType')}
                  </Label>
                  <Select value={vehicleType} onValueChange={setVehicleType}>
                    <SelectTrigger
                      id="vehicle"
                      className="rounded-none border-x-0 border-t-0 border-b-2 border-border focus-visible:ring-0 focus-visible:border-primary h-10 sm:h-12 text-base sm:text-lg font-medium px-0"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-seater">{t('form.fiveSeater')}</SelectItem>
                      <SelectItem value="7-seater">{t('form.sevenSeater')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-10 p-4 sm:p-6 md:p-8 bg-background rounded-xl border-2 border-primary">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 font-light tracking-wide">{t('standardRate')}</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">₹12 {t('perKm')}</p>
                    <p className="text-xs text-muted-foreground mt-2 font-light">{t('transparentPricing')}</p>
                  </div>
                  <div className="flex flex-col gap-3 w-full sm:w-auto">
                    <Button
                      size="lg"
                      onClick={handleWhatsAppBooking}
                      disabled={!name || !phone || !pickup || !destination}
                      className="w-full gap-2 sm:gap-3 bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white font-bold h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      {t('bookViaWhatsApp')}
                    </Button>
                    <Button
                      size="lg"
                      onClick={handleCallBooking}
                      className="w-full gap-2 sm:gap-3 bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-primary-foreground font-bold h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      {t('callToBookNow')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

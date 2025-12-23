"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BookingModal } from "./booking-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/display97/video/upload/vc_auto/mxicctundqla33wwi8wi.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            Premier Martial Arts Training in West Hartford
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-6 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Expert instruction in MMA, Brazilian Jiu-Jitsu, Muay Thai, boxing, and wrestling. Train with the best in Connecticut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Request More Info
            </Button>
          </div>
        </div>
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Info" />
    </section>
  )
}

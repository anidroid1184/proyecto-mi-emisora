"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    // Lógica para ir al siguiente paso
    console.log("Siguiente paso")
  }

  const handleSkip = () => {
    // Lógica para saltar el onboarding
    console.log("Saltar onboarding")
  }

  return (
    <div className="min-h-screen bg-red-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-red-600 border-none shadow-none">
        <CardContent className="p-6 text-center text-white">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <h1 className="text-2xl font-bold">Mi emisoras</h1>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-8">
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/images/onboarding-hero.png"
                alt="Dos personas jóvenes sonriendo"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <div className="text-4xl font-bold mb-4 leading-tight">
              DESCUBRE
              <br />
              ESCUCHA
              <br />
              CONECTA
            </div>

            <div className="bg-black bg-opacity-20 p-4 rounded-lg mb-6">
              <p className="text-lg font-semibold mb-2">"Los programas más importantes, trends y podcast"</p>
              <p className="text-sm opacity-90">
                Esta es una descripción de la primera pantalla del onboarding sobre el sencillo proceso de compra
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-red-600"
              onClick={handleNext}
            >
              Prev
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
              <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
            </div>

            <Button variant="ghost" className="text-white hover:bg-white hover:text-red-600" onClick={handleSkip}>
              Saltar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

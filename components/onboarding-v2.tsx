"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface OnboardingSlide {
  id: number
  title: string[]
  subtitle: string
  description: string
  bgColor: string
  image: string
}

interface OnboardingV2Props {
  onComplete?: () => void
}

export default function OnboardingV2({ onComplete }: OnboardingV2Props) {
  const slides: OnboardingSlide[] = [
    {
      id: 1,
      title: ["DESCUBRE", "ESCUCHA", "CONECTA"],
      subtitle: "Los programas más importantes, trends y podcast",
      description: "Explora una amplia variedad de contenido de audio personalizado para ti",
      bgColor: "bg-red-600", // Rojo consistente
      image: "/images/onboarding/slide-1.png"
    },
    {
      id: 2,
      title: ["MÚSICA", "EN VIVO", "24/7"],
      subtitle: "Las mejores emisoras y artistas",
      description: "Disfruta de música en vivo, conciertos exclusivos y los hits del momento",
      bgColor: "bg-red-600", // Mismo rojo
      image: "/images/onboarding/slide-2.png"
    },
    {
      id: 3,
      title: ["NOTICIAS", "DEPORTES", "ACTUALIDAD"],
      subtitle: "Mantente informado siempre",
      description: "Accede a las últimas noticias, resultados deportivos y análisis en tiempo real",
      bgColor: "bg-red-600", // Mismo rojo
      image: "/images/onboarding/slide-3.png"
    },
    {
      id: 4,
      title: ["PODCASTS", "EXCLUSIVOS", "PREMIUM"],
      subtitle: "Contenido original y único",
      description: "Escucha podcasts exclusivos de tus creadores favoritos y descubre nuevos talentos",
      bgColor: "bg-red-600", // Mismo rojo
      image: "/images/onboarding/slide-4.png"
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleSkip = () => {
    console.log("Saltar onboarding")
    if (onComplete) {
      onComplete()
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className={`min-h-screen ${currentSlideData.bgColor} flex flex-col transition-all duration-500`}>
      {/* Header con logo */}
      <div className="flex items-center justify-center pt-8 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-current rounded-full"></div>
          </div>
          <h1 className="text-2xl font-bold text-white">Mi emisoras</h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Tarjeta de contenido */}
        <div className="w-full max-w-sm mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white border-opacity-20">
            {/* Imagen placeholder */}
            <div className="w-full h-48 bg-white bg-opacity-20 rounded-xl mb-6 overflow-hidden relative">
              <Image
                src={currentSlideData.image || "/placeholder.svg"}
                alt={`Slide ${currentSlide + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={currentSlide === 0}
              />
          </div>

            {/* Texto principal */}
            <div className="text-center text-white">
              <div className="text-2xl font-bold mb-4 leading-tight">
                {currentSlideData.title.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>

              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <p className="text-lg font-semibold mb-2">"{currentSlideData.subtitle}"</p>
                <p className="text-sm opacity-90 leading-relaxed">{currentSlideData.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controles de navegación lateral */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            className="bg-white bg-opacity-20 border-white border-opacity-30 text-white hover:bg-white hover:text-current rounded-full"
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="text-white font-medium">
            {currentSlide + 1} / {slides.length}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="bg-white bg-opacity-20 border-white border-opacity-30 text-white hover:bg-white hover:text-current rounded-full"
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Footer con navegación */}
      <div className="pb-8 px-6">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-current px-6"
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            Prev
          </Button>

          {/* Dots indicator - clickeable */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <Button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-110" : "bg-white bg-opacity-40 hover:bg-opacity-60"
                }`}
              >
              </Button>
            ))}
          </div>

          {currentSlide === slides.length - 1 ? (
            <Button className="bg-white text-current hover:bg-opacity-90 px-6 font-medium" onClick={onComplete}>
              Comenzar
            </Button>
          ) : (
            <Button variant="ghost" className="text-white hover:bg-white hover:text-current px-6" onClick={handleSkip}>
              Saltar
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

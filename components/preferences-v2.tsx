"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Music, Theater, Gamepad2, Radio } from "lucide-react"

interface Preference {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  selected: boolean
}

interface PreferencesV2Props {
  onComplete?: () => void
}

export default function PreferencesV2({ onComplete }: PreferencesV2Props) {
  const [preferences, setPreferences] = useState<Preference[]>([
    {
      id: "deportes",
      name: "Deportes",
      description: "Partidos de fútbol, volley, tenis, etc...",
      icon: <Heart className="w-5 h-5" />,
      selected: true,
    },
    {
      id: "musica1",
      name: "Música",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Music className="w-5 h-5" />,
      selected: false,
    },
    {
      id: "teatro",
      name: "Teatro",
      description: "Obras contemporáneas, nacionales...",
      icon: <Theater className="w-5 h-5" />,
      selected: false,
    },
    {
      id: "entretenimiento",
      name: "Entretenimiento",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Gamepad2 className="w-5 h-5" />,
      selected: false,
    },
    {
      id: "musica2",
      name: "Música",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Music className="w-5 h-5" />,
      selected: false,
    },
    {
      id: "musica3",
      name: "Música",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Music className="w-5 h-5" />,
      selected: false,
    },
    {
      id: "musica4",
      name: "Música",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Radio className="w-5 h-5" />,
      selected: false,
    },
  ])

  const togglePreference = (id: string) => {
    setPreferences((prev) => prev.map((pref) => (pref.id === id ? { ...pref, selected: !pref.selected } : pref)))
  }

  const handleFinalize = () => {
    const selectedPrefs = preferences.filter((p) => p.selected)
    console.log("Preferencias seleccionadas:", selectedPrefs)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header con fondo rojo */}
      <div className="bg-red-600 h-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-700"></div>
        <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-red-200"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-red-300"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="px-6 -mt-16 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Mi emisoras</h1>
          </div>
        </div>

        {/* Título y descripción */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Personaliza tus preferencias</h2>
          <p className="text-sm text-gray-600 px-4">
            Elige tus categorías favoritas y disfruta de contenido personalizado
          </p>
        </div>

        {/* Lista de preferencias */}
        <div className="space-y-3 mb-8">
          {preferences.map((pref) => (
            <div
              key={pref.id}
              onClick={() => togglePreference(pref.id)}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg cursor-pointer transition-all hover:bg-gray-100"
            >
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <div className="text-gray-600">{pref.icon}</div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">{pref.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{pref.description}</p>
              </div>

              <div className="flex items-center">
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    pref.selected ? "text-red-500 fill-red-500" : "text-gray-300"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Botón finalizar */}
        <div className="pb-8">
          <Button
            onClick={() => {
              handleFinalize()
              onComplete?.()
            }}
            className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg"
          >
            Finalizar
          </Button>
        </div>
      </div>
    </div>
  )
}

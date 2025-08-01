"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Heart, Music, Theater, Gamepad2, Radio } from "lucide-react"

interface Preference {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  selected: boolean
}

export default function Preferences() {
  const [preferences, setPreferences] = useState<Preference[]>([
    {
      id: "deportes",
      name: "Deportes",
      description: "Partidos de fútbol, volley, tenis, etc...",
      icon: <Heart className="w-6 h-6" />,
      selected: false,
    },
    {
      id: "musica1",
      name: "Música",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Music className="w-6 h-6" />,
      selected: false,
    },
    {
      id: "teatro",
      name: "Teatro",
      description: "Obras contemporáneas, nacionales...",
      icon: <Theater className="w-6 h-6" />,
      selected: false,
    },
    {
      id: "entretenimiento",
      name: "Entretenimiento",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Gamepad2 className="w-6 h-6" />,
      selected: false,
    },
    {
      id: "musica2",
      name: "Música",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Music className="w-6 h-6" />,
      selected: false,
    },
    {
      id: "musica3",
      name: "Música",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Music className="w-6 h-6" />,
      selected: false,
    },
    {
      id: "musica4",
      name: "Música",
      description: "Artistas, bandas y los mejores conciertos",
      icon: <Radio className="w-6 h-6" />,
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-white">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Mi emisoras</h1>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">Personaliza tus preferencias</h2>
          <p className="text-sm text-gray-600">Elige tus categorías favoritas y disfruta de contenido personalizado</p>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="max-h-80 overflow-y-auto space-y-3">
            {preferences.map((pref) => (
              <div
                key={pref.id}
                onClick={() => togglePreference(pref.id)}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  pref.selected ? "border-red-600 bg-red-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${pref.selected ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  {pref.icon}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{pref.name}</h3>
                  <p className="text-xs text-gray-500">{pref.description}</p>
                </div>

                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    pref.selected ? "border-red-600 bg-red-600" : "border-gray-300"
                  }`}
                >
                  {pref.selected && <Heart className="w-3 h-3 text-white fill-current" />}
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={handleFinalize}
            className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium mt-6"
          >
            Finalizar
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

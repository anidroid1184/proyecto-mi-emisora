"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail, Lock, Facebook } from "lucide-react"

interface LoginProps {
  onSwitchToRegister?: () => void
  onLoginSuccess?: () => void
}

export default function Login({ onSwitchToRegister, onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    // Simular llamada a API
    setTimeout(() => {
      console.log("Iniciando sesión:", { email, password })
      setIsLoading(false)
      onLoginSuccess?.()
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-white">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center gap-4 mb-6">
            <button className="text-red-600 font-medium border-b-2 border-red-600 pb-1">Login</button>
            <button onClick={onSwitchToRegister} className="text-gray-500 font-medium">
              Register
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Hola</h1>
            <p className="text-xl font-semibold text-gray-900">inicia sesión</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 border-gray-200"
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 h-12 border-gray-200"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              onClick={handleLogin}
              className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Iniciando..." : "Iniciar sesión"}
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 bg-gray-900 text-white hover:bg-gray-800 border-gray-900"
              disabled={isLoading}
            >
              <Facebook className="mr-2 h-5 w-5" />
              Inicia con facebook
            </Button>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              ¿Olvidaste tu contraseña? <button className="text-red-600 font-medium">Click aquí</button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

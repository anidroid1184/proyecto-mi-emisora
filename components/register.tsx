"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail, Lock, User, Facebook } from "lucide-react"

interface RegisterProps {
  onSwitchToLogin?: () => void
  onRegisterSuccess?: () => void
}

export default function Register({ onSwitchToLogin, onRegisterSuccess }: RegisterProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRegister = async () => {
    setIsLoading(true)
    // Simular llamada a API
    setTimeout(() => {
      console.log("Registrando usuario:", formData)
      setIsLoading(false)
      onRegisterSuccess?.()
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-white">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={onSwitchToLogin} className="text-gray-500 font-medium">
              Login
            </button>
            <button className="text-red-600 font-medium border-b-2 border-red-600 pb-1">Register</button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Bienvenido</h1>
            <p className="text-xl font-semibold text-gray-900">crea tu cuenta</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="pl-10 h-12 border-gray-200"
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10 h-12 border-gray-200"
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pl-10 h-12 border-gray-200"
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className="pl-10 h-12 border-gray-200"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              onClick={handleRegister}
              className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Creando cuenta..." : "Crear cuenta"}
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 bg-gray-900 text-white hover:bg-gray-800 border-gray-900"
              disabled={isLoading}
            >
              <Facebook className="mr-2 h-5 w-5" />
              Regístrate con Facebook
            </Button>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              Al registrarte aceptas nuestros{" "}
              <button className="text-red-600 font-medium">Términos y Condiciones</button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

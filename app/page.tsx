"use client"

import { useState } from "react"
import Login from "@/components/login"
import Register from "@/components/register"
import OnboardingV2 from "@/components/onboarding-v2"
import PreferencesV2 from "@/components/preferences-v2"

type FlowStep = "login" | "register" | "onboarding" | "preferences" | "complete"

export default function App() {
  const [currentStep, setCurrentStep] = useState<FlowStep>("login")

  const handleLoginSuccess = () => {
    // Si ya tiene cuenta, puede ir directo a la app o a onboarding
    setCurrentStep("onboarding")
  }

  const handleRegisterSuccess = () => {
    // Después del registro, va al onboarding
    setCurrentStep("onboarding")
  }

  const handleOnboardingComplete = () => {
    // Después del onboarding, va a preferencias
    setCurrentStep("preferences")
  }

  const handlePreferencesComplete = () => {
    // Después de preferencias, el flujo está completo
    setCurrentStep("complete")
  }

  const AuthView = () => {
    const [authMode, setAuthMode] = useState<"login" | "register">("login")

    return authMode === "login" ? (
      <Login onSwitchToRegister={() => setAuthMode("register")} onLoginSuccess={handleLoginSuccess} />
    ) : (
      <Register onSwitchToLogin={() => setAuthMode("login")} onRegisterSuccess={handleRegisterSuccess} />
    )
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "login":
      case "register":
        return <AuthView />
      case "onboarding":
        return <OnboardingV2 onComplete={handleOnboardingComplete} />
      case "preferences":
        return <PreferencesV2 onComplete={handlePreferencesComplete} />
      case "complete":
        return (
          <div className="min-h-screen bg-red-600 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl font-bold mb-4">¡Bienvenido a Mi emisoras!</h1>
              <p className="text-lg">Tu cuenta está lista. Disfruta del contenido personalizado.</p>
            </div>
          </div>
        )
      default:
        return <AuthView />
    }
  }

  return <div className="min-h-screen">{renderCurrentStep()}</div>
}

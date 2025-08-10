"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

export default function ContributionForm() {
  const [name, setName] = useState("")
  const [dollarAmount, setDollarAmount] = useState("")
  const [milkAmount, setMilkAmount] = useState("")
  const [placentaAmount, setPlacentaAmount] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Validate that at least name and one contribution amount is provided
      if (!name.trim()) {
        throw new Error("Please provide your name")
      }

      const hasDollar = dollarAmount.trim() && !isNaN(Number(dollarAmount)) && Number(dollarAmount) > 0
      const hasMilk = milkAmount.trim() && !isNaN(Number(milkAmount)) && Number(milkAmount) > 0
      const hasPlacenta = placentaAmount.trim() && !isNaN(Number(placentaAmount)) && Number(placentaAmount) > 0

      if (!hasDollar && !hasMilk && !hasPlacenta) {
        throw new Error("Please provide at least one contribution amount")
      }

      // Create form data for Google Forms
      const formData = new FormData()
      formData.append("entry.1469922165", name.trim()) // Name field
      formData.append("entry.775785757", dollarAmount.trim()) // Dollar amount
      formData.append("entry.1109827161", milkAmount.trim()) // Milk amount
      formData.append("entry.1062346238", placentaAmount.trim()) // Placenta amount
      formData.append("entry.267504271", message.trim()) // Comments
      formData.append("fvv", "1")
      formData.append("fbzx", "523069005227539761")
      formData.append("pageHistory", "0")

      // Submit to Google Form
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdZMJz-6WnURsC3QBg0AVnB2BvOd4_L8Y-PkpYsHeIJhE8SHw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Required for Google Forms
        },
      )

      // Google Forms will always "fail" due to CORS, but the submission actually works
      setSubmitted(true)
      setName("")
      setDollarAmount("")
      setMilkAmount("")
      setPlacentaAmount("")
      setMessage("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-green-500"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Your contribution has been recorded. We'll be in touch via Venmo soon.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="border-gray-700 hover:bg-gray-800 text-white"
        >
          Make Another Contribution
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-6"
      >
        {error && (
          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">{error}</div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-300">
            Your Name *
          </Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-gray-500 h-12"
          />
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium text-gray-300">Contribution Amount * (at least one required)</Label>

          <div className="space-y-2">
            <Label htmlFor="dollar-amount" className="text-xs text-gray-400">
              Dollar Amount ($)
            </Label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">$</span>
              <Input
                id="dollar-amount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="0.00"
                value={dollarAmount}
                onChange={(e) => setDollarAmount(e.target.value)}
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-gray-500 h-12 pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="milk-amount" className="text-xs text-gray-400">
              Human Milk (mL)
            </Label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">mL</span>
              <Input
                id="milk-amount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="0.00"
                value={milkAmount}
                onChange={(e) => setMilkAmount(e.target.value)}
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-gray-500 h-12 pr-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="placenta-amount" className="text-xs text-gray-400">
              Human Placenta (g)
            </Label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">g</span>
              <Input
                id="placenta-amount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="0.00"
                value={placentaAmount}
                onChange={(e) => setPlacentaAmount(e.target.value)}
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-gray-500 h-12 pr-12"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-gray-300">
            Optional Message
          </Label>
          <Textarea
            id="message"
            placeholder="Add a personal note (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-gray-500 min-h-[100px] resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 text-base font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Submit Contribution"
          )}
        </Button>
      </form>
    </div>
  )
}

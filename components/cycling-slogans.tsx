"use client"

import { useState, useEffect } from "react"

const slogans = [
  "Fried Placenta Musubi",
  "Human Milk Haloumi",
  "Vacheezling (by Denzaroo)",
  "Vulva Prints",
  "Cervix Selfies",
  "Butthole Glitter (by Denzaroo)",
  "Tall Tall Tall Vagina",
  "The Mighty Vulvtron Robot",
]

export default function CyclingSlogans() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mb-8 h-16 flex items-center justify-center">
      <style jsx>{`
        @keyframes fadeInOut {
          0% { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          20% { 
            opacity: 1; 
            transform: translateY(0px); 
          }
          80% { 
            opacity: 1; 
            transform: translateY(0px); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
        }
        .slogan-text {
          animation: fadeInOut 3s ease-in-out infinite;
        }
      `}</style>
      <h3 key={currentIndex} className="slogan-text text-3xl md:text-4xl font-bold text-center text-white">
        {slogans[currentIndex]}
      </h3>
    </div>
  )
}

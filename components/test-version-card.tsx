"use client"

import { useState } from "react"

interface TestVersionCardProps {
  title: string
  questions: number
  features: string[]
  disabledFeatures: string[]
  testCount: string
  progress: number
  version: string
  timeEstimate: string
  color: "purple" | "cyan" | "red"
  recommended?: boolean
}

export function TestVersionCard({
  title,
  questions,
  features,
  disabledFeatures,
  testCount,
  progress,
  version,
  timeEstimate,
  color,
  recommended = false,
}: TestVersionCardProps) {
  const [isSelected, setIsSelected] = useState(false)

  const colorClasses = {
    purple: {
      icon: "text-purple-600",
      border: "border-purple-600",
      button: "border-purple-600 text-purple-600 hover:bg-purple-600",
      progress: "bg-purple-600",
    },
    cyan: {
      icon: "text-cyan-400",
      border: "border-cyan-400",
      button: "border-cyan-400 text-cyan-400 hover:bg-cyan-400",
      progress: "bg-cyan-400",
    },
    red: {
      icon: "text-red-500",
      border: "border-red-500",
      button: "bg-purple-600 text-white hover:bg-purple-700",
      progress: "bg-red-500",
    },
  }

  const handleSelect = () => {
    setIsSelected(true)
    // 存储选择的版本到localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTestVersion", version)
      localStorage.setItem("testTimeEstimate", timeEstimate)
    }
  }

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl ${
        recommended ? "transform md:-translate-y-4 border-2 border-purple-600 relative" : ""
      } ${isSelected ? `ring-2 ring-offset-2 ${colorClasses[color].border.replace("border-", "ring-")}` : ""}`}
    >
      {recommended && (
        <div className="absolute -top-4 right-8 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          推荐
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-500">{questions}道题目</p>
        </div>
        <div className={`text-3xl ${colorClasses[color].icon}`}>⭐</div>
      </div>

      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✅</span>
            <span>{feature}</span>
          </div>
        ))}
        {disabledFeatures.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-400">
            <span className="mr-3">❌</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">近30天测试人数</span>
          <span className="font-bold">{testCount}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className={`h-2 rounded-full ${colorClasses[color].progress}`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <button
        onClick={handleSelect}
        className={`w-full py-3 mt-6 rounded-full border-2 font-medium transition-colors ${colorClasses[color].button} hover:text-white`}
      >
        选择此版本
      </button>
    </div>
  )
}

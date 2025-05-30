"use client"

interface Question {
  id: number
  text: string
  options: [string, string]
  dimension: string
}

interface TestQuestionProps {
  question: Question
  onAnswer: (answer: number) => void
  selectedAnswer?: number
}

export function TestQuestion({ question, onAnswer, selectedAnswer }: TestQuestionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">{question.text}</h2>

      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index + 1)}
            className={`p-6 text-left rounded-xl border-2 transition-all ${
              selectedAnswer === index + 1
                ? "border-primary bg-primary/5 text-primary"
                : "border-gray-200 hover:border-primary/30 hover:bg-primary/5"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 mr-3 ${
                  selectedAnswer === index + 1 ? "border-primary bg-primary" : "border-gray-300"
                }`}
              >
                {selectedAnswer === index + 1 && <div className="w-2.5 h-2.5 bg-white rounded-full mx-auto mt-0.5"></div>}
              </div>
              <span className="text-gray-700 font-medium">{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

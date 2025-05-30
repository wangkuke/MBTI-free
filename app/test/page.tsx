"use client"

import React, { useState, useEffect, Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { TestQuestion } from "@/components/test-question"
import { ProgressBar } from "@/components/progress-bar"
import { questions } from "@/data/questions"
import { useSearchParams } from 'next/navigation';
import Link from "next/link"
import { mbtiTypes } from '@/data/mbti-types'

interface Question {
  id: number
  text: string
  options: [string, string]
  dimension: string
  weight?: number
  isReversed?: boolean
}

interface Scores {
  E: number
  I: number
  S: number
  N: number
  T: number
  F: number
  J: number
  P: number
}

interface TestContentProps {
  currentQuestion: number
  setCurrentQuestion: (value: number) => void
  answers: Record<number, number>
  setAnswers: (value: Record<number, number>) => void
  testVersion: string | null
  setTestVersion: (value: string | null) => void
  showVersionSelection: boolean
  setShowVersionSelection: (value: boolean) => void
  showMessage: boolean
  setShowMessage: (value: boolean) => void
  currentQuestions: Question[] | null
  setCurrentQuestions: (value: Question[] | null) => void
}

interface TestResult {
  EI: string;
  SN: string;
  TF: string;
  JP: string;
  percentages: Record<string, number>;
}

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [testVersion, setTestVersion] = useState<string | null>(null)
  const [showVersionSelection, setShowVersionSelection] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<Question[] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <TestContent 
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          answers={answers}
          setAnswers={setAnswers}
          testVersion={testVersion}
          setTestVersion={setTestVersion}
          showVersionSelection={showVersionSelection}
          setShowVersionSelection={setShowVersionSelection}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
          currentQuestions={currentQuestions}
          setCurrentQuestions={setCurrentQuestions}
        />
      </Suspense>
    </div>
  )
}

function TestContent({
  currentQuestion,
  setCurrentQuestion,
  answers,
  setAnswers,
  testVersion,
  setTestVersion,
  showVersionSelection,
  setShowVersionSelection,
  showMessage,
  setShowMessage,
  currentQuestions,
  setCurrentQuestions,
}: TestContentProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    // 获取用户选择的测试版本，优先从 URL 参数读取
    const version = searchParams.get('version') || localStorage.getItem("selectedTestVersion");
    console.log("useEffect: 读取的版本是:", version);

    if (version) {
      setTestVersion(version);
      setShowVersionSelection(false);
      setShowMessage(false);
    } else {
      setTestVersion(null);
      setCurrentQuestions(null);
      setShowVersionSelection(true);
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, setTestVersion, setShowVersionSelection, setShowMessage, setCurrentQuestions]);

  useEffect(() => {
    console.log("useEffect: testVersion 改变为:", testVersion);
    if (testVersion) {
      const questionsForVersion = getQuestionsForVersion(testVersion);
      setCurrentQuestions(questionsForVersion);
      setCurrentQuestion(0);
      console.log("useEffect: 加载题库，长度为:", questionsForVersion.length);
    } else {
      setCurrentQuestions(null);
      setCurrentQuestion(0);
    }
  }, [testVersion]);

  const getQuestionsForVersion = (version: string | null) => {
    if (version === null) {
      return [];
    }
    switch (version) {
      case "standard":
        return questions.standard.map(q => ({
          ...q,
          options: q.options as [string, string]
        }))
      case "professional":
        return questions.professional.map(q => ({
          ...q,
          options: q.options as [string, string]
        }))
      case "complete":
        return questions.complete.map(q => ({
          ...q,
          options: q.options as [string, string]
        }))
      default:
        return questions.standard.map(q => ({
          ...q,
          options: q.options as [string, string]
        }))
    }
  }

  const progress = (currentQuestions && currentQuestions.length > 0) ? ((currentQuestion + 1) / currentQuestions.length) * 100 : 0;

  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestions || currentQuestions.length === 0) return;

    const question = currentQuestions[currentQuestion];
    // Simple scoring: option 0 gets 1 point, option 1 gets 0 points
    // Adjusting for reversed questions
    const score = question.isReversed ? (answerIndex === 0 ? 0 : 1) : (answerIndex === 0 ? 1 : 0);

    setAnswers(((prev: Record<number, number>) => {
      const newAnswers: Record<number, number> = { ...prev };
      newAnswers[currentQuestion] = score; // 存储转换后的分数 (0 or 1)
      return newAnswers;
    }) as any);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(((prev: number) => prev + 1) as any);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (!currentQuestions || currentQuestions.length === 0) return;

    if (currentQuestion > 0) {
      setCurrentQuestion(((prev: number) => prev - 1) as any)
    }
  }

  const calculateResult = () => {
    if (!currentQuestions || currentQuestions.length === 0) return;

    const dimensionScores: Record<string, number> = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0,
    };

    // 存储每个维度问题的数量
    const dimensionCounts: Record<string, number> = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0,
    };

    Object.entries(answers).forEach(([questionIndex, answerValue]) => {
      const question = currentQuestions[Number.parseInt(questionIndex)];
      const dimension = question.dimension;
      const score = answerValue as number; // score is 0 or 1 from handleAnswer

      if (dimensionScores.hasOwnProperty(dimension)) {
        dimensionScores[dimension] += score; // 累加得分
        dimensionCounts[dimension]++; // 累加问题数量
      }
    });

    const result: TestResult = {
      EI: '', SN: '', TF: '', JP: '',
      percentages: {} as Record<string, number>
    };

    // 计算每个维度的倾向和百分比
    Object.entries(dimensionScores).forEach(([dimension, score]) => {
      const firstLetter = dimension[0];
      const secondLetter = dimension[1];
      const totalQuestions = dimensionCounts[dimension];

      if (totalQuestions === 0) return; // Avoid division by zero

      // 计算倾向第一个字母的百分比
      const percentage = (score / totalQuestions) * 100;

      result.percentages[firstLetter] = percentage;
      result.percentages[secondLetter] = 100 - percentage;

      // 根据得分判断维度倾向并赋值给result
      if (dimension === 'EI') {
        if (percentage > 50) {
          result.EI = firstLetter; // 倾向第一个字母 E
        } else if (percentage < 50) {
          result.EI = secondLetter; // 倾向第二个字母 I
        } else {
          result.EI = 'X'; // 中间状态
        }
      } else if (dimension === 'SN') {
        if (percentage > 50) {
          result.SN = firstLetter; // 倾向第一个字母 S
        } else if (percentage < 50) {
          result.SN = secondLetter; // 倾向第二个字母 N
        } else {
          result.SN = 'X'; // 中间状态
        }
      } else if (dimension === 'TF') {
        if (percentage > 50) {
          result.TF = firstLetter; // 倾向第一个字母 T
        } else if (percentage < 50) {
          result.TF = secondLetter; // 倾向第二个字母 F
        } else {
          result.TF = 'X'; // 中间状态
        }
      } else if (dimension === 'JP') {
        if (percentage > 50) {
          result.JP = firstLetter; // 倾向第一个字母 J
        } else if (percentage < 50) {
          result.JP = secondLetter; // 倾向第二个字母 P
        } else {
          result.JP = 'X'; // 中间状态
        }
      }
    });

    // 生成MBTI类型
    let mbtiType = '';
    if (result.EI !== 'X') mbtiType += result.EI;
    if (result.SN !== 'X') mbtiType += result.SN;
    if (result.TF !== 'X') mbtiType += result.TF;
    if (result.JP !== 'X') mbtiType += result.JP;

    // 验证结果是否为有效的MBTI类型
    const validTypes = Object.keys(mbtiTypes);
    if (!validTypes.includes(mbtiType)) {
      console.warn('Invalid MBTI type detected:', mbtiType);
      // 如果结果无效，使用最接近的有效类型
      mbtiType = findClosestValidType(mbtiType, validTypes);
    }

    console.log("Dimension Scores:", dimensionScores);
    console.log("Dimension Counts:", dimensionCounts);
    console.log("Calculated Result:", result);
    console.log("Calculated MBTI Type:", mbtiType);

    localStorage.setItem("mbtiResult", mbtiType);
    localStorage.setItem("testAnswers", JSON.stringify(answers));
    localStorage.setItem("mbtiPercentages", JSON.stringify(result.percentages));
    window.location.href = "/result";
  };

  // 辅助函数：找到最接近的有效MBTI类型
  const findClosestValidType = (invalidType: string, validTypes: string[]): string => {
    let closestType = ''
    let minDistance = Infinity

    validTypes.forEach(validType => {
      let distance = 0
      for (let i = 0; i < Math.min(invalidType.length, validType.length); i++) {
        if (invalidType[i] !== validType[i]) {
          distance++
        }
      }
      distance += Math.abs(invalidType.length - validType.length)
      
      if (distance < minDistance) {
        minDistance = distance
        closestType = validType
      }
    })

    return closestType
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {showMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md opacity-0 animate-fade-out">
            请选择测试版本
          </div>
        )}

        {showVersionSelection ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">请选择测试版本</h2>
            <div className="space-y-4">
              <Link href="/test?version=standard" className="block w-full py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                标准版 (93题)
              </Link>
              <Link href="/test?version=professional" className="block w-full py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                专业版 (145题)
              </Link>
              <Link href="/test?version=complete" className="block w-full py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                完整版 (200题)
              </Link>
            </div>
          </div>
        ) : (
          currentQuestions && currentQuestions.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold text-gray-800">MBTI人格测试</h1>
                  <span className="text-gray-500">
                    {currentQuestion + 1} / {currentQuestions?.length || 0}
                  </span>
                </div>
                <ProgressBar progress={progress} />
              </div>

              <TestQuestion
                question={currentQuestions[currentQuestion] as Question}
                onAnswer={handleAnswer}
                selectedAnswer={answers[currentQuestion]}
              />

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  上一题
                </button>

                <div className="text-sm text-gray-500 flex items-center">请根据你的真实想法选择最符合的选项</div>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  )
}

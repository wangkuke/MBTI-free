"use client"

import React, { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PersonalityResult } from "@/components/personality-result"
import { mbtiTypes } from "@/data/mbti-types"
import { useRouter } from 'next/navigation';

interface MBTIPercentages {
  E: number
  I: number
  S: number
  N: number
  T: number
  F: number
  J: number
  P: number
}

interface MBTITraits {
  [key: string]: {
    title: string
    description: string
    strengths: string[]
    weaknesses: string[]
    careers: string[]
  }
}

const mbtiTraits: MBTITraits = {
  ISTJ: {
    title: "检查者",
    description: "安静、严肃、通过全面性和可靠性获得成功。实际、有序、负责任。他们决定自己该做什么，并坚定不移地完成。重视传统和忠诚。",
    strengths: ["可靠", "耐心", "忠诚", "注重细节", "实际"],
    weaknesses: ["固执", "不灵活", "过于传统", "完美主义"],
    careers: ["会计", "审计师", "项目经理", "系统分析师", "法律顾问"]
  },
  ISFJ: {
    title: "守护者",
    description: "安静、友善、负责任和谨慎。坚定地承担责任。他们重视承诺，重视传统和忠诚。",
    strengths: ["忠诚", "耐心", "可靠", "注重细节", "关心他人"],
    weaknesses: ["过度谦虚", "自我牺牲", "过于传统"],
    careers: ["护士", "教师", "社会工作者", "行政助理", "客户服务"]
  },
  INFJ: {
    title: "提倡者",
    description: "寻求意义和联系，想要了解什么能够激励别人。他们希望了解人类动机，并帮助他人实现潜能。",
    strengths: ["创造力", "洞察力", "同理心", "决心", "理想主义"],
    weaknesses: ["完美主义", "过度理想化", "过于敏感"],
    careers: ["心理咨询师", "作家", "教师", "人力资源", "非营利组织工作"]
  },
  INTJ: {
    title: "建筑师",
    description: "在实现自己的想法和达成自己的目标时有创新的想法和非凡的动力。能很快洞察到外界事物间的规律并形成长期的远景计划。",
    strengths: ["战略思维", "独立", "创新", "自信", "分析能力"],
    weaknesses: ["傲慢", "完美主义", "过于理性"],
    careers: ["科学家", "工程师", "系统架构师", "战略顾问", "研究员"]
  },
  ISTP: {
    title: "鉴赏家",
    description: "灵活和宽容，安静地观察直到问题出现，然后迅速行动找到可行的解决方案。分析事物运作的原理，能从大量的信息中很快地找到关键的症结所在。",
    strengths: ["观察力", "灵活性", "解决问题能力", "实用主义"],
    weaknesses: ["冒险", "独立", "不善于表达"],
    careers: ["机械师", "工程师", "飞行员", "运动员", "技术专家"]
  },
  ISFP: {
    title: "探险家",
    description: "安静、友善、敏感和善良。享受当前。喜欢有自己的空间，喜欢按照自己的时间表工作。忠于自己的价值观和重要的人。",
    strengths: ["艺术感", "同理心", "灵活性", "忠诚"],
    weaknesses: ["过于理想化", "过度敏感", "不善于规划"],
    careers: ["艺术家", "设计师", "音乐家", "厨师", "物理治疗师"]
  },
  INFP: {
    title: "调停者",
    description: "理想主义者，忠于自己的价值观和自己所重视的人。希望外部的生活与自己内心的价值观一致。",
    strengths: ["理想主义", "创造力", "同理心", "忠诚"],
    weaknesses: ["过于理想化", "不切实际", "过于敏感"],
    careers: ["作家", "心理咨询师", "教师", "艺术家", "社会工作者"]
  },
  INTP: {
    title: "学者",
    description: "追求自己的兴趣和逻辑解释。理论性强，重视理解而非实际应用。喜欢解决复杂的问题。",
    strengths: ["分析能力", "创造力", "客观", "创新"],
    weaknesses: ["过于理论化", "不切实际", "社交困难"],
    careers: ["科学家", "哲学家", "研究员", "系统分析师", "教授"]
  },
  ESTP: {
    title: "企业家",
    description: "灵活、宽容，采用实用的方法解决问题。喜欢理论和抽象的解释。喜欢解决新的、具有挑战性的问题。",
    strengths: ["行动力", "观察力", "灵活性", "解决问题能力"],
    weaknesses: ["冒险", "不善于规划", "容易厌倦"],
    careers: ["企业家", "销售", "运动员", "工程师", "项目经理"]
  },
  ESFP: {
    title: "表演者",
    description: "外向、友善、接受性强。热爱生活、人类和物质上的享受。喜欢和别人一起完成事情。",
    strengths: ["热情", "乐观", "社交能力", "适应力"],
    weaknesses: ["不善于规划", "容易分心", "过于感性"],
    careers: ["演员", "销售", "活动策划", "旅游顾问", "客户服务"]
  },
  ENFP: {
    title: "竞选者",
    description: "热情洋溢、富有想象力。认为生活充满可能性。能很快地将事情和信息联系起来，然后很自信地根据自己的判断解决问题。",
    strengths: ["热情", "创造力", "社交能力", "适应力"],
    weaknesses: ["不切实际", "容易分心", "过于理想化"],
    careers: ["记者", "作家", "教师", "咨询师", "营销"]
  },
  ENTP: {
    title: "辩论家",
    description: "反应快、睿智，有激励别人的能力，警觉性强、直言不讳。在解决新的、具有挑战性的问题时机智而有策略。",
    strengths: ["创新", "适应力", "解决问题能力", "社交能力"],
    weaknesses: ["不切实际", "容易厌倦", "过于理性"],
    careers: ["企业家", "律师", "咨询师", "营销", "工程师"]
  },
  ESTJ: {
    title: "总经理",
    description: "实际、现实主义者，具有企业或机械方面的天赋。喜欢组织和操作活动。能记住重要的事实和细节。",
    strengths: ["组织能力", "效率", "责任感", "实际"],
    weaknesses: ["固执", "不灵活", "过于传统"],
    careers: ["管理者", "军官", "财务分析师", "项目经理", "系统分析师"]
  },
  ESFJ: {
    title: "执政官",
    description: "热心肠、有责任心、合作性强。希望把周围的环境变得井然有序。喜欢和他人一起完成事情。",
    strengths: ["合作", "责任感", "社交能力", "组织能力"],
    weaknesses: ["过度传统", "过于在意他人看法", "不灵活"],
    careers: ["教师", "护士", "人力资源", "客户服务", "行政助理"]
  },
  ENFJ: {
    title: "主人公",
    description: "热情、为他人着想、反应敏捷、负责任。非常关注他人的感受、需要和动机。善于发现他人的潜能，希望帮助他们实现。",
    strengths: ["领导力", "同理心", "社交能力", "组织能力"],
    weaknesses: ["过度理想化", "过于在意他人看法", "完美主义"],
    careers: ["教师", "咨询师", "人力资源", "非营利组织工作", "营销"]
  },
  ENTJ: {
    title: "指挥官",
    description: "坦诚、果断，天生的领导者。长于制定计划和实现目标。通常见多识广，博览群书，喜欢拓展自己的知识面。",
    strengths: ["领导力", "战略思维", "效率", "自信"],
    weaknesses: ["傲慢", "不灵活", "过于理性"],
    careers: ["企业家", "管理者", "律师", "咨询师", "工程师"]
  }
}

export default function ResultPage() {
  const [mbtiType, setMbtiType] = useState<string>("")
  const [percentages, setPercentages] = useState<MBTIPercentages | null>(null)
  const [traits, setTraits] = useState<any>(null)
  const router = useRouter();

  useEffect(() => {
    const result = localStorage.getItem("mbtiResult")
    const percentagesStr = localStorage.getItem("mbtiPercentages")

    if (result) {
      setMbtiType(result)
      setTraits(mbtiTraits[result])
    }

    if (percentagesStr) {
      setPercentages(JSON.parse(percentagesStr))
    }
  }, [])

  const renderDimensionBar = (dimension: string, leftValue: number, rightValue: number) => {
    const total = leftValue + rightValue
    const leftPercentage = (leftValue / total) * 100
    const rightPercentage = (rightValue / total) * 100

    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">{dimension[0]}</span>
          <span className="text-sm font-medium text-gray-700">{dimension[1]}</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="flex h-full">
            <div
              className="bg-blue-500 transition-all duration-500"
              style={{ width: `${leftPercentage}%` }}
            />
            <div
              className="bg-green-500 transition-all duration-500"
              style={{ width: `${rightPercentage}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">{Math.round(leftPercentage)}%</span>
          <span className="text-xs text-gray-500">{Math.round(rightPercentage)}%</span>
        </div>
      </div>
    )
  }

  if (!mbtiType || !traits) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">加载中...</h1>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">你的MBTI类型是</h1>
              <div className="text-5xl font-bold text-blue-600 mb-4">{mbtiType}</div>
              <div className="text-xl text-gray-600">{traits.title}</div>
            </div>

            {percentages && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">维度分析</h2>
                {renderDimensionBar("EI", percentages.E, percentages.I)}
                {renderDimensionBar("SN", percentages.S, percentages.N)}
                {renderDimensionBar("TF", percentages.T, percentages.F)}
                {renderDimensionBar("JP", percentages.J, percentages.P)}
              </div>
            )}

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">性格特征</h2>
                <p className="text-gray-600 leading-relaxed">{traits.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">优势</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {traits.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">潜在挑战</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {traits.weaknesses.map((weakness: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">适合的职业方向</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {traits.careers.map((career: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => window.location.href = "/"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                返回首页
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

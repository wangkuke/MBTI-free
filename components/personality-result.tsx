"use client"

import { Share2, Download, RefreshCw } from "lucide-react"

interface PersonalityData {
  name: string
  nickname: string
  description: string
  strengths: string[]
  weaknesses: string[]
  careers: string[]
  relationships: string[]
  famous: string[]
}

interface PersonalityResultProps {
  type: string
  data: PersonalityData
}

export function PersonalityResult({ type, data }: PersonalityResultProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `我的MBTI人格类型是${type}`,
        text: `我刚完成了MBTI测试，结果是${data.name}！`,
        url: window.location.href,
      })
    } else {
      // 复制到剪贴板
      navigator.clipboard.writeText(`我的MBTI人格类型是${type} - ${data.name}！`)
      alert("结果已复制到剪贴板")
    }
  }

  const handleDownload = () => {
    // 生成PDF报告的逻辑
    alert("PDF报告生成功能开发中...")
  }

  const handleRetake = () => {
    localStorage.removeItem("mbtiResult")
    localStorage.removeItem("testAnswers")
    window.location.href = "/test"
  }

  return (
    <div className="space-y-8">
      {/* 结果标题 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">{type}</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h1>
        <p className="text-xl text-purple-600 mb-4">"{data.nickname}"</p>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{data.description}</p>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleShare}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Share2 className="w-4 h-4 mr-2" />
            分享结果
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            下载报告
          </button>
          <button
            onClick={handleRetake}
            className="flex items-center px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            重新测试
          </button>
        </div>
      </div>

      {/* 详细分析 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 优势 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-green-500 mr-2">💪</span>
            性格优势
          </h2>
          <ul className="space-y-2">
            {data.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 发展空间 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-orange-500 mr-2">🎯</span>
            发展空间
          </h2>
          <ul className="space-y-2">
            {data.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 职业建议 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-blue-500 mr-2">💼</span>
            适合职业
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.careers.map((career, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {career}
              </span>
            ))}
          </div>
        </div>

        {/* 人际关系 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-pink-500 mr-2">❤️</span>
            人际关系
          </h2>
          <ul className="space-y-2">
            {data.relationships.map((relationship, index) => (
              <li key={index} className="flex items-start">
                <span className="text-pink-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">{relationship}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 名人代表 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-yellow-500 mr-2">⭐</span>
          同类型名人
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.famous.map((person, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">👤</div>
              <p className="text-sm font-medium text-gray-800">{person}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

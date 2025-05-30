import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RelationshipsPage() {
  const compatibilityData = {
    INTJ: { best: ["ENFP", "ENTP"], good: ["INFJ", "INFP"], challenging: ["ESFJ", "ISFJ"] },
    INTP: { best: ["ENFJ", "ENTJ"], good: ["INFJ", "INTJ"], challenging: ["ESFJ", "ESTJ"] },
    ENTJ: { best: ["INFP", "INTP"], good: ["ENFJ", "ENFP"], challenging: ["ISFP", "ISFJ"] },
    ENTP: { best: ["INFJ", "INTJ"], good: ["ENFP", "ENFJ"], challenging: ["ISTJ", "ISFJ"] },
    INFJ: { best: ["ENTP", "ENFP"], good: ["INTJ", "INFP"], challenging: ["ESTP", "ESFP"] },
    INFP: { best: ["ENFJ", "ENTJ"], good: ["INFJ", "ENFP"], challenging: ["ESTJ", "ESFJ"] },
    ENFJ: { best: ["INFP", "ISFP"], good: ["ENFP", "INFJ"], challenging: ["ISTP", "ESTP"] },
    ENFP: { best: ["INTJ", "INFJ"], good: ["ENFJ", "INFP"], challenging: ["ISTJ", "ESTJ"] },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">关系匹配</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解不同MBTI类型之间的关系动态，建立更和谐的人际关系
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {Object.entries(compatibilityData).map(([type, compatibility]) => (
              <div key={type} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{type}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-green-600 mb-2 flex items-center">
                      <span className="mr-2">💚</span>
                      最佳匹配
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {compatibility.best.map((matchType) => (
                        <span key={matchType} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {matchType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center">
                      <span className="mr-2">💙</span>
                      良好匹配
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {compatibility.good.map((matchType) => (
                        <span key={matchType} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {matchType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-orange-600 mb-2 flex items-center">
                      <span className="mr-2">🧡</span>
                      需要努力
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {compatibility.challenging.map((matchType) => (
                        <span key={matchType} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          {matchType}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">关系建议</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">理解差异</h3>
                <p className="text-gray-600 text-sm">接受和欣赏彼此的性格差异，将其视为关系中的互补优势</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">有效沟通</h3>
                <p className="text-gray-600 text-sm">根据对方的性格特点调整沟通方式，确保信息准确传达</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">共同目标</h3>
                <p className="text-gray-600 text-sm">建立共同的价值观和目标，为关系发展提供稳定的基础</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">共同成长</h3>
                <p className="text-gray-600 text-sm">支持彼此的个人发展，在关系中实现共同成长和进步</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TypeCard } from "@/components/type-card"
import { mbtiTypes } from "@/data/mbti-types"

export default function TypesPage() {
  const typeCategories = {
    analysts: ["INTJ", "INTP", "ENTJ", "ENTP"],
    diplomats: ["INFJ", "INFP", "ENFJ", "ENFP"],
    sentinels: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
    explorers: ["ISTP", "ISFP", "ESTP", "ESFP"],
  }

  const categoryNames = {
    analysts: "分析家",
    diplomats: "外交家",
    sentinels: "守护者",
    explorers: "探险家",
  }

  const categoryDescriptions = {
    analysts: "理性、独立、追求知识和能力的完美主义者",
    diplomats: "富有同情心、合作精神，总是寻求和谐与成长",
    sentinels: "实用、注重事实，可靠且稳定的合作者",
    explorers: "自发、足智多谋，善于适应和灵活应变",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">16种人格类型</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索MBTI的16种人格类型，了解每种类型的特点、优势和发展方向
            </p>
          </div>

          {Object.entries(typeCategories).map(([category, types]) => (
            <section key={category} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {categoryNames[category as keyof typeof categoryNames]}
                </h2>
                <p className="text-lg text-gray-600">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {types.map((type) => (
                  <TypeCard key={type} type={type} data={mbtiTypes[type as keyof typeof mbtiTypes]} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

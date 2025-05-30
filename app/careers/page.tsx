import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CareersPage() {
  const careersByType = {
    INTJ: ["软件架构师", "战略规划师", "投资分析师", "科学研究员"],
    INTP: ["研究科学家", "软件开发工程师", "数据分析师", "理论物理学家"],
    ENTJ: ["CEO", "管理咨询师", "投资银行家", "企业家"],
    ENTP: ["创新顾问", "营销总监", "产品经理", "风险投资家"],
    INFJ: ["心理咨询师", "人力资源总监", "非营利组织领导", "作家"],
    INFP: ["创意写作", "心理治疗师", "社会工作者", "艺术治疗师"],
    ENFJ: ["培训师", "教育管理者", "公关总监", "团队教练"],
    ENFP: ["创意总监", "市场营销专家", "人力资源专员", "记者"],
    ISTJ: ["会计师", "项目管理", "质量控制", "银行经理"],
    ISFJ: ["护士", "小学教师", "人事专员", "客户服务经理"],
    ESTJ: ["运营总监", "销售经理", "政府官员", "军官"],
    ESFJ: ["人力资源经理", "活动策划师", "客户关系经理", "社区服务"],
    ISTP: ["机械工程师", "软件测试", "飞行员", "技术支持"],
    ISFP: ["平面设计师", "摄影师", "兽医", "按摩治疗师"],
    ESTP: ["销售代表", "房地产经纪人", "体育教练", "急救医疗技术员"],
    ESFP: ["演员", "活动主持人", "旅游顾问", "儿童教育工作者"],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">职业建议</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根据你的MBTI人格类型，发现最适合你的职业方向和发展路径
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(careersByType).map(([type, careers]) => (
              <div key={type} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{type}</div>
                </div>
                <div className="space-y-2">
                  {careers.map((career, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">职业发展建议</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">了解自己</h3>
                <p className="text-gray-600">深入了解自己的性格特点、优势和发展空间，为职业选择提供基础</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">发挥优势</h3>
                <p className="text-gray-600">选择能够发挥你天然优势的职业领域，让工作成为你的能量源泉</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">持续成长</h3>
                <p className="text-gray-600">关注个人发展空间，通过学习和实践不断提升自己的能力</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

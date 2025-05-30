import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="bg-white font-sans text-dark">
      <Navigation />

      {/* 主内容区 */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <section className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 leading-tight text-shadow">
              了解真实的<span className="text-primary">自己</span>，发现你的<span className="text-secondary">潜力</span>
            </h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-lg mb-8">
              目前使用人数第一的MBTI测试，基于荣格的心理类型理论和布里格斯·迈尔斯的研究
            </p>
            <div className="flex justify-center items-center space-x-4 text-dark/60">
              <div className="flex items-center">
                <i className="fa fa-users mr-2"></i>
                <span>全球超过 10 亿人参与测试</span>
              </div>
              <div className="h-4 w-px bg-dark/20"></div>
              <div className="flex items-center">
                <i className="fa fa-check-circle mr-2"></i>
                <span>科学验证的心理测评工具</span>
              </div>
            </div>
          </section>

          {/* 测试版本选择区域 */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* 标准版 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 card-hover">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">标准版</h3>
                  <p className="text-dark/60">93道题目</p>
                </div>
                <div className="text-3xl text-primary">
                  <i className="fa fa-star-o"></i>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>基础人格类型分析</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>职业倾向建议</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>关系匹配分析</span>
                </div>
                <div className="flex items-center text-dark/40">
                  <i className="fa fa-times mr-3"></i>
                  <span>详细认知功能分析</span>
                </div>
                <div className="flex items-center text-dark/40">
                  <i className="fa fa-times mr-3"></i>
                  <span>发展建议报告</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-dark/60">近30天测试人数</span>
                  <span className="font-bold">123,456</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <Link href="/test?version=standard" className="block w-full py-3 mt-6 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors text-center">
                选择此版本
              </Link>
            </div>

            {/* 专业版 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 card-hover">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">专业版</h3>
                  <p className="text-dark/60">145道题目</p>
                </div>
                <div className="text-3xl text-secondary">
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>基础人格类型分析</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>职业倾向建议</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>关系匹配分析</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>详细认知功能分析</span>
                </div>
                <div className="flex items-center text-dark/40">
                  <i className="fa fa-times mr-3"></i>
                  <span>发展建议报告</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-dark/60">近30天测试人数</span>
                  <span className="font-bold">234,567</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <Link href="/test?version=professional" className="block w-full py-3 mt-6 rounded-full border-2 border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition-colors text-center">
                选择此版本
              </Link>
            </div>

            {/* 完整版 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary relative card-hover transform md:-translate-y-4">
              <div className="absolute -top-4 right-8 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                推荐
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">完整版</h3>
                  <p className="text-dark/60">200道题目</p>
                </div>
                <div className="text-3xl text-accent">
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>基础人格类型分析</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>职业倾向建议</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>关系匹配分析</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>详细认知功能分析</span>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check text-green-500 mr-3"></i>
                  <span>发展建议报告</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-dark/60">近30天测试人数</span>
                  <span className="font-bold">345,678</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <Link href="/test?version=complete" className="block w-full py-3 mt-6 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-center">
                选择此版本
              </Link>
            </div>
          </section>

          {/* 开始测试按钮 */}
          <section className="text-center">
            <Link
              href="/test"
              className="inline-block px-12 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 btn-pulse hover:shadow-primary/30 transition-all"
            >
              开始测试
            </Link>
            <p className="mt-4 text-dark/60">
              完成测试约需 15-45 分钟
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

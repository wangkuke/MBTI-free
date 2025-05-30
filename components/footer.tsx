import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-purple-600 text-2xl">👤</div>
              <h3 className="text-xl font-bold">
                MBTI<span className="text-cyan-400">人格</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">专业的MBTI人格测试，帮助你了解真实的自己，发现你的潜力和天赋。</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                📘
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                🐦
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                📷
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                💼
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">测试</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/test" className="text-gray-400 hover:text-purple-600 transition-colors">
                  MBTI测试
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-purple-600 transition-colors">
                  职业性格测试
                </Link>
              </li>
              <li>
                <Link href="/relationships" className="text-gray-400 hover:text-purple-600 transition-colors">
                  爱情匹配测试
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  性格优势测试
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">资源</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/types" className="text-gray-400 hover:text-purple-600 transition-colors">
                  16种人格类型
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-purple-600 transition-colors">
                  职业建议
                </Link>
              </li>
              <li>
                <Link href="/relationships" className="text-gray-400 hover:text-purple-600 transition-colors">
                  关系指导
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  博客文章
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">📧</span>
                <a
                  href="mailto:contact@16personalities.com"
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                >
                  contact@16personalities.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">📞</span>
                <span className="text-gray-400">+86 123 4567 8910</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">📍</span>
                <span className="text-gray-400">北京市朝阳区建国路88号</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2025 MBTI人格. 保留所有权利.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors text-sm">
              隐私政策
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors text-sm">
              服务条款
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors text-sm">
              关于我们
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

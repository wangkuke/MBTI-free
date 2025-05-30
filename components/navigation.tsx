"use client"

import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-purple-600 text-3xl">
           <i class="fa fa-user-circle-o"></i>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-purple-600">
            MBTI<span className="text-cyan-400">人格测试</span>
          </h1>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
            首页
          </Link>
          <Link href="/mbti-result" className="text-gray-600 hover:text-purple-600 transition-colors">
            测试结果
          </Link>
          <Link href="/types" className="text-gray-600 hover:text-purple-600 transition-colors">
            类型介绍
          </Link>
          <Link href="/careers" className="text-gray-600 hover:text-purple-600 transition-colors">
            职业建议
          </Link>
          <Link href="/relationships" className="text-gray-600 hover:text-purple-600 transition-colors">
            关系匹配
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
            登录
          </button>
          <button className="md:hidden text-gray-800 text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-purple-600">
              首页
            </Link>
            <Link href="/mbti-result" className="block text-gray-600 hover:text-purple-600">
              测试结果
            </Link>
            <Link href="/types" className="block text-gray-600 hover:text-purple-600">
              类型介绍
            </Link>
            <Link href="/careers" className="block text-gray-600 hover:text-purple-600">
              职业建议
            </Link>
            <Link href="/relationships" className="block text-gray-600 hover:text-purple-600">
              关系匹配
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

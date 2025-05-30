"use client"

import { useEffect, useState } from 'react';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function MbtiResultPage() {
  const [mbtiType, setMbtiType] = useState<string | null>(null);

  useEffect(() => {
    // 从本地存储读取 MBTI 类型
    const storedMbtiType = localStorage.getItem('mbtiResult');
    if (storedMbtiType) {
      setMbtiType(storedMbtiType);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">你的MBTI类型是：</h1>
            {mbtiType ? (
              <div className="text-5xl font-bold text-blue-600">{mbtiType}</div>
            ) : (
              <div className="text-xl text-gray-600">正在加载结果...</div>
            )}
            <p className="mt-4 text-gray-600">完成测试后，可以在这里查看你的基本MBTI类型。</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
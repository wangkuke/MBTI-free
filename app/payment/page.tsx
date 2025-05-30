'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// 将使用 useSearchParams 的逻辑提取到子组件
function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tradeStatus = searchParams.get('trade_status');
    if (tradeStatus === 'TRADE_SUCCESS') {
      localStorage.setItem('paymentStatus', 'paid');
      router.push('/result');
    }
  }, [searchParams, router]);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      const orderId = `MBTI_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, amount: '9.90' }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`支付创建失败: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (!data.payUrl) throw new Error('未获取到支付链接');
      
      window.location.href = data.payUrl;
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '支付创建失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">支付查看结果</h2>
        <p className="text-gray-600 mb-6">完成测试，支付 9.9 元即可查看完整报告。</p>
        <Button
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full py-3 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
          {isLoading ? '处理中...' : '支付宝支付 9.9 元'}
        </Button>
      </div>
    </div>
  );
}

// 主组件使用 Suspense 包裹
export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-sm">
          <p className="text-gray-600">加载支付信息中...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}

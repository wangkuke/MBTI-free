import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    // 解析请求体
    let data: Record<string, string>;
    try {
      // 支付宝异步通知是 form 格式
      const formData = await request.formData();
      data = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [
          key,
          value instanceof File ? value.name : value.toString()
        ])
      );
      console.log('Received payment verification request:', data);
    } catch (parseError) {
      console.error('Failed to parse verification request:', parseError);
      return NextResponse.json(
        { error: '无效的请求数据' },
        { status: 400 }
      );
    }

    // 验证签名
    const sign = data.sign;
    const signType = data.sign_type;
    delete data.sign;
    delete data.sign_type;

    // 按 ASCII 码排序
    const sortedParams = Object.keys(data)
      .sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
          const charA = a.charCodeAt(i);
          const charB = b.charCodeAt(i);
          if (charA !== charB) {
            return charA - charB;
          }
        }
        return a.length - b.length;
      })
      .map(key => `${key}=${data[key]}`)
      .join('&');

    console.log('Verification string:', sortedParams);

    // 验证签名
    const publicKey = process.env.ALIPAY_PUBLIC_KEY;
    if (!publicKey) {
      console.error('ALIPAY_PUBLIC_KEY is not set');
      return NextResponse.json(
        { error: '配置错误' },
        { status: 500 }
      );
    }

    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(sortedParams, 'utf8');
    const isValid = verify.verify(publicKey, sign, 'base64');

    console.log('Payment verification result:', isValid);

    if (isValid) {
      // TODO: 更新订单状态
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: '支付验证失败' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: '支付验证失败' },
      { status: 500 }
    );
  }
} 
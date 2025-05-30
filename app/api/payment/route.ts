import { NextResponse } from 'next/server';
import crypto from 'crypto';

interface AlipayParams {
  app_id: string;
  method: string;
  charset: string;
  sign_type: string;
  timestamp: string;
  version: string;
  notify_url: string;
  return_url: string;
  biz_content: string;
  sign?: string;
}

// 辅助函数：格式化日期为指定格式
function formatTimestamp(date: Date, format: string): string {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);

  let formattedString = format;
  formattedString = formattedString.replace('yyyy', year.toString());
  formattedString = formattedString.replace('MM', month);
  formattedString = formattedString.replace('dd', day);
  formattedString = formattedString.replace('HH', hours);
  formattedString = formattedString.replace('mm', minutes);
  formattedString = formattedString.replace('ss', seconds);

  return formattedString;
}

// 辅助函数：格式化金额为两位小数的字符串
function formatAmount(amount: number): string {
  return amount.toFixed(2);
}

export async function POST(request: Request) {
  try {
    // 解析请求体
    const body = await request.json();
    console.log('Received test completion request:', body);

    // 直接返回测试结果
    return NextResponse.json({
      success: true,
      message: '测试完成',
      result: {
        type: 'INTJ',
        description: '建筑师型人格',
        traits: [
          '富有想象力和战略性思维',
          '独立思考',
          '追求知识和理解',
          '重视逻辑和理性',
          '追求完美和创新'
        ],
        strengths: [
          '强大的分析能力',
          '创造性解决问题',
          '独立自主',
          '追求卓越',
          '战略性思考'
        ],
        challenges: [
          '可能过于完美主义',
          '有时显得过于理性',
          '可能忽视情感因素',
          '可能过于独立',
          '可能过于理想化'
        ]
      }
    });
  } catch (error) {
    console.error('Error processing test completion:', error);
    return NextResponse.json(
      { 
        error: '处理测试结果时出错',
        message: '请稍后重试'
      },
      { status: 500 }
    );
  }
} 
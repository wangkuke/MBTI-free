import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MBTI测试 - 了解真实的自己',
  description: '专业的MBTI人格测试，帮助你了解真实的自己，发现你的潜力和天赋。',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

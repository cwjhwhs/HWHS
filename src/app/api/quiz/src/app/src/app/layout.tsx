export const metadata = {
  title: 'StudyX AI',
  description: '全免費 AI 刷題平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body style={{ margin: 0, backgroundColor: '#fafafa' }}>{children}</body>
    </html>
  )
}


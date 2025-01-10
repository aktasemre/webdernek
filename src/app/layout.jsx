import '@/styles/globals.scss'

export const metadata = {
  title: 'Köy Derneği',
  description: 'Köy derneği resmi web sitesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
} 
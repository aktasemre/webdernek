import '../styles/globals.scss'
import Navbar from '@/components/common/Navbar/Navbar'
import Footer from '@/components/common/Footer/Footer'
import SideMenu from '@/components/common/SideMenu/SideMenu'

export const metadata = {
  title: 'Arslandede Köyü Derneği',
  description: 'Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği resmi web sitesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <div className="layout-container">
          <SideMenu />
          <main className="main-content">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
} 
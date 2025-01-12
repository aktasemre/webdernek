import './globals.scss';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';

export const metadata = {
  metadataBase: new URL('https://arslandededernegi.org'),
  title: 'Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği resmi web sitesi',
  keywords: ['Arslandede Köyü', 'Bayburt', 'Dernek', 'Köy Derneği', 'Yardımlaşma', 'Dayanışma'],
  authors: [{ name: 'Arslandede Köyü Derneği' }],
  creator: 'Arslandede Köyü Derneği',
  publisher: 'Arslandede Köyü Derneği',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.arslandededernegi.org',
    siteName: 'Arslandede Köyü Derneği',
    title: 'Arslandede Köyü Derneği',
    description: 'Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği resmi web sitesi',
    images: [
      {
        url: '/images/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Arslandede Köyü Derneği Logo',
      }
    ]
  },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 
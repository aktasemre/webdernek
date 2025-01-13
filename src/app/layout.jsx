import './globals.scss';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';

export const metadata = {
  metadataBase: new URL('https://arslandededernegi.org'),
  title: 'Arslandede Köyü Derneği | Bayburt Arslandede Köyü',
  description: 'Bayburt Arslandede Köyü Derneği resmi web sitesi. Arslandede Köyü hakkında bilgiler, haberler, etkinlikler ve köy ile ilgili tüm gelişmeler.',
  keywords: [
    'Arslandede Köyü',
    'Bayburt Arslandede',
    'Arslandede Derneği',
    'Bayburt Köyleri',
    'Arslandede Bayburt',
    'Bayburt Merkez Köyleri',
    'Arslandede Tarihi',
    'Arslandede Coğrafyası',
    'Köy Derneği',
    'Yardımlaşma',
    'Dayanışma'
  ],
  authors: [{ name: 'Arslandede Köyü Derneği' }],
  creator: 'Arslandede Köyü Derneği',
  publisher: 'Arslandede Köyü Derneği',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  },
  alternates: {
    canonical: 'https://www.arslandededernegi.org'
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.arslandededernegi.org',
    siteName: 'Arslandede Köyü Derneği',
    title: 'Arslandede Köyü Derneği | Bayburt Arslandede Köyü',
    description: 'Bayburt Arslandede Köyü Derneği resmi web sitesi. Köyümüz hakkında bilgiler, haberler, etkinlikler ve tüm gelişmeler.',
    images: [
      {
        url: '/images/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Arslandede Köyü Derneği Logo',
      },
      {
        url: '/images/arslandede-intro.jpg',
        width: 1200,
        height: 630,
        alt: 'Bayburt Arslandede Köyü Manzarası',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arslandede Köyü Derneği | Bayburt Arslandede Köyü',
    description: 'Bayburt Arslandede Köyü Derneği resmi web sitesi. Köyümüz hakkında bilgiler, haberler ve etkinlikler.',
    images: ['/images/arslandede-intro.jpg'],
  },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  manifest: '/manifest.json',
  icons: {
    apple: [
      { url: '/icons/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/icons/favicon.ico'],
    other: [
      { rel: 'icon', url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'apple-touch-icon', url: '/icons/apple-icon-180.png' },
      { rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#28a745' }
    ],
  },
  themeColor: '#28a745',
  viewport: 'width=device-width, initial-scale=1.0',
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
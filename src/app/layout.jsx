import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import { Providers } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Arslandede Köyü Derneği',
    template: '%s | Arslandede Köyü Derneği',
  },
  description:
    'Arslandede Köyü Derneği resmi web sitesi. Köyümüz hakkında bilgiler, haberler, etkinlikler ve daha fazlası.',
  keywords: [
    'arslandede köyü',
    'dernek',
    'köy',
    'yardımlaşma',
    'dayanışma',
    'kültür',
    'gelenek',
    'görenek',
  ],
  authors: [{ name: 'Arslandede Köyü Derneği' }],
  creator: 'Arslandede Köyü Derneği',
  publisher: 'Arslandede Köyü Derneği',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arslandede.org.tr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Arslandede Köyü Derneği',
    description:
      'Arslandede Köyü Derneği resmi web sitesi. Köyümüz hakkında bilgiler, haberler, etkinlikler ve daha fazlası.',
    url: 'https://arslandede.org.tr',
    siteName: 'Arslandede Köyü Derneği',
    images: [
      {
        url: '/images/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Arslandede Köyü Derneği Logo',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arslandede Köyü Derneği',
    description:
      'Arslandede Köyü Derneği resmi web sitesi. Köyümüz hakkında bilgiler, haberler, etkinlikler ve daha fazlası.',
    images: ['/images/logo.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192.png',
    shortcut: '/icons/icon-192.png',
    apple: '/icons/icon-192.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/icon-192.png',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2C5F2D" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

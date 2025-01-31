import { Inter } from 'next/font/google';
import './globals.css';
import PropTypes from 'prop-types';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://arslandedekoyu.org.tr'),
  title: {
    default: 'Arslandede Köyü Derneği',
    template: '%s | Arslandede Köyü Derneği',
  },
  description: 'Arslandede Köyü Derneği resmi web sitesi. Köyümüzün gelişimi, kültürü ve değerleri için çalışıyoruz.',
  keywords: ['Arslandede Köyü', 'Dernek', 'Bayburt', 'Köy Derneği', 'Kültür', 'Yardımlaşma'],
  authors: [{ name: 'Arslandede Köyü Derneği' }],
  creator: 'Arslandede Köyü Derneği',
  publisher: 'Arslandede Köyü Derneği',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Arslandede Köyü Derneği',
    description: 'Arslandede Köyü Derneği resmi web sitesi. Köyümüzün gelişimi, kültürü ve değerleri için çalışıyoruz.',
    url: 'https://arslandedekoyu.org.tr',
    siteName: 'Arslandede Köyü Derneği',
    locale: 'tr_TR',
    type: 'website',
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
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://arslandedekoyu.org.tr',
  },
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#0070f3" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

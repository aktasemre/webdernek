import Header from '@/components/common/Header/Header';
import '@/styles/globals.scss';
import PropTypes from 'prop-types';

export const metadata = {
  title: 'Arslandede Köyü',
  description: 'Arslandede Köyü Derneği resmi web sitesi',
  manifest: '/manifest.json',
  themeColor: '#2C5F2D',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2C5F2D" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body suppressHydrationWarning={true} className="antialiased">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}; 
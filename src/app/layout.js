import Head from 'next/head';

export const metadata = {
  title: 'Arslandede Köyü Derneği',
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
      </head>
      <body suppressHydrationWarning={true} className="antialiased">{children}</body>
    </html>
  );
} 
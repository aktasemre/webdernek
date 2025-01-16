import './globals.scss';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import BottomNav from '@/components/layout/BottomNav/BottomNav';


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C5F2D'
};

export const metadata = {
  metadataBase: new URL('https://arslandededernegi.org'),
  title: {
    template: '%s | Arslandede Köyü Derneği',
    default: 'Arslandede Köyü Derneği'
  },
  description: 'Arslandede Köyü Derneği resmi web sitesi',
  keywords: ['arslandede', 'köy derneği', 'trabzon', 'dernekpazarı'],
  manifest: '/manifest.json',
  icons: {
    apple: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Arslandede" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <BottomNav/>
        <Footer />
      </body>
    </html>
  );
} 
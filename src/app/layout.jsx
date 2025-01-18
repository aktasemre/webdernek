import './globals.scss';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import PropTypes from 'prop-types';

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
  description: 'Arslandede Köyü Derneği resmi web sitesi - Köyümüzün gelişimi için çalışıyoruz',
  keywords: ['arslandede köyü', 'köy derneği', 'bayburt', 'yardımlaşma', 'dayanışma'],
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
    canonical: 'https://arslandededernegi.org',
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

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}; 
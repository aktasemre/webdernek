import '@/styles/globals.scss';
import PropTypes from 'prop-types';

export const metadata = {
  title: 'Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği resmi web sitesi',
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
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

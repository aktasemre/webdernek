import { useEffect } from 'react';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          () => {
            // Başarılı kayıt durumunda sessizce devam et
          },
          () => {
            // Hata durumunda sessizce devam et
          },
        );
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

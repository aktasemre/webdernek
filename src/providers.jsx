'use client';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import PropTypes from 'prop-types';

export function Providers({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}

// PropTypes ile tip kontrolü
Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

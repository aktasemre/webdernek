'use client';

import { ThemeProvider } from 'next-themes';
import PropTypes from 'prop-types';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}; 
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import iletisimData from '@/data/iletisim.data.json';

describe('Footer', () => {
  it('should render contact information', () => {
    render(<Footer />);
    expect(screen.getByText('İletişim')).toBeInTheDocument();
    expect(screen.getByText(iletisimData.email)).toBeInTheDocument();
    expect(screen.getByText(iletisimData.phone.president)).toBeInTheDocument();
  });

  it('should render address information', () => {
    render(<Footer />);
    expect(screen.getByText(iletisimData.address.dernek.title)).toBeInTheDocument();
    expect(screen.getByText(iletisimData.address.dernek.text)).toBeInTheDocument();
  });

  it('should render social media links', () => {
    render(<Footer />);
    Object.entries(iletisimData.social).forEach(([platform, url]) => {
      const link = screen.getByTestId(`social-${platform}`);
      expect(link).toHaveAttribute('href', url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('should render copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Arslandede Köyü Derneği. Tüm hakları saklıdır.`),
    ).toBeInTheDocument();
  });
});

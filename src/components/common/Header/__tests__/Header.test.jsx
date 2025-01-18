import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import iletisimData from '@/data/iletisim.data.json';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Header', () => {
  it('should render logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByAltText('Arslandede Köyü Derneği Logo')).toBeInTheDocument();
    expect(screen.getByText('Ana Sayfa')).toBeInTheDocument();
    expect(screen.getByText('Köyümüz')).toBeInTheDocument();
    expect(screen.getByText('Derneğimiz')).toBeInTheDocument();
  });

  it('should toggle mobile menu when menu button is clicked', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Toggle Menu');
    const menu = screen.getByRole('navigation').querySelector('.menu');
    fireEvent.click(menuButton);
    expect(menu).toHaveClass('');
    fireEvent.click(menuButton);
    expect(menu).not.toHaveClass('open');
  });

  it('should show search input when search button is clicked', () => {
    render(<Header />);
    const searchButton = screen.getByLabelText('Arama');
    fireEvent.click(searchButton);
    expect(screen.getByPlaceholderText('Site içinde arama yapın...')).toBeInTheDocument();
  });

  it('should link to profession inventory form', () => {
    render(<Header />);
    const surveyButton = screen.getByText('Meslek Envanteri');
    expect(surveyButton).toHaveAttribute('href', iletisimData.forms.professionInventory);
  });
});

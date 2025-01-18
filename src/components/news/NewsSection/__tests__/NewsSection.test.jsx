import { render, screen } from '@testing-library/react';
import NewsSection from '../NewsSection';
import haberlerData from '@/data/haberler.data.json';

describe('NewsSection', () => {
  it('should render featured news', () => {
    render(<NewsSection />);
    const featuredNews = haberlerData.haberler.find((h) => h.featured);
    expect(screen.getByText(featuredNews.title)).toBeInTheDocument();
    expect(screen.getByText(featuredNews.summary)).toBeInTheDocument();
  });

  it('should render news list', () => {
    render(<NewsSection />);
    const nonFeaturedNews = haberlerData.haberler.filter((h) => !h.featured);
    nonFeaturedNews.forEach((news) => {
      expect(screen.getByText(news.title)).toBeInTheDocument();
      expect(screen.getByText(news.summary)).toBeInTheDocument();
    });
  });

  it('should show news metadata', () => {
    render(<NewsSection />);
    haberlerData.haberler.forEach((news) => {
      const card = screen.getByText(news.title).closest('article');
      expect(card).toHaveTextContent(news.date);
      expect(card).toHaveTextContent(news.category);
      expect(card).toHaveTextContent(news.author);
    });
  });

  it('should link to news detail pages', () => {
    render(<NewsSection />);
    haberlerData.haberler.forEach((news) => {
      const link = screen.getByText(news.title).closest('a');
      expect(link).toHaveAttribute('href', `/haberler/${news.id}`);
    });
  });

  it('should show news images', () => {
    render(<NewsSection />);
    haberlerData.haberler.forEach((news) => {
      const image = screen.getByAltText(news.title);
      expect(image).toHaveAttribute('src');
      expect(image).toHaveClass('image');
    });
  });
});

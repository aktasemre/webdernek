import { render, screen, act } from '@testing-library/react';
import Hero from '../Hero';
import sliderData from '@/data/slider.data.json';

jest.useFakeTimers();

describe('Hero', () => {
  it('should render slider with correct initial slide', () => {
    render(<Hero />);
    expect(screen.getByText(sliderData.slides[0].title)).toBeInTheDocument();
    expect(screen.getByText(sliderData.slides[0].description)).toBeInTheDocument();
  });

  it('should change slide after interval', () => {
    render(<Hero />);
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(screen.getByText(sliderData.slides[1].title)).toBeInTheDocument();
  });

  it('should render correct number of dots', () => {
    render(<Hero />);
    const dots = screen
      .getAllByRole('button', { name: '' })
      .filter((button) => button.classList.contains('dot'));
    expect(dots).toHaveLength(sliderData.slides.length);
  });

  it('should render all images with correct attributes', () => {
    render(<Hero />);
    sliderData.slides.forEach((slide) => {
      const img = screen.getByAltText(slide.title);
      expect(img).toHaveAttribute('src');
      expect(img).toHaveClass('image');
      expect(img).toHaveStyle({ objectFit: 'cover' });
    });
  });
});

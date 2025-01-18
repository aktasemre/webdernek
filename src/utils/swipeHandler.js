import { useRef } from 'react';

export const useSwipeHandler = (setCurrentSlide, slidesLength) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }
    const swipeDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      setCurrentSlide((prev) => (prev + 1) % slidesLength);
    } else if (swipeDistance < -swipeThreshold) {
      setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};

import { useState } from 'react';

const useSwipeHandler = (setCurrentSlide, totalSlides) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum kaydırma mesafesi
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      setCurrentSlide((prev) => {
        if (isLeftSwipe) {
          // Sola kaydırma - sonraki slide
          return (prev + 1) % totalSlides;
        } else {
          // Sağa kaydırma - önceki slide
          return (prev - 1 + totalSlides) % totalSlides;
        }
      });
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useSwipeHandler;

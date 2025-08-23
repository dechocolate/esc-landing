import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ScrollToTop: React.FC = () => {
  const { showScrollTop, scrollToTop } = useScrollToTop();

  if (!showScrollTop) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{
        opacity: showScrollTop ? 1 : 0,
        transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
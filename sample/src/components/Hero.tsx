import React, { useEffect, useRef } from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (title) {
      const text = title.textContent || '';
      title.textContent = '';
      title.classList.add('slide-in-left');
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          title.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 500);
    }

    if (subtitle) {
      subtitle.classList.add('slide-in-right');
      subtitle.style.animationDelay = '1s';
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div>
          <h1 ref={titleRef} className="hero-title">혼자만의 완벽한 시간</h1>
          <p ref={subtitleRef} className="hero-subtitle">Solo Off와 함께 나만의 공간을 찾아보세요</p>
          <button className="cta-button">시작하기</button>
        </div>
        <div className="hero-image">
          <div className="placeholder-image"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

interface CTAProps {}

const CTA: React.FC<CTAProps> = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>지금 바로 시작하세요</h2>
        <p>Solo Off와 함께 완벽한 개인 시간을 경험해보세요</p>
        <button className="cta-button large">무료 체험하기</button>
      </div>
    </section>
  );
};

export default CTA;
import React, { useEffect, useRef } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.animationDelay = `${delay}s`;
    }
  }, [delay]);

  return (
    <div ref={cardRef} className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const features = [
    {
      icon: "🏠",
      title: "편안한 공간",
      description: "집중할 수 있는 조용하고 편안한 개인 공간을 제공합니다."
    },
    {
      icon: "⚡",
      title: "빠른 예약",
      description: "간편한 온라인 예약 시스템으로 언제든지 공간을 예약하세요."
    },
    {
      icon: "💡",
      title: "맞춤 서비스",
      description: "개인의 취향과 필요에 맞는 다양한 공간 옵션을 제공합니다."
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">왜 Solo Off인가요?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
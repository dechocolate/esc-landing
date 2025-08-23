import React, { useEffect, useRef } from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  delay: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, delay }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (item) {
      item.style.animationDelay = `${delay}s`;
    }
  }, [delay]);

  return (
    <div ref={itemRef} className="service-item">
      <div className="service-image"></div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="service-link">자세히 보기</a>
      </div>
    </div>
  );
};

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const services = [
    {
      title: "개인 스터디룸",
      description: "조용하고 집중할 수 있는 개인 전용 스터디 공간"
    },
    {
      title: "프라이빗 카페",
      description: "혼자만의 시간을 즐길 수 있는 조용한 카페 공간"
    },
    {
      title: "워킹 스페이스",
      description: "업무에 집중할 수 있는 프리미엄 개인 오피스"
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">서비스</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Solo Off</h4>
            <p>혼자만의 완벽한 시간을 위한 공간 서비스</p>
          </div>
          <div className="footer-section">
            <h4>서비스</h4>
            <ul>
              <li><a href="#">개인 스터디룸</a></li>
              <li><a href="#">프라이빗 카페</a></li>
              <li><a href="#">워킹 스페이스</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>고객지원</h4>
            <ul>
              <li><a href="#">자주 묻는 질문</a></li>
              <li><a href="#">문의하기</a></li>
              <li><a href="#">이용약관</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>연락처</h4>
            <p>이메일: info@solo-off.com</p>
            <p>전화: 02-1234-5678</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Solo Off. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
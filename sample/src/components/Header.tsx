import React, { useState, useEffect } from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="logo">Solo Off</a>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>홈</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link">서비스</a>
              <ul className="dropdown-menu">
                <li><a href="#">개인 공간</a></li>
                <li><a href="#">스터디룸</a></li>
                <li><a href="#">카페</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>소개</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>문의</a>
            </li>
          </ul>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React, { useEffect, useState } from 'react';
import '../../styles/client/TopBar.scss';

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`topBar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-left">
        <h1>Đoàn Luật Sư Thành phố Hồ Chí Minh</h1>
        <h3>Công Ty Luật Kim Ngọc</h3>
      </div>
      <div className="container-right">
        <p className="info">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:+0919146222">0913.89.99.33</a>
        </p>
        <p className="info">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:+0919146222">0919.146.222</a>
        </p>
        <p className="info">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:luatkimngoc@gmail.com">luatkimngoc@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default TopBar;
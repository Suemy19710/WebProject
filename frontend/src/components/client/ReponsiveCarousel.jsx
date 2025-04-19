import React, { useState, useEffect } from 'react';
import '../../styles/client/ReponsiveCarousel.scss';
import carousel1 from '../../assets/carousel-1.png'; 
import carousel2 from '../../assets/carousel-2.png'; 
import carousel3 from '../../assets/carousel-3.png'; 
import carousel4 from '../../assets/carousel-4.png'; 
import carousel5 from '../../assets/carousel-5.png'; 
import carousel6 from '../../assets/carousel-6.png'; 


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ carousel1, carousel2, carousel3, carousel4, carousel5, carousel6  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle arrow navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  // Handle dot navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div 
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
      >
        {images.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div 
        className="carousel-arrow carousel-arrow-left" 
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        ❮
      </div>
      <div 
        className="carousel-arrow carousel-arrow-right" 
        onClick={goToNext}
        aria-label="Next slide"
      >
        ❯
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
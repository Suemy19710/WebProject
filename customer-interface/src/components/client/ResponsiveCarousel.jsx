import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/client/ResponsiveCarousel.scss';

import res1 from '../../assets/res1.png';

class ResponsiveCarousel extends React.Component {
    render (){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        };
        return (
            <div className="carousel-background">
                <div className="carousel-container">
                    <Slider {...settings}>
                        <div>
                            <img src={res1} alt="Slide 1" />                
                        </div>
                        <div>
                            <img src={res1} alt="Slide 1" />                
                        </div>
                        <div>
                            <img src={res1} alt="Slide 1" />   
                        </div>
                    </Slider>
                    {/* <button className="previous">&lt;</button>
                    <button className="next">&gt;</button> */}
                </div>
            </div>
           
        );
    }
}

export default ResponsiveCarousel;
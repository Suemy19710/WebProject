import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/client/ResponsiveCarousel.scss';
import res1 from '../../assets/res1.png';
import res2 from '../../assets/res2.jpg';
import res3 from '../../assets/res3.jpg';
import res4 from '../../assets/res4.jpg';


class ResponsiveCarousel extends React.Component {
    render (){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true, 
            autoplaySpeed: 3000, 
        };
        return (
            <div className="carousel-background">
                <div className="carousel-container">
                    <Slider {...settings}>
                        <div>
                            <img src={res3} alt="Slide 3" />                
                        </div>
                        <div>
                            <img src={res2} alt="Slide 2" />                
                        </div>
                        <div>
                            <img src={res4} alt="Slide 3" />   
                        </div>
                        <div>
                            <img src={res1} alt="Slide 1" />   
                        </div>
                    </Slider>
                  
                </div>
            </div>
           
        );
    }
}

export default ResponsiveCarousel;


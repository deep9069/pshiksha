import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'
  
const ImageSlider = ({images}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="carousel">
        <div className="imgslider">
          <Slider {...settings}>
            {images.map((item) => (
              <div key={item.id}>
                <a href={item.link} target='_blank'>
                  <img
                    src={item.src}
                    style={{
                      verticalAlign: "center",
                    }}
                    alt={item.alt}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default ImageSlider;
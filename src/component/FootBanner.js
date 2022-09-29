import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

class FootBanner extends Component {
  render() {
    const settings = {
      arrows: false,
      slidesToShow: 1,
      infinite: true,
      speed: 1000,
      autoplay: true,
      pauseOnHover: false,
    };
    return (
      <footbanner className="footbanner">
        <div className="container">
          <Slider {...settings}>
            <div>
              <img src="asset/img/footbanner01.jpg" alt="" />
            </div>
            <div>
              <img src="asset/img/footbanner02.jpg" alt="" />
            </div>
            <div>
              <img src="asset/img/footbanner03.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </footbanner>
    );
  }
}

export default FootBanner
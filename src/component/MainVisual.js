import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

class MainVisual extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            pauseOnHover: false,
        };
        return (
            <mainvisual className="mainvisual">
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img src="asset/img/slide01.jpg" alt="" />
                        </div>
                        <div>
                            <img src="asset/img/slide02.jpg" alt="" />
                        </div>
                        <div>
                            <img src="asset/img/slide03.jpg" alt="" />
                        </div>
                        <div>
                            <img src="asset/img/slide04.jpg" alt="" />
                        </div>
                        <div>
                            <img src="asset/img/slide05.jpg" alt="" />
                        </div>

                    </Slider>
                </div>
            </mainvisual>

        );
    }
}

export default MainVisual;
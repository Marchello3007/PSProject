import React from 'react'
import './HeadPageSlider.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {}

const HeadPageSlider = (props: Props) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: false,
    }

    return (
        <div className="head-page-slider">
            <Slider {...settings}>
                <div className="head-page-slider-item">
                    <img
                        className="head-page-slider-image"
                        src="./images/remont_promyshlennyh_pylesosov.jpeg"
                        alt=""
                    />
                </div>

                <div className="head-page-slider-item">
                    <img
                        className="head-page-slider-image"
                        src="./images/pmm.jpg"
                        alt=""
                    />
                </div>
                <div className="head-page-slider-item">
                    <img
                        className="head-page-slider-image"
                        src="./images/remont_pilesosov_ph.jpg"
                        alt=""
                    />
                </div>
            </Slider>
        </div>
    )
}

export default HeadPageSlider

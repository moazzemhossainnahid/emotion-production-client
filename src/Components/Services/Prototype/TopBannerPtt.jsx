import React from 'react';
import Slider from "react-slick";

const TopBannerPtt = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={"https://i.ibb.co/3dtzRwC/SL-100321-45940-56.jpg"} alt='' />
                </div>
                <div>
                    <img src={"https://i.ibb.co/Fgn9XY0/20314239-SL-062121-43900-81.jpg"} alt='' />
                </div>
                <div>
                    <img src={"https://i.ibb.co/TtNThMm/20023212-SL-091320-34930-27.jpg"} alt='' />
                </div>
                <div>
                    <img src={"https://i.ibb.co/4V42gZr/34532469-sl-100622-53160-19.jpg"} alt='' />
                </div>
                <div>
                    <img src={"https://i.ibb.co/nzrmRdQ/33818883-sl-100622-53160-51.jpg"} alt='' />
                </div>
                <div>
                    <img src={"https://i.ibb.co/hfkbycZ/34085711-sl-100622-53160-07-1.jpg"} alt='' />
                </div>

                <div>
                    <img src={"https://i.ibb.co/stXzZpY/10467516-9127.jpg"} alt='' />
                </div>
            </Slider>
        </div>
    );
};

export default TopBannerPtt;
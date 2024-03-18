// import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Cards from "./cards";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUserGroup,
//   faGasPump,
//   faGaugeSimpleHigh,
//   faCar,
// } from "@fortawesome/free-solid-svg-icons";

const Corousel = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={50}
        renderIndicator={false}
        className="max-w-screen-lg mx-auto"
        responsive={{
          0: { slidesToShow: 1 },
          768: { slidesToShow: 3 },
        }}
      >
        {/* Your carousel slides */}
        {/* Slide 1 */}
        <div className="carousel-slide">
          <Cards />
        </div>
        {/* Slide 2 */}
        <div className="carousel-slide">
          <Cards />
        </div>
        {/* Slide 3 */}
        <div className="carousel-slide">
          <Cards />
        </div>
      </Carousel>
    </div>
  );
};

export default Corousel;

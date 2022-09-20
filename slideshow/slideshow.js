// import "react-slideshow-image/dist/styles.css";
// import { Slide } from "react-slideshow-image";

import React from "react";

import image1 from '../images/Rooms/Presidential-Guest.jpg'
import image2 from '../images/Rooms/FamilyQuad.jpg'
import image3 from '../images/Rooms/single.jpg'


const images = [image1, image2, image3];

const zoomOutProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      {/* <Slide {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Slide> */}
    </div>
  );
};

export default Slideshow
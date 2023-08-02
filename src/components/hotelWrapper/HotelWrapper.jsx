import { useState } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import hotelImg from "../../data/hotelImg";

import "./HotelWrapper.scss";
import "../../styles/base.scss";
const HotelWrapper = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSlideNumber);
  };
  return (
    <div className="hotelWrapper">
      {open && (
        <div className="hSlider">
          <AiOutlineArrowLeft
            className="sliderArrow"
            onClick={() => handleMove("l")}
          />
          <div className="sliderWrapper">
            <img
              src={hotelImg[sliderNumber].src}
              alt=""
              className="sliderImg"
            />
          </div>
          <AiOutlineArrowRight
            className="sliderArrow"
            onClick={() => handleMove("r")}
          />
          <TfiClose className="sliderClose" onClick={() => setOpen(false)} />
        </div>
      )}
      <button className="bookNow">Reserve or book now</button>
      <h1 className="hTitle">Buhara Apart OldcityOpens in new window</h1>
      <div className="hotelAddress">
        <BsFillGeoAltFill className="hIcon" />

        <span> Tel Sokak, Beyoglu, 34433 Istanbul, Turkey</span>
      </div>
      <span className="hotelDistance">
        Excellent location - 500m from center
      </span>
      <span className="hotelPriceHightLight">
        Book a stay over $114 at this property - and get a free airport taxi
      </span>
      <div className="hotelImages">
        {hotelImg.map((img, i) => (
          <div className="hotelImgWrapper" key={i}>
            <img
              src={img.src}
              onClick={() => handleOpen(i)}
              alt="hotel photo"
              className="hotelImg"
            />
          </div>
        ))}
      </div>
      <div className="hotelDetails">
        <div className="hotelDetailsText">
          <h1 className="hotelTitle">State in the heart Buhara</h1>
          <p className="hotelDesc">
            You're eligible for a Genius discount at Aparthotel Stare Miasto! To
            save at this property, all you have to do is sign in. Aparthotel
            Stare Miasto is located in the very center of Buhara’s Old Town,
            just 394 feet from the Main Market Square. It features spacious
            modern apartments with free WiFi. Located in a historic building,
            Aparthotel Stare Miasto features a unique interior design in the
            warm color of bricks with wooden elements. Couples in particular
            like the location – they rated it 9.7 for a two-person trip.
          </p>
        </div>
        <div className="hotelDetailsPrice">
          <h1>Perfect for a 1-night stay!</h1>
          <span>
            Located in the real heart of Buhara, this property has an excellent
            location score of 9.7!
          </span>
          <h2>
            <b>$960</b> (9 nights)
          </h2>
          <button className="btnHover">Reverse a Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelWrapper;

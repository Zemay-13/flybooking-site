import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "./PropertyList.scss";

const PropertyList = () => {
  return (
    <div className="pList">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="pListItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
              alt=""
              className="pListImg"
            />
            <h1 className="pListTitle">Hotel</h1>
            <h2 className="pListSubtitle">3443 hotel</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pListItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
              alt=""
              className="pListImg"
            />
            <h1 className="pListTitle">Chalet</h1>
            <h2 className="pListSubtitle">3453 chalet</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pListItem">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
              className="pListImg"
            />
            <h1 className="pListTitle">Resort hotel</h1>
            <h2 className="pListSubtitle">19 576 hotel</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pListItem">
            <img
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
              alt=""
              className="pListImg"
            />
            <h1 className="pListTitle">Apartments</h1>
            <h2 className="pListSubtitle">12 300 apartments</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pListItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
              alt=""
              className="pListImg"
            />
            <h1 className="pListTitle">Villa</h1>
            <h2 className="pListSubtitle">11 657 villa</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PropertyList;

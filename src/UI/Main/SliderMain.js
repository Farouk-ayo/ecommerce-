import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import slidesData from "./slidestore";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "swiper/css/autoplay";

import classes from "./SliderMain.module.css";

const Sliders = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation={({ prevEl: ".none" }, { nextEl: ".none" })}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
      }}
    >
      {slidesData.map((value) => {
        return (
          <SwiperSlide key={value.key}>
            <section className={classes.collection}>
              <div className={classes.mainText}>
                <h3>lifestyle collection</h3>
                <h1>{value.Gender}</h1>
                <h2>
                  sale up to{" "}
                  <span className={classes.reddie}>{value.salesDiscount}</span>
                </h2>
                <p>{value.shipping}</p>
                <button className={classes.shopNow}>Shop Now</button>
              </div>
              <img className={classes.mainImage} src={value.image} alt="" />
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Sliders;

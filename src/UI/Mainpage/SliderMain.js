import mainImage from "../../assets/w11.png";
import men from "../../assets/men.png";
import kids from "../../assets/kidslll.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
// import { EffectFade } from "swiper";
// import { EffectCube } from "swiper";
// import { EffectFlip } from "swiper";
// import { EffectCoverflow } from "swiper";
// import { EffectCards } from "swiper";
// import { EffectCreative } from "swiper";

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
      <SwiperSlide>
        <section className={classes.collection}>
          <div className={classes.mainText}>
            <h3>lifestyle collection</h3>
            <h1>men</h1>
            <h2>
              sale up to <span className={classes.reddie}>30% off</span>
            </h2>
            <p>Get Free Shipping on orders over $99.00</p>
            <button className={classes.shopNow}>Shop Now</button>
          </div>
          <img className={classes.mainImage} src={men} alt="" />
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className={classes.collection}>
          <div className={classes.mainText}>
            <h3>lifestyle collection</h3>
            <h1>men</h1>
            <h2>
              sale up to <span className={classes.reddie}>30% off</span>{" "}
            </h2>
            <p>Get Free Shipping on orders over $99.00</p>
            <button className={classes.shopNow}>Shop Now</button>
          </div>
          <img className={classes.mainImage} src={mainImage} alt="" />
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className={classes.collection}>
          <div className={classes.mainText}>
            <h3>lifestyle collection</h3>
            <h1>men</h1>
            <h2>
              sale up to <span className={classes.reddie}>30% off</span>{" "}
            </h2>
            <p>Get Free Shipping on orders over $99.00</p>
            <button className={classes.shopNow}>Shop Now</button>
          </div>
          <img className={classes.mainImage} src={kids} alt="" />
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliders;

import { IoFlash } from "react-icons/io5";
import classes from "./Flash.module.css";

import SlidesFlashStore from "./SlidesFlashStore";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Flash from "./Flash";

const Flashsale = () => {
  return (
    <section className={classes.flashsale}>
      <div className={classes.flashHead}>
        <IoFlash color="#d32f2f" size={30} />
        <h2>Flash Sales</h2>
      </div>
      <div className={classes.container}>
        <Swiper modules={[Navigation]} navigation loop={true} slidesPerView={4}>
          {SlidesFlashStore.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <Flash
                  key={value.id}
                  id={value.id}
                  productName={value.product}
                  productImage={value.productImage}
                  percentOff={value.percentOff}
                  price={value.price}
                  rating={value.ratingNum}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Flashsale;

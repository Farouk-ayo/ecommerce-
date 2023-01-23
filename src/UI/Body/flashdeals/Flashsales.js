import { IoFlash } from "react-icons/io5";
import classes from "./Flashsale.module.css";

import SlidesFlashStore from "./SlidesFlashStore";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Flashsale = () => {
  return (
    <section className={classes.flashsale}>
      <div className={classes.flashHead}>
        <IoFlash color="#f55353" size={30} />
        <h2>Flash Sales</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
      >
        {SlidesFlashStore.map((value) => {
          return (
            <SwiperSlide>
              <div className={classes.flashcontainer}>
                <h5>{value.percentOff}</h5>
                <div>
                  <img src={value.productImage} alt="" />
                </div>
                <div>
                  <div>
                    <h3>{value.product}</h3>
                    {value.ratings}* {value.ratingNum}
                    <p> {value.price}</p>
                  </div>
                  <div className={classes.addcart}>
                    <h1>+</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Flashsale;

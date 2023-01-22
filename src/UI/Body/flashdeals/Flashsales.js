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
            clickable:true
        }}
      >
        {SlidesFlashStore.map((value) => {
          return (
            <SwiperSlide>
              <div className={classes.flashcontainer}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Flashsale;

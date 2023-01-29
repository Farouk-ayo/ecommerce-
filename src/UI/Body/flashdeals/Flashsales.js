import { IoFlash } from "react-icons/io5";
import classes from "./Flashsale.module.css";
import { AiFillStar } from "react-icons/ai";

import SlidesFlashStore from "./SlidesFlashStore";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Flashsale = () => {
  return (
    <section className={classes.flashsale}>
      <div className={classes.flashHead}>
        <IoFlash color="#f55353" size={30} />
        <h2>Flash Sales</h2>
      </div>
      <div className={classes.container}>
        <Swiper modules={[Navigation]} navigation loop={true} slidesPerView={4}>
          {SlidesFlashStore.map((value) => {
            return (
              <SwiperSlide>
                <div className={classes.flashcontainer}>
                  <div>
                    <h5>{value.percentOff}</h5>
                  </div>

                  <div className={classes.image}>
                    <img
                      className={classes.productImage}
                      src={value.productImage}
                      alt=""
                    />
                  </div>
                  <div className={classes.details}>
                    <div className={classes.productDetail}>
                      <h6>{value.product}</h6>
                      <div className={classes.allstars}>
                        {<AiFillStar color="#fde047" />}
                        {<AiFillStar color="#fde047" />}
                        {<AiFillStar color="#fde047" />}
                        {<AiFillStar color="#fde047" />}
                        {<AiFillStar color="#fde047" />}
                      </div>

                      <p className="price"> {value.price}</p>
                    </div>
                    <button className="addcart">+</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Flashsale;

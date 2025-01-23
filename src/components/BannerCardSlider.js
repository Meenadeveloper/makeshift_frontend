import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HaircutBanner from "../assets/images/mini-banner1.png";
import ElectricBillBanner from "../assets/images/minibanner2.png";
import MassageBanner from "../assets/images/mini-banner3.png";

import { Link } from "react-router-dom";

function ProductSlider() {
  const swiperRef = useRef(null); // Reference to Swiper instance

  const bannerData = [
    {
      id: 1,
      image: HaircutBanner,
      title: "Expert haircut starting at ₹199",
      description: "Haircut at home",
      buttonText: "Book now",
      backgroundColor: "#2E67F8",
    },
    {
      id: 2,
      image: ElectricBillBanner,
      title: "Save on electricity bills with power saver AC service",
      description: "",
      buttonText: "Book now",
      backgroundColor: "#0E1A47",
    },
    {
      id: 3,
      image: MassageBanner,
      title: "Relax & rejuvenate at home",
      description: "Massage for men",
      buttonText: "Book now",
      backgroundColor: "#8BB448",
    },
    {
      id: 4,
      image: HaircutBanner,
      title: "Expert haircut starting at ₹199",
      description: "Haircut at home",
      buttonText: "Book now",
      backgroundColor: "#2E67F8",
    },
  ];

  return (
    <div className="banner-slider-sec">
      <div className="container">
        <div className="sec-head-box">
          <h2 className="sec-head">Most Popular Service</h2>
          <Link to="/employee-booking-list" className="sec-head-link">
            See all
          </Link>
        </div>

        <Swiper
          ref={swiperRef} // Assigning the swiper instance to the ref
          className="banner-swiper"
          grabCursor={true} // This enables the drag cursor
          modules={[Navigation, Pagination, Autoplay]} // Added Autoplay module
          spaceBetween={20}
          slidesPerView={1}
          loop={true} // Loop the slides
          autoplay={{
            delay: 3000, // Slide change every 3 seconds
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {bannerData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="banner-card d-card-flex"
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div className="half-flex-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="banner-image"
                  />
                </div>

                <div className="img-text-box">
                  <h2 className="img-heading">{item.title}</h2>
                  <p>{item.description}</p>
                  {/* <button className='img-button'>{item.buttonText}</button> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          className="swiper-button-next custom-swiper-button"
          onClick={() => swiperRef.current.swiper.slideNext()} // Slide next on hover
        ></div>
        <div
          className="swiper-button-prev custom-swiper-button"
          onClick={() => swiperRef.current.swiper.slidePrev()} // Slide previous on hover
        ></div>
      </div>
    </div>
  );
}

export default ProductSlider;

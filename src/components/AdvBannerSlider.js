import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import AdvBanner from '../assets/images/ad_banner1.png'; // Import your banner image
import AdvBanner2 from '../assets/images/ad_banner1.png'; // Import your second banner image
import AdvBanner3 from '../assets/images/ad_banner1.png'; // Import your third banner image
import AdvBanner4 from '../assets/images/ad_banner1.png'; // Import your fourth banner image

function AdvBannerSlider() {
  return (
    <>
      <div className="adv-slider-sec">
        <div className="container">
          {/* advertisement banner */}
          <Swiper
            className="advertisementbanner-swiper"
            grabCursor={true}  // This enables the drag cursor
            modules={[Pagination, Autoplay]}  // Added Autoplay module
            spaceBetween={10} // Space between slides
            slidesPerView={1} // Only one slide visible at a time
            loop={true} // Infinite loop of slides
            autoplay={{
              delay: 3000, // Auto slide delay (in ms)
              disableOnInteraction: false, // Auto slide continues even when user interacts
            }}
            pagination={{
              clickable: true, // Make dots clickable
              type: 'bullets', // Use dots for pagination
            }}
          >
            <SwiperSlide>
              <div className="adv-banner-box">
                <div className="adv-banner-item">
                  <img src={AdvBanner} alt="Banner 1" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="adv-banner-box">
                <div className="adv-banner-item">
                  <img src={AdvBanner2} alt="Banner 2" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="adv-banner-box">
                <div className="adv-banner-item">
                  <img src={AdvBanner3} alt="Banner 3" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="adv-banner-box">
                <div className="adv-banner-item">
                  <img src={AdvBanner4} alt="Banner 4" />
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}

export default AdvBannerSlider;

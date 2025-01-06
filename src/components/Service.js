import Industry from '../assets/images/factory.png';
import House from '../assets/images/house.png';
import Retail from '../assets/images/retailshop.png';
import Mentor from '../assets/images/mentor.png';
import PDenquiry from '../assets/images/pd_enquiry.png';
import React, { useState, useRef } from 'react';
import ServicePopup from './ServicePopup';
import PDDeliveryPopup from './PDDeliveryPopup';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Service() {
  const swiperRef = useRef(null); // Reference to Swiper instance
  
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleServiceClick = (slideTitle) => {
    if (slideTitle === 'P & D Enquiry') {
      setIsPopupVisible(false); // Reset popup visibility before showing it again
    setTimeout(() => {
      setIsPopupVisible(true); // Show PDDeliveryPopup for 'P & D Enquiry'
    }, 0); // Use a timeout to ensure the state change is triggered
    } else {
      setIsServicePopupOpen(true); // Open the regular ServicePopup for other slides
    }
  };

  const handleClosePopup = () => {
    setIsServicePopupOpen(false); // Close ServicePopup
    setIsPopupVisible(false); // Close PDDeliveryPopup
  };

  const slidesData = [
    { image: Industry, title: 'Industry & Factory' },
    { image: Retail, title: 'Retail & Shop' },
    { image: House, title: 'Home (Personal)' },
    { image: Mentor, title: 'Mentor & Consultancies' },
    { image: PDenquiry, title: 'P & D Enquiry' },
    { image: House, title: 'Home (Personal)' }
  ];
  
  return (
    <>
      <section className='service-cont'>
        <div className='category-container'>
          <Swiper
            ref={swiperRef}
            className="banner-swiper"
            grabCursor={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            breakpoints={{
              568: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="service-item"
                  onClick={() => handleServiceClick(slide.title)} // Pass the slide title to the click handler
                >
                  <div className="service-img">
                    <img src={slide.image} alt={slide.title} />
                  </div>
                  <p className="card-sub-head">{slide.title}</p>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div
              className="swiper-button-next custom-swiper-button"
              onClick={() => swiperRef.current.swiper.slideNext()}
            ></div>
            <div
              className="swiper-button-prev custom-swiper-button"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            ></div>
          </Swiper>
        </div>

        {/* Conditionally render the popups */}
        {isPopupVisible && <PDDeliveryPopup handleClosePopup={handleClosePopup} />}
        {isServicePopupOpen && <ServicePopup handleClosePopup={handleClosePopup} />}
      </section>
    </>
  );
}

export default Service;

import Industry from '../assets/images/factory.png';
import House from '../assets/images/house.png';
import Retail from '../assets/images/retailshop.png';
import Mentor from '../assets/images/mentor.png';
import PDenquiry from '../assets/images/pd_enquiry.png';
import React, { useState,useRef } from 'react';
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

  const handleServiceClick = () => {
    setIsServicePopupOpen(true); // Open the popup when service item is clicked
  };

  const handleClosePopup = () => {
    setIsServicePopupOpen(false); // Close the popup when close button is clicked
  };


  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const slidesData = [
    { image: Industry, title: 'Industry & Factory' },
    { image: Retail, title: 'Retail & Shop' },
    { image: House, title: 'Home (Personal)' },
    { image: Mentor, title: 'Mentor & Consultancies' },
    { image: PDenquiry, title: 'P & D Enquiry' },
    { image: PDenquiry, title: 'P & D Enquiry'}
  ];
  
  return (
    <>
     <section className='service-cont'>
       <div className='category-container'>
       <Swiper
         ref={swiperRef} // Assigning the swiper instance to the ref
                  className="banner-swiper"
                  grabCursor={true}  // This enables the drag cursor
                  modules={[Navigation, Pagination, Autoplay]}  // Added Autoplay module
                  spaceBetween={20}
                  slidesPerView={2}
                  loop={true}  // Loop the slides
                  autoplay={{
                    delay: 3000,  // Slide change every 3 seconds
                    disableOnInteraction: false,  // Continue autoplay even after user interaction
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
                    568: {
                      slidesPerView: 3
                    },
                    768: {
                      slidesPerView: 4
                    },
                    1024: {
                      slidesPerView: 5
                    }
                  }}
        >
         {/* Map over dynamic slidesData */}
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="service-item"
            onClick={slide.isPopup ? handlePopupToggle : handleServiceClick}
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
          onClick={() => swiperRef.current.swiper.slideNext()} // Slide next on hover
        >   
        
        </div>
        <div
          className="swiper-button-prev custom-swiper-button"
          onClick={() => swiperRef.current.swiper.slidePrev()} // Slide previous on hover
        >
          
        </div>
       </Swiper>

             {/* Conditionally render the popup */}
       {isPopupVisible && <PDDeliveryPopup />}
       </div>
    </section>

    {isServicePopupOpen && <ServicePopup handleClosePopup={handleClosePopup} />}
    </>
   
  )
}

export default Service

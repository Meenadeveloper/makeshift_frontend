import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import { Link } from 'react-router-dom';


import BillingCash from '../assets/images/billing-cash-banner.png';
import QualityChecker from '../assets/images/quality-checker.jpg';
import DeliveryDriver from '../assets/images/delivery-driver.jpg';
import MarketingAssociate from '../assets/images/marketing-associate.jpg';
import StoreKeeper from '../assets/images/store-keeper.jpg';

function Tauter() {

    const miniBannerData = [
        {
          id: 1,
          image: DeliveryDriver,
          heading: 'Billing & Cashier',
          link: '/billing',
        },
        {
          id: 2,
          image: QualityChecker,
          heading: 'Inventory Management',
          link: '/inventory',
        },
        {
            id: 3,
            image: DeliveryDriver,
            heading: 'Inventory Management',
            link: '/inventory',
          },
          {
            id: 4,
            image: MarketingAssociate,
            heading: 'Inventory Management',
            link: '/inventory',
          },
          {
            id: 5,
            image: StoreKeeper,
            heading: 'Inventory Management',
            link: '/inventory',
          },
          {
            id: 6,
            image: QualityChecker,
            heading: 'Inventory Management',
            link: '/inventory',
          },
        // Add more banners as needed
      ];
  return (
    <>
      <div className="product-slider-sec">
      <div className="container">
      <div className='display-inline sec-head-box'>
        <h2 className='sec-head'>Tauter/ Consultancies</h2>
        <Link to="" className="sec-head-link">See all</Link>
       </div>

        <Swiper
        className="shop-swiper"
          grabCursor={true}  // This enables the drag cursor
          spaceBetween={10}
          slidesPerView={1} // Default on mobile devices
          breakpoints={{
            600: { slidesPerView: 3 }, // For tablets, show 2 items
            855: { slidesPerView: 4 }, // For laptops, show 3 items
           1300: { slidesPerView: 5 }, // For laptops, show 3 items
            1395: { slidesPerView: 5 } // For desktops, show 4 items
          }}
          loop={true} // Loop the slides
        >
          {/* Loop over product data to create SwiperSlides */}
          {miniBannerData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mini-banner-card">
                <div className="mini-banner-card-img">
                  <img src={item.image} alt={item.heading} />
                </div>
                <h2 className="mini-banner-heading">{item.heading}</h2>
              </div>
            </SwiperSlide>
          ))}
        
        </Swiper>
      </div>
    </div>
    </>
  )
}

export default Tauter

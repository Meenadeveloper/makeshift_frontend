import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles

// Import your images
import MachineOperator from '../assets/images/machine_operator.jpg';
import Plumber from '../assets/images/plumbers.png';
import Kitchen from '../assets/images/kitchen.jpg';
import Teacher from '../assets/images/teaching.jpg';

import { Link } from 'react-router-dom';

function ProductSlider({ onViewClick }) {
  // Example data for products
  const products = [
    {
      id: 1,
      title: 'Loading Helper',
      image: MachineOperator,
      reviews: '44k',
      perDay: 1000,
      perHour: 200,
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ],
      rating: 4.3,
      type: 'cart', // This will determine if the product has Add to Cart button
    },
    {
      id: 2,
      title: 'Machine Operator',
      image: Plumber,
      reviews: '30k',
      perDay: 1500,
      perHour: 300,
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ],
      rating: 4.5,
      type: 'cart',
    },
    {
      id: 3,
      title: 'Home False Ceiling',
      image: Kitchen,
      reviews: '44k',
      note: 'We have not set any specific amount for these types of services, as they are based on customer requirements.',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ],
      rating: 4.3,
      type: 'enquiry', // This will determine if the product is an Enquiry type
    },
    {
      id: 4,
      title: 'Home False Ceiling',
      image: Kitchen,
      reviews: '44k',
      note: 'We have not set any specific amount for these types of services, as they are based on customer requirements.',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ],
      rating: 4.3,
      type: 'enquiry', // This will determine if the product is an Enquiry type
    },
    {
      id: 5,
      title: 'Teacher',
      image: Teacher,
      reviews: '30k',
      perDay: 1500,
      perHour: 300,
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ],
      rating: 4.5,
      type: 'cart',
    }
  ];

  return (
    <>
      <div className="product-slider-sec">
        <div className="container">
          <div className='display-inline sec-head-box' style={{paddingTop:'30px'}}>
            <h2 className='sec-head'>Most Popular Service</h2>
            <Link to="" className="sec-head-link">See all</Link>
          </div>

          <Swiper
            className="product-swiper"
            grabCursor={true}  // This enables the drag cursor
            spaceBetween={20}
            slidesPerView={1} // Default on mobile devices
            breakpoints={{
              600: { slidesPerView: 2 }, // For tablets, show 2 items
              998: { slidesPerView: 3 }, // For laptops, show 3 items
              1300: { slidesPerView: 4 }, // For desktops, show 4 items
            }}
            loop={true} // Loop the slides
          >
            {/* Loop over product data to create SwiperSlides */}
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                {/* Card based on product type */}
                {product.type === 'cart' ? (
                  <div className="product-card">
                    {/* Card Image */}
                    <div className="card-image">
                      <img src={product.image} className="image-class" alt={product.title} />
                      <span className="star-box d-flex">
                        <i className="material-icons">star</i>
                        <p>{product.rating}</p>
                      </span>
                    </div>

                    <div className="card-content">
                      {/* Card Heading */}
                      <div className="card-head-box">
                        <span className="product-card-heading">{product.title}</span>
                        <span className="review-count">({product.reviews} reviews)</span>
                      </div>

                      {/* Card Pricing */}
                      <div className="card-text-box">
                        <div className="text-inline">
                          <p className="card-sub-head">Working Per Day</p>
                          <span className="prize">&#8377; {product.perDay}</span>
                        </div>
                        <div className="text-inline">
                          <p className="card-sub-head">Working Per Hour</p>
                          <span className="prize">&#8377; {product.perHour}</span>
                        </div>
                      </div>

                      {/* Card Description */}
                      <ul className="card-description">
                        {product.description.map((desc, index) => (
                          <li className='card-description-list' key={index}>{desc}</li>
                        ))}
                      </ul>

                      {/* Card Buttons */}
                      <div className="button-inline">
                        <button className="primary-button">Add to Cart</button>
                        <button className="secondary-button" onClick={() => onViewClick('cart')}>View</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="enquiry-card">
                    {/* Card Image */}
                    <div className="card-image">
                      <img src={product.image} className="image-class" alt={product.title} />
                      <span className="star-box d-flex">
                        <i className="material-icons">star</i>
                        <p>{product.rating}</p>
                      </span>
                    </div>

                    <div className="card-content">
                      {/* Card Heading */}
                      <div className="card-head-box">
                        <span className="product-card-heading">{product.title}</span>
                        <span className="review-count">({product.reviews} reviews)</span>
                      </div>

                      {/* Card Note */}
                      {product.note && (
                        <div className="card-text-box">
                          <p className="prize-note">{product.note}</p>
                        </div>
                      )}

                      {/* Card Description */}
                      <ul className="card-description">
                        {product.description.map((desc, index) => (
                          <li className='card-description-list' key={index}>{desc}</li>
                        ))}
                      </ul>

                      {/* Card Enquiry Button */}
                      <div className="button-center">
                        <button className="secondary-button" onClick={() => onViewClick('enquiry')}>Enquire Now</button>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductSlider;

import Service_img from '../assets/images/service_list.jpg'
import EmpLocation from '../assets/images/icons/location.svg'
import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
function EmployeeCancelCard() {

    // State to track which card should show the EmpRegSubmitNote popup
const [activeCardIndex, setActiveCardIndex] = useState(null);

const handleGenerateOtp = (index) => {
  setActiveCardIndex(index); // Set the active card index when Generate OTP is clicked
};
    // Sample data for the cards (replace with your actual data)
const cardsData = [
  { id: 1, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
  { id: 2, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
  { id: 3, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
  { id: 4, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
  { id: 5, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
  { id: 6, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },

  // Add more cards as needed
];
  return (
    <>
    <div className='emp-book-card-box'>
        {cardsData.map((card, index) => (
        <div className='emp-book-item' key={card.id}>
          <div className='slot-card-item emp-swipe-card emp-complete-card' style={{ maxWidth:'470px !important' }}>
            <div className='slot-card-head' >
              <div className='slot-card-left'>
                <div className='inline-text'>
                  <h2 className='slot-card-title'>{card.title}</h2>
                  <span className='slot-review-count'>({card.reviewCount} reviews)</span>
                </div>
                <div className='inline-text'>
                  <button className='view-detail-btn' onClick={() => handleGenerateOtp(index)}>View Details</button>
               
              {/* Conditionally render the EmpRegSubmitNote component only for the active card */}
              {activeCardIndex === index && <ProductDescription />}
                </div>
              </div>
              <div className='slot-card-right'>
                <div className="user-service-image">
                  <div className="user-service-rating">
                    <span>★ {card.rating}</span>
                  </div>
                  <img src={Service_img} alt='' />
                  <button class="emp-completed-btn">Canceled</button>
                </div>
              </div>
            </div>

            <div className='slot-card-body' >
              <div className='emp-pack-detail-container'>
                <div className='emp-pack-detail-item'>
                  <p>Service Method :</p>
                  <span>Day</span>
                </div>
                <div className='emp-pack-detail-item'>
                  <p>Working Duration :</p>
                  <span>01 Day</span>
                </div>
                <div className='emp-pack-detail-item'>
                  <p>Preferred Date :</p>
                  <span>{card.serviceDate}</span>
                </div>
                <div className='emp-pack-detail-item'>
                  <p>Preferred Time :</p>
                  <span>{card.serviceTime}</span>
                </div>
                <div className='emp-pack-detail-item'>
                  <p>Canceled By :</p>
                  <span>Admin</span>
                </div>
                <div className='emp-pack-detail-item'>
                  <p>Canceled Date :</p>
                  <span>25 / 11 / 2024</span>
                </div>
              </div>
             
            </div>

            <div className='emp-button-box'>
            <ul class="user-service-description" style={{  paddingBottom:'0px !important',marginBottom:'0px', }}>
                <li>Responsible for selecting items from the warehouse shelves based on 
                    customer orders</li>
                   </ul>

            </div>
          </div>
        </div>
      ))}
        </div>
      
    </>
  )
}

export default EmployeeCancelCard

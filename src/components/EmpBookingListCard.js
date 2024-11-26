import Service_img from '../assets/images/service_list.jpg';
import EmpLocation from '../assets/images/icons/location.svg';
import React, { useState } from 'react';
import EmpBookingOtp from './EmpBookingOtp';

function EmpBookingListCard() {
  // State to track which card should show the EmpRegSubmitNote popup
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleGenerateOtp = (index) => {
    setActiveCardIndex(index); // Set the active card index when Generate OTP is clicked
  };

  const handleWorkStarted = (index) => {
    console.log(`Work started for card ${index + 1}`);
    // Implement any additional functionality for work started
  };

  const handleWorkCompleted = (index) => {
    console.log(`Work completed for card ${index + 1}`);
    // Implement any additional functionality for work completed
  };

  // Sample data for the cards (replace with your actual data)
  const cardsData = [
    { id: 1, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
    { id: 2, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
    { id: 3, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
    { id: 4, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },

    // Unique card with different data
    { id: 5, title: 'Special Cleaner Service', reviewCount: '15k', rating: 5, serviceDate: 'August 30 2024', serviceTime: '10:00 am' },

    { id: 6, title: 'Picker Service', reviewCount: '44k', rating: 4.5, serviceDate: 'August 26 2024', serviceTime: '12:00 pm' },
  ];

  return (
    <>
      <div className='emp-book-card-box'>
        {cardsData.map((card, index) => (
          <div className='emp-book-item' key={card.id}>
            <div className='slot-card-item emp-swipe-card'>
              <div className='slot-card-head'>
                <div className='slot-card-left'>
                  <div className='inline-text'>
                    <h2 className='slot-card-title'>{card.title}</h2>
                    <span className='slot-review-count'>({card.reviewCount} reviews)</span>
                  </div>
                  <div className='inline-text'>
                    <button className='view-detail-btn'>View Details</button>
                  </div>
                </div>
                <div className='slot-card-right'>
                  <div className="user-service-image">
                    <div className="user-service-rating">
                      <span>★ {card.rating}</span>
                    </div>
                    <img src={Service_img} alt='' />
                  </div>
                </div>
              </div>

              <div className='slot-card-body' style={{ borderBottom: 'none' }}>
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
                </div>
                <ul className='emp-pers-detail-box'>
                  <li><span>Mobile number :</span><p>96542584563</p></li>
                  <li><span>E-mail ID :</span><p>Sivakarthikayan.03@gmail.com</p></li>
                  <li style={{ flexDirection: 'column', display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline' }}>
                    <span>Address :</span>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <img src={EmpLocation} alt='' />No3/1, 1st street, west mambalam, chennai-33
                    </p>
                  </li>
                  <li style={{ flexDirection: 'column', display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline' }}>
                    <span>Description :</span>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      No3/1, 1st street, west mambalam, chennai-33It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                    </p>
                  </li>
                </ul>
              </div>

              <div className='emp-button-box'>
                {/* Conditionally render buttons for the third and last card */}
                {index === 2 || index === cardsData.length - 1 ? (
                  <>
                    <button className='emp-work-started-btn' onClick={() => handleWorkStarted(index)}>Work Started</button>
                    <button className='emp-cancel-btn' onClick={() => handleWorkCompleted(index)}>Work Completed</button>
                  </>
                ) : (
                  <>
                    <button className='emp-otp-btn' onClick={() => handleGenerateOtp(index)}>Generate OTP</button>
                    <button className='emp-cancel-btn'>Cancel Booking</button>
                  </>
                )}

                {/* Conditionally render the EmpRegSubmitNote component only for the active card */}
                {activeCardIndex === index && <EmpBookingOtp />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EmpBookingListCard;

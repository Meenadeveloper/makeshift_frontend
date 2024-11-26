import Service_img from '../assets/images/service_list.jpg'
import EmpLocation from '../assets/images/icons/location.svg'
import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
function EmployeeCompletedCard() {
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
                  <button class="emp-completed-btn">Completed</button>
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
                  <p>Work Start Time :</p>
                  <span>01 : 00 am</span>
                </div>
                <div className='emp-pack-detail-item'>
                  <p>End Time :</p>
                  <span>05 : 00 pm</span>
                </div>
              </div>
              <ul class="user-service-description" style={{ paddingTop:'10px ', paddingBottom:'0px !important',marginBottom:'0px',borderTop:' 1.34px dotted #D4D4D4' }}>
                <li>Responsible for selecting items from the warehouse shelves based on 
                    customer orders</li>
                   </ul>
            </div>

            <div className='emp-button-box'>
            <div class="slot-amount" ><p style={{ fontSize:'14px' }}>Amount Received :</p>
            </div>
            <p class="amount-number">₹ 3,000</p>
            <button class="invoice-btn" style={{ fontSize:'14px',gap:'6px' }}>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.15227 6.36141C5.02326 6.2324 4.95079 6.05744 4.95079 5.875C4.95079 5.69256 5.02326 5.5176 5.15227 5.38859C5.28127 5.25959 5.45623 5.18712 5.63867 5.18712C5.82111 5.18712 5.99608 5.25959 6.12508 5.38859L9.07617 8.34055V1.0625C9.07617 0.880164 9.1486 0.705295 9.27754 0.576364C9.40647 0.447433 9.58134 0.375 9.76367 0.375C9.94601 0.375 10.1209 0.447433 10.2498 0.576364C10.3787 0.705295 10.4512 0.880164 10.4512 1.0625V8.34055L13.4023 5.38859C13.5313 5.25959 13.7062 5.18712 13.8887 5.18712C14.0711 5.18712 14.2461 5.25959 14.3751 5.38859C14.5041 5.5176 14.5766 5.69256 14.5766 5.875C14.5766 6.05744 14.5041 6.2324 14.3751 6.36141L10.2501 10.4864C10.1862 10.5503 10.1104 10.601 10.0269 10.6356C9.94348 10.6702 9.85402 10.688 9.76367 10.688C9.67332 10.688 9.58386 10.6702 9.5004 10.6356C9.41694 10.601 9.34112 10.5503 9.27727 10.4864L5.15227 6.36141ZM19.3887 10.6875V16.1875C19.3887 16.5522 19.2438 16.9019 18.9859 17.1598C18.7281 17.4176 18.3783 17.5625 18.0137 17.5625H1.51367C1.149 17.5625 0.799263 17.4176 0.5414 17.1598C0.283537 16.9019 0.138672 16.5522 0.138672 16.1875V10.6875C0.138672 10.3228 0.283537 9.97309 0.5414 9.71523C0.799263 9.45737 1.149 9.3125 1.51367 9.3125H6.0168C6.06195 9.31246 6.10667 9.32133 6.1484 9.33858C6.19013 9.35583 6.22805 9.38113 6.26 9.41305L8.30273 11.4609C8.49435 11.6532 8.72203 11.8058 8.97273 11.9099C9.22343 12.014 9.49222 12.0676 9.76367 12.0676C10.0351 12.0676 10.3039 12.014 10.5546 11.9099C10.8053 11.8058 11.033 11.6532 11.2246 11.4609L13.2699 9.41562C13.3334 9.35086 13.4199 9.31379 13.5105 9.3125H18.0137C18.3783 9.3125 18.7281 9.45737 18.9859 9.71523C19.2438 9.97309 19.3887 10.3228 19.3887 10.6875ZM15.9512 13.4375C15.9512 13.2335 15.8907 13.0342 15.7774 12.8646C15.6641 12.695 15.503 12.5628 15.3146 12.4847C15.1261 12.4067 14.9188 12.3863 14.7187 12.4261C14.5187 12.4659 14.3349 12.5641 14.1907 12.7083C14.0465 12.8525 13.9483 13.0363 13.9085 13.2363C13.8687 13.4364 13.8891 13.6437 13.9672 13.8321C14.0452 14.0206 14.1774 14.1816 14.347 14.295C14.5166 14.4083 14.716 14.4688 14.9199 14.4688C15.1934 14.4688 15.4557 14.3601 15.6491 14.1667C15.8425 13.9733 15.9512 13.711 15.9512 13.4375Z" fill="#B51144"></path></svg>
                     Invoice Download</button>

            </div>
          </div>
        </div>
      ))}
        </div>
    </>
  )
}

export default EmployeeCompletedCard

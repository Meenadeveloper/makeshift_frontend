import { ReactComponent as Download } from '../assets/images/icons/download.svg';
import React, { useState } from 'react';
import CompleteCard from './CompleteCard';
import CompletedCard from './CompletedCard';

function CompletedBookingCard() {
  // State to manage visibility of each tab content
  const [activeTab, setActiveTab] = useState(1); // Track which tab is active (1 or 2)

  const toggleTab = (tabIndex) => {
    if (activeTab === tabIndex) {
      setActiveTab(null); // Hide the content if the same tab is clicked
    } else {
      setActiveTab(tabIndex); // Show the content of the clicked tab
    }
  };

  return (
    <>
      <div className='tab-box'>
        {/* Booking tab 1 */}
        <div className='booking-tab-nav' onClick={() => toggleTab(1)}>
          <div className='booking-box' style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
            <p>Booking ID : 25SKS555</p>
            <p style={{ display: 'inline-flex', gap: '20px' }}>
              Booking Date : 18 / 11 / 2024
              <span className="material-icons">keyboard_arrow_down</span>
            </p>
          </div>
        </div>
        {activeTab === 1 && (
          <div className='booking-tab-content'>
            <div className='tab-details-box'>
              <div className='tab-details-head'>Personal Details</div>
              <div className='tab-details-data'>
                <p className='tab-detail-content'>
                  Name : <span>Sanjay Kumar . S </span>
                </p>
                <p className='tab-detail-content'>
                  Mobile number : <span>96542584563</span>
                </p>
                <p className='tab-detail-content'>
                  E-mail ID : <span>Sivakarthikayan.03@gmail.com</span>
                </p>
              </div>

              <p className='tab-detail-content'>
                Address : <span className="material-icons" style={{ color: '#FF0000' }}>location_on</span>
                <span>No3/1, 1street, west mambalam, chennai-33</span>
              </p>
              <p className='tab-detail-content'>Description : </p>
              <span style={{ fontSize: '14px' }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.........
              </span>
            </div>

            <CompleteCard />

            <div className='booking-box' style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
              <p style={{ color: '#000000' }}>Total Amount  ( UPI ID : DF525FD52GD )</p>
              <div className='invoice-box'>
                <p style={{ color: '#B51144' }}>&#8377; 4,000</p>
                <button className='invoice-btn'>
                  <Download /> Invoice Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='tab-box'>
        {/* Booking tab 2 */}
        <div className='booking-tab-nav' onClick={() => toggleTab(2)}>
          <div className='booking-box' style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
            <p>Booking ID : 25SKS555</p>
            <p style={{ display: 'inline-flex', gap: '20px' }}>
              Booking Date : 18 / 11 / 2024
              <span className="material-icons">keyboard_arrow_down</span>
            </p>
          </div>
        </div>
        {activeTab === 2 && (
          <div className='booking-tab-content'>
            <div className='tab-details-box'>
              <div className='tab-details-head'>Personal Details</div>
              <div className='tab-details-data'>
                <p className='tab-detail-content'>
                  Name : <span>Sanjay Kumar . S </span>
                </p>
                <p className='tab-detail-content'>
                  Mobile number : <span>96542584563</span>
                </p>
                <p className='tab-detail-content'>
                  E-mail ID : <span>Sivakarthikayan.03@gmail.com</span>
                </p>
              </div>

              <p className='tab-detail-content'>
                Address : <span className="material-icons" style={{ color: '#FF0000' }}>location_on</span>
                <span>No3/1, 1street, west mambalam, chennai-33</span>
              </p>
              <p className='tab-detail-content'>Description : </p>
              <span style={{ fontSize: '14px' }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.........
              </span>
            </div>

           <CompletedCard/>

            <div className='booking-box' style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
            <div >
            <p style={{ color: '#000000' }}>Total Amount  ( UPI ID : DF525FD52GD )</p>
              <button className='user-complete-btn'>Completed</button>

            </div>
             
              <div className='invoice-box'>
                <p style={{ color: '#B51144' }}>&#8377; 4,000</p>
                <button className='invoice-btn'>
                  <Download /> Invoice Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CompletedBookingCard;

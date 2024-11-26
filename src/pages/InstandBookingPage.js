import Sidebar from '../components/Sidebar';
import UserboardHeader from '../components/UserboardHeader';

import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import InstandBookingCard from '../components/InstandBookingCard';
import   Picklocation from '../assets/images/icons/location.svg';
import React, { useState } from 'react';
function InstandBookingPage() {

  const [activeTab, setActiveTab] = useState(1); // Default active tab is 1

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex); // Set the clicked tab as active
  };

  return (
    <>
      <div className='wrapper'>
        <UserboardHeader/>
          <div className='container'>
            <div className='page-container'>
            <Sidebar/>
            <div className='page-body'>
             <div className='booking-menu-box'>
                <ul className='booking-menu-container'>
                <li className='booking-menu-item  booking-active-menu'><Link to="/instand-booking" className='booking-menu-link'>Instant Booking</Link></li>
                    <li className='booking-menu-item '><Link to="/complete-booking" className='booking-menu-link'>Completed</Link></li>
                    <li className='booking-menu-item'><Link to="/cancel-booking" className='booking-menu-link'>Canceled</Link></li>
                    <li className='booking-menu-item '><Link to="/pd-enquiry" className='booking-menu-link'>P & D Enquiry</Link></li>
                    <li className='booking-menu-item'><Link to="/service-enquiry" className='booking-menu-link'>Service Enquiry</Link></li>

                </ul>
             </div>
              

              <div className='booking-card-box' style={{maxWidth:'100%'}}>

              <div className='tab-box'>            
              <div className='booking-tab-nav' >
              <div className='booking-box' onClick={() => handleTabClick(1)}  style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
                <p>Booking ID : 25SKS555</p>
                <p style={{ display:'inline-flex', gap:'20px' }}>Booking Date : 18 / 11 / 2024  <span class="material-icons">keyboard_arrow_down</span>
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
          <div className='booking-grid-box'>
            <InstandBookingCard />
          </div>
          <div className='booking-box' style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
            <p style={{ color: '#B51144' }}>Total Amount</p>
            <p style={{ color: '#B51144' }}>&#8377; 4,000</p>
          </div>
        </div>
      )}
              {/* booking tab */}
              <div className='booking-tab-nav' style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
              <div className='booking-box' onClick={() => handleTabClick(2)}  style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
                <p>Booking ID : 25SKS555</p>
                <p style={{ display:'inline-flex', gap:'20px' }}>Booking Date : 18 / 11 / 2024  <span class="material-icons">keyboard_arrow_down</span>
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
                   <div className='booking-grid-box'>
                    <InstandBookingCard/>
                    </div>
                   <div className='booking-box' style={{ margin: '0px', maxWidth: '100%', gap: '20px' }}>
                <p style={{color:'#B51144'}}>Total Amount</p>
                <p style={{color:'#B51144'}}>&#8377;
                 4,000</p>
                  </div>
              </div>
                )}
              </div>
              
              </div>

            </div>
            </div>
            </div>
          <Footer/>
        </div>
    </>
  )
}

export default InstandBookingPage

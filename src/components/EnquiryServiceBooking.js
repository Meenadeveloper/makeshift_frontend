import Footer from '../components/Footer';
import UserboardHeader from '../components/UserboardHeader';
import Service_img from '../assets/images/service_list.jpg'
import '../styles/components/pages.css';
import React, { useState } from 'react';
import EnquiryBookingForm from './EnquiryBookingForm';
import PrizelessProductDescription from './PrizelessProductDescription';

function EnquiryServiceBooking() {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
// Function to handle "View Details" button click
const handleViewDetailsClick = () => {
  setIsDescriptionVisible((prev) => !prev); // Toggle visibility
};

  return (
    <>
         <div className='wrapper'>
           
           <UserboardHeader/>
            <div className='page-wrapper'>
              <div className='container'>
              <div className='user-page-two-col-container'>
          <div className='user-page-item '>
          <div className='user-service-card-container'>
          <div class="border-card">

          <table className="user-service-card-header" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px' }}>
  <tbody>
    {/* <tr style={{display:'flex', justifyContent:'space-between', paddingBottom:'10px'}}>
      <td >
        <h2 className="user-service-title">Picker Service</h2>
      </td><td></td>
      <td>
        <span className="user-service-reviews" style={{ fontSize: '10px' }}>(44k reviews)</span>
      </td>
    </tr> */}

    

    <tr className="user-service-card-body" style={{borderBottom:'1.5px dotted #D4D4D4',  display:'flex', alignItems:'center'}}>
      <td className="user-service-info" style={{ display:'flex', flexDirection:'column', gap:'10px', width:'50%'  }}>
      <h2 className="user-service-title" style={{color:'rgba(0, 0, 0, 1)', fontSize:'26px'}}>Home False Ceiling</h2>



      </td>
      <td style={{ display:'flex', flexDirection:'column', gap:'10px' , width:'50%', paddingLeft:'10px' }}>
      <span className="user-service-reviews" style={{ fontSize: '10px' }}>(44k reviews)</span>

      </td>
      <td style={{ }}>
        <div className="user-service-image">
          <div className="user-service-rating">
            <span>★ 4.5</span>
          </div>
          <img src={Service_img} alt="Packer Service Image" />
        </div>
      </td>
    </tr>
    <tr>
    
    </tr>
  </tbody>
</table>

  <div class="user-service-card-footer">
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
    <div className='user-details-link-box slot-book-box' style={{justifyContent:'end'}}>
    <button  class="user-details-link"  onClick={handleViewDetailsClick}>View Details</button>
    {isDescriptionVisible && (
        <PrizelessProductDescription  />
      )}
    </div>
  </div>
    </div>
          </div>

          <div className='user-service-card-container' style={{marginTop:'20px'}}>
          <div class="user-service-card">
            <p className='user-service-note'>( Note: If you extend the working hours, you will be required to pay an additional amount for the extra hours )</p>
          </div>
          </div>
          </div>
           <div className='user-page-item service-booking-form-box'>
    <EnquiryBookingForm/>
           </div>
        
          </div>

              </div>
            </div>

            <Footer/>
        </div>
     
    </>
  )
}

export default EnquiryServiceBooking

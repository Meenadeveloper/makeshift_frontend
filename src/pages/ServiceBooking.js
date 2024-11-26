import Footer from '../components/Footer';
import UserboardHeader from '../components/UserboardHeader';
import Service_img from '../assets/images/service_list.jpg'
import ServiceBookingForm from '../components/ServiceBookingForm';
import '../styles/components/pages.css';
import React, { useState } from 'react';
import SlotNotes from '../components/SlotNotes';
function ServiceBooking() {

  const [showSlotNotes, setShowSlotNotes] = useState(false);

  const handleButtonClick = () => {
    setShowSlotNotes(true);
  };

  return (
    <div>
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
    <tr style={{display:'flex', justifyContent:'space-between', paddingBottom:'10px'}}>
      <td >
        <h2 className="user-service-title">Picker Service</h2>
      </td><td></td>
      <td>
        <span className="user-service-reviews" style={{ fontSize: '10px' }}>(44k reviews)</span>
      </td>
    </tr>

    

    <tr className="user-service-card-body" style={{borderBottom:'1.5px dotted #D4D4D4',  display:'flex', alignItems:'center'}}>
      <td className="user-service-info" style={{ display:'flex', flexDirection:'column', gap:'10px', width:'50%'  }}>
        <p style={{paddingBottom:'5px' , textWrap:'nowrap'}}>Working per day:</p>
        <p style={{paddingBottom:'5px' , textWrap:'nowrap'}}>Working per day:</p>


      </td>
      <td style={{ display:'flex', flexDirection:'column', gap:'10px' , width:'50%', paddingLeft:'10px' }}>
        <span className="user-price" >₹ 900</span>
        <span className="user-price">₹ 900</span>

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
    <div className='user-details-link-box slot-book-box'>
    <a href="#" class="user-details-link">View Details</a>
    <button className='userReport-submitButton slot-book-btn' onClick={handleButtonClick}>Select Slot</button>
    
    {showSlotNotes && <SlotNotes onClose={() => setShowSlotNotes(false)} />}
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
       <ServiceBookingForm/>
           </div>
        
          </div>

              </div>
            </div>

            <Footer/>
        </div>
     
    </div>
  )
}

export default ServiceBooking

import React from 'react'
import TickCircle from '../assets/images/mdi_tick-circle-outline.svg';
function EnquirySuccessPopup({onClick}) {
  return (
    <>
    <div>
       <div className="feedback-modal active" onClick={onClick}>
     
  <div class="success-popup-content"  >
    <div class="success-popup-header">
      <div class="success-checkmark"><img src={TickCircle} alt=""/></div>
    </div>
    <h2>Great!</h2>
    <p>Your Booking Was Successfully Sent.</p>
    <button class="success-close-btn"><i class="material-icons close-icon">close</i> <p>close</p></button>
  </div>


        </div>
    </div>
      
    </>
  )
}

export default EnquirySuccessPopup

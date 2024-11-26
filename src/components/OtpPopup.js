import React from 'react'
import '../styles/components/popup.css';
import NoteCross from '../assets/images/noteclose.svg'
function OtpPopup() {
  return (
    <div>
        <div className="note-modal active" id="notification-modal">
          <div className="note-modal-content">
            {/* Header Section with Logo and Close Button */}
            <div className="note-modal-header">
              <h2 >Note</h2>
            </div>

            {/* Body Section with Message */}
            <div className="note-modal-body">
              <div className="note-message">
                <span className="icon"><img src={NoteCross} alt=""/></span>
                <p>
                Hi <br/>
                Here is the service approval code to verify your conformation Service 
                </p>
              </div>

            </div>
            <div className="otp-modal-footer">
            <span className='otp-numver'>463517</span>

            </div>

           
          </div>
        </div>
    </div>
  )
}

export default OtpPopup

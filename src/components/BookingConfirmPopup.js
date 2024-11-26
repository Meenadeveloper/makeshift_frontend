import React from 'react'
import '../styles/components/popup.css';
import NoteCross from '../assets/images/noteclose.svg'

function BookingConfirmPopup() {
  return (
    <div>
       <div className="note-modal active" id="bookingconfirm-modal">
          <div className="note-modal-content">
            {/* Header Section with Logo and Close Button */}
            <div className="note-modal-header">
              <h2 >Are You Sure ?</h2>
            </div>

            {/* Body Section with Message */}
            <div className="note-modal-body">
              <div className="note-message">
                <span className="icon"><img src={NoteCross} alt=""/></span>
                <p>
                Are you sure cancel the booking service once deleted you can apply again the service
                </p>
              </div>
            </div>

            {/* Footer Section with Action Buttons */}
            <div className="note-modal-footer">
            <button >Block</button>
              <button className="allow-btn" >
              Allow
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BookingConfirmPopup

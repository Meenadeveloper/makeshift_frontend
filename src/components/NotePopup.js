import React, { useState } from 'react';
import '../styles/components/popup.css';
import NoteCross from '../assets/images/noteclose.svg'
function NotePopup() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleApprove = () => {
    alert('Service Approved');
    setIsModalOpen(false);
  };

  const handleDecline = () => {
    alert('Service Declined');
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="note-modal active" id="notification-modal"  onClick={closeModal}>
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
                  The employee has completed the service. Once approved, this
                  notification will confirm that the service is complete.
                </p>
              </div>
            </div>

            {/* Footer Section with Action Buttons */}
            <div className="note-modal-footer">
            <button onClick={handleApprove}>Approve</button>
              <button className="note-decline" onClick={handleDecline}>
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NotePopup;

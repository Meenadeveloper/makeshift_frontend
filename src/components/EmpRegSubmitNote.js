import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/components/popup.css';
import NoteCross from '../assets/images/noteclose.svg'
function EmpRegSubmitNote() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleApprove = () => {
    alert('Service Approved');
    setIsModalOpen(false);
    navigate('/employee-login');
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
                Your account has not been verified by the admin yet. Please wait for the approval message.
                </p>
              </div>
            </div>

            {/* Footer Section with Action Buttons */}
            <div className="note-modal-footer">
            <button onClick={handleApprove}>Allow</button>
              <button className="note-decline" onClick={handleDecline}>
              Block
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EmpRegSubmitNote

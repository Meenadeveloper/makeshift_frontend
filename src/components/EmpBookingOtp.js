import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import BookOtp from '../assets/images/emp_otp_img.png';

function EmpBookingOtp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Manage visibility of the popup
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e, index) => {
    const value = e.target.value;

    // If input is not a number or is more than 1 character, return
    if (isNaN(value) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus the next input when the user types
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate OTP
    if (otp.some((digit) => digit === "")) {
      alert("Please enter all OTP digits.");
      return;
    }

    // If OTP is valid, alert and navigate to login page
    alert(`Entered OTP: ${otp.join('')}`);
    setIsPopupVisible(false); // Hide the popup
    navigate('/employee-booking-list'); // Navigate to the next page after verification
  };

  const handleOverlayClick = () => {
    setIsPopupVisible(false); // Hide the popup if the overlay is clicked
  };

  return (
    <>
      {isPopupVisible && (
        <div className="emp-otp-popup-overlay" onClick={handleOverlayClick}>
          <div className="emp-otp-popup-content" onClick={(e) => e.stopPropagation()}> {/* Prevent click on content from closing */}
            <img src={BookOtp} alt="" style={{ width: '100px', height: '100px' }} />
            <h2>
              <span style={{ color: '#7059DE', fontWeight: '800' }}>Enter employee OTP</span>
            </h2>
            <p className='forget-subtxt' style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(84, 82, 82, 1)' }}>
              Enter the booking service employee OTP here <br />
            </p>
            <form onSubmit={handleSubmit} className="otp-form">
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    type="text"
                    maxLength="1"
                    key={index}
                    id={`otp-input-${index}`}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onFocus={(e) => e.target.select()}
                    autoFocus={index === 0}
                    className={digit === "" ? "" : "not-empty"}  // Apply "empty" class if input is empty
                  />
                ))}
              </div>
              <p className='sign-link'>
                Didn’t receive the OTP? <a href="#" className='forget-link'>Resend</a>
              </p>
              <div className='field-button-container'>
                <button type="submit" className='login-btn'>Verify</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EmpBookingOtp;

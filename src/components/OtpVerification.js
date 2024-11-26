import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/components/form.css';
import Otp_img from '../assets/images/otp_img.jpg';

function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
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
    navigate('/login'); // Navigate to login page after verification
  };

  return (
    <>
      <div className='login-container'>
        <div className="login-card">
          {/* Left Side Image */}
          <div className="login-card-image" style={{ background: '#EDCBFE' }}>
            <img src={Otp_img} alt="OTP Placeholder" />
          </div>

          {/* Right Side Form */}
          <div className="login-card-content">
            <h2>OTP <span style={{ color: '#7059DE' }}>Verification</span> </h2>
            <p className='forget-subtxt'>
              Enter the code from the SMS we sent to <br />
              <span style={{ color: '#000000', fontWeight: '600' }}>95452 23645</span>
            </p>
            <form onSubmit={handleSubmit} className="otp-form">
              <h2 style={{ fontSize: '12px', color: '#7059DE' }}>02:32</h2>
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
      </div>
    </>
  );
}

export default OtpVerification;

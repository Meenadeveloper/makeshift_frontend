import '../styles/components/form.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Sign_img from '../assets/images/signin_img.png';

function Signin() {
  const [formData, setFormData] = useState({
    user_name: '',
    mobile: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    user_name: '',
    mobile: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset the specific error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      // Handle form submission logic here (e.g., save data or make API call)
      console.log('Form Submitted:', formData);

      // After successful validation, navigate to OTP verification page
      navigate('/otp-verification'); // Navigate to OTP verification page
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    // Validate user name (not empty)
    if (formData.user_name.trim() === '') {
      newErrors.user_name = 'Please enter your name.';
      valid = false;
    }

    // Validate mobile number (only allows numbers and 10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
      valid = false;
    }

    // Validate password length (minimum 6 characters)
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle the password visibility state
  };

  return (
    <div className='login-container'>
      <div className="login-card">
        {/* Left Side Image */}
        <div className="login-card-image">
          <img src={Sign_img} alt="Placeholder" />
        </div>

        {/* Right Side Form */}
        <div className="login-card-content">
          <h2>Create New Account</h2>
          <form onSubmit={handleSubmit} className='login-form'>
            {/* User Name */}
            <div className='field-container'>
              <label htmlFor="user_name">User name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
              {/* Display error for user name if exists */}
              {errors.user_name && (
                <p className="error-message">{errors.user_name}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div className='field-container'>
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="text"
                name="mobile"
                placeholder="+91 95*****132"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {/* Display error for mobile number if exists */}
              {errors.mobile && (
                <p className="error-message">{errors.mobile}</p>
              )}
            </div>

            {/* Password */}
            <div className='field-container'>
              <label htmlFor="password">Password</label>
              <div className="password-field-wrapper">
                <input
                  type={showPassword ? "text" : "password"} // Conditionally set the input type
                  name="password"
                  placeholder="************"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {/* Password visibility toggle icon */}
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  <i className={`material-icons ${showPassword ? "visible" : "invisible"}`}>
                    {showPassword ? "visibility_off" : "visibility"}
                  </i>
                </span>
              </div>
              {/* Display error for password if exists */}
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className='field-button-container'>
              <button type="submit" className='login-btn'>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;

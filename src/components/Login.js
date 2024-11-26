import '../styles/components/form.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Login_img from '../assets/images/login_img.png';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    mobile: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const navigate = useNavigate(); // Initialize useNavigate

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
      // Handle form submission logic here
      console.log('Form Submitted:', formData);

      // Redirect to the user dashboard after successful validation
      navigate('/user-home'); // Change to your dashboard route
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

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
          <h2>Hello ,<br/>Welcome Back</h2>
          <img src={Login_img} alt="Placeholder" />
        </div>

        {/* Right Side Form */}
        <div className="login-card-content">
          <h2>Login Your Account</h2>
          <form onSubmit={handleSubmit} className='login-form'>
            <div className='field-container'>
              <label htmlFor="mobile">Mobile Number:</label>
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

            <div className='field-container'>
              <label htmlFor="password">Password:</label>
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
                  {/* Use Material Icon for visibility toggle */}
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

            <div className='field-link-container'>
              <Link to='/forgot' className='forget-link'>Forget Password ?</Link>
            </div>
            
            <div className='field-button-container'>
              <button type="submit" className='login-btn' style={{marginTop:'0px'}}>Login</button>
            </div>
          </form>

          <p className='sign-link'>
            Don't have an account? <Link to="/sign-in" className='forget-link'>Sign Up</Link>
          </p>

          <p className='sign-link' style={{ marginTop: '0px' }}>
            or
          </p>

          <p className='sign-link'>
            Are you Become Employee ?<Link to="/employee-login" className='forget-link'> Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

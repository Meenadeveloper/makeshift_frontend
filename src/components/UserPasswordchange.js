import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/form.css';
import Password_img from '../assets/images/icons/forgot-password-icon-png 1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserPasswordchange() {
    const [formData, setFormData] = useState({
        new_password: '',
        confirm_password: '',
      });
      const [errors, setErrors] = useState({
        new_password: '',
        confirm_password: '',
      });
      const [showNewPassword, setShowNewPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Reset the specific error message when user starts typing
        setErrors({ ...errors, [name]: '' });
      };
    
      const validateForm = () => {
        const newErrors = {};
        let valid = true;
    
        // Validate password length
        if (formData.new_password.length < 5) {
          newErrors.new_password = 'Password must be at least 5 characters long.';
          valid = false;
        }
    
        // Validate confirm password matching
        if (formData.new_password !== formData.confirm_password) {
          newErrors.confirm_password = 'Passwords do not match.';
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // If the form is valid, proceed with verification
          console.log('Form Submitted:', formData);
          toast.success('Password successfully verified!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
    
          // Redirect to login after success
          setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
        }
      };
    
      const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
      };
    
      const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };
    
    

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          {/* Left Side Image */}
          <div className="login-card-image">
            <img src={Password_img} alt="Placeholder" />
          </div>

          {/* Right Side Form */}
          <div className="login-card-content">
            <h2>Change Password</h2>
            {/* <p className="forget-subtxt">Your new password must be different from previous user passwords</p> */}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="field-container password-field-wrapper">
                <label htmlFor="new_password">New Password</label>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  name="new_password"
                  placeholder="************"
                  value={formData.new_password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="material-icons password-toggle-icon"
                  onClick={toggleNewPasswordVisibility}
                >
                  {showNewPassword ? 'visibility_off' : 'visibility'}
                </span>
               
              </div> {errors.new_password && (
                  <p className="error-message">{errors.new_password}</p>
                )}

              <div className="field-container password-field-wrapper" style={{paddingTop:'15px'}}>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirm_password"
                  placeholder="************"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="material-icons password-toggle-icon"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? 'visibility_off' : 'visibility'}
                </span>
               
              </div>
              {errors.confirm_password && (
                  <p className="error-message">{errors.confirm_password}</p>
                )}

              <div className="field-button-container" style={{marginTop:'20px'}}>
                <button type="submit" className="login-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast container for success message */}
      <ToastContainer />
    </>
  )
}

export default UserPasswordchange

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

function ServiceBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    description: ''
  });

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    description: '',
    checkbox: ''
  });

  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setErrors({ ...errors, checkbox: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    if (!formData.mobile || formData.mobile.length !== 10) {
      newErrors.mobile = 'Mobile number should be 10 digits';
      valid = false;
    }
    if (!formData.address) {
      newErrors.address = 'Address is required';
      valid = false;
    }
    if (!formData.description) {
      newErrors.description = 'Description is required';
      valid = false;
    }

    if (!isChecked) {
      newErrors.checkbox = 'You must agree to the terms and conditions';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/picker-service-booking');
    }
  };

  return (
    <div className="userReport-container">
      <h2 style={{ color:'#0B0A0A', fontSize:'18px', fontWeight:'700',paddingBottom:'30px', textAlign:'center' }}>Service Booking</h2>
      <form className="userReport-form" onSubmit={handleSubmit}>
        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-label">Enter name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="userReport-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="userReport-field">
            <label className="userReport-label">Enter e-mail id</label>
            <input
              type="email"
              placeholder="example.@gmail.com"
              className="userReport-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
        </div>

        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-label">Enter mobile number</label>
            <input
              type="tel"
              placeholder="+91 95*****862"
              className="userReport-input"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className="error-message">{errors.mobile}</p>}
          </div>

          <div className="userReport-field">
            <label className="userReport-label">Enter address</label>
            <input
              type="text"
              placeholder="Enter address details"
              className="userReport-input"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error-message">{errors.address}</p>}
          </div>
        </div>

        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-label">Description of Service Needed</label>
            <textarea
              placeholder="Description of Service Needed"
              className="userReport-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && <p className="error-message">{errors.description}</p>}
          </div>
        </div>

        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-checkboxLabel">
              <input
                type="checkbox"
                className="userReport-checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Once submit your service admin will allocated the service man for your service
            </label>
            {errors.checkbox && <p className="error-message">{errors.checkbox}</p>}
          </div>
        </div>

        <div className="form-btn-box">
          <button
            type="submit"
            className="userReport-submitButton"
            disabled={!isChecked}
          >
            Book Services
          </button>
        </div>
      </form>
    </div>
  );
}

export default ServiceBookingForm;

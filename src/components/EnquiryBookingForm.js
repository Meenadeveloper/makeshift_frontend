import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import EnquirySuccessPopup from './EnquirySuccessPopup';

function EnquiryBookingForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      setIsModalVisible(true); // Show the success popup when form is valid
      // Optionally navigate to another page after form submission
      // navigate('/picker-service-booking');
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Hide the success popup
  };

  return (
    <>
      <div className="userReport-container">
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
                Once submit your service admin will allocate the service man for your service
              </label>
              {errors.checkbox && <p className="error-message">{errors.checkbox}</p>}
            </div>
          </div>

          <div className="form-btn-box">
            <button
              type="submit"
              className="userReport-enquiryButton"
              disabled={!isChecked}
            >
              Enquiry Now
            </button>
          </div>
        </form>
      </div>

      {/* Conditionally render the SuccessPopup component */}
      {isModalVisible && <EnquirySuccessPopup onClick={handleCloseModal} />}
    </>
  );
}

export default EnquiryBookingForm;

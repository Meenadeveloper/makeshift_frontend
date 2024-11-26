import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeHeader from './EmployeeHeader';

function ServiceUpload() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    service: '',
    category: '',
    subCategory: '',
    employeeType: '',
    description: '',
    image: '',
    video: '',
    checkbox: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0] ? e.target.files[0].name : '',
    });
  };

  const handleVideoChange = (e) => {
    setFormData({
      ...formData,
      video: e.target.files[0] ? e.target.files[0].name : '',
    });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.mobile) {
      validationErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      validationErrors.mobile = 'Invalid mobile number';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.checkbox) validationErrors.checkbox = 'You must agree to the terms';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Navigate to /employee-home after validation is successful
      navigate('/employee-home');
    }
  };

  return (
    <>

<div className='wrapper' style={{height:'100%'}}>
  <EmployeeHeader/>

  <div className='service-upload-container'>
        <div className='service-upload-box'>
          <h2 className='service-upload-head'>Service Uploads</h2>
          <form onSubmit={handleSubmit}>
            <div className='service-upload-grid-box'>
              <div className='service-upload-row'>
                <div className='service-upload-field'>
                  <label>User name</label>
                  <input
                    type='text'
                    name='name'
                    className='service-upload-input'
                    placeholder='Enter name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className='error'>{errors.name}</span>}
                </div>
                <div className='service-upload-field'>
                  <label>Mobile number</label>
                  <input
                    type='text'
                    name='mobile'
                    className='service-upload-input'
                    placeholder='+91 95*****132'
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {errors.mobile && <span className='error'>{errors.mobile}</span>}
                </div>
                <div className='service-upload-field'>
                  <label>Email ID</label>
                  <input
                    type='email'
                    name='email'
                    className='service-upload-input'
                    placeholder='example@gmail.com'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className='error'>{errors.email}</span>}
                </div>
              </div>
              <div className='service-upload-row'>
                <div className='service-upload-field'>
                  <label>Address</label>
                  <input
                    type='text'
                    name='address'
                    className='service-upload-input'
                    placeholder='Enter address'
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className='service-upload-field'>
                  <label>Select service</label>
                  <select
                    name='service'
                    className='service-upload-select'
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value=''>Select service</option>
                  </select>
                </div>
                <div className='service-upload-field'>
                  <label>Select Categories</label>
                  <select
                    name='category'
                    className='service-upload-select'
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value=''>Select categories</option>
                  </select>
                </div>
              </div>
              <div className='service-upload-row'>
                <div className='service-upload-field'>
                  <label>Select Sub - categories</label>
                  <select
                    name='subCategory'
                    className='service-upload-select'
                    value={formData.subCategory}
                    onChange={handleChange}
                  >
                    <option value=''>Select sub - categories</option>
                      <option value=''>Select sub - categories</option>
                  </select>
                </div>

                <div className='service-upload-field'>
                  <label>Select Employee type</label>
                  <select
                    name='employeeType'
                    className='service-upload-select'
                    value={formData.employeeType}
                    onChange={handleChange}
                  >
                    <option value=''>Select employee type</option>
                  </select>
                </div>
                <div className='service-upload-field'>
                  <label>Description</label>
                  <input
                    type='text'
                    name='description'
                    className='service-upload-input'
                    placeholder='Enter job details'
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='service-upload-row'>
                <div className='service-upload-field'>
                  <label>Upload Image</label>
                  <div className='service-upload-file-wrapper' onClick={() => document.getElementById('upload-image').click()}>
                    <i className="material-icons service-upload-icon">image</i>
                    <input
                      type='file'
                      id='upload-image'
                      className='service-upload-file'
                      onChange={handleImageChange}
                    />
                    <span className='service-upload-file-name'>{formData.image || 'Choose an image'}</span>
                  </div>
                </div>
                <div className='service-upload-field'>
                  <label>Upload Video</label>
                  <div className='service-upload-file-wrapper' onClick={() => document.getElementById('upload-video').click()}>
                    <i className="material-icons service-upload-icon">video_library</i>
                    <input
                      type='file'
                      id='upload-video'
                      className='service-upload-file'
                      onChange={handleVideoChange}
                    />
                    <span className='service-upload-file-name'>{formData.video || 'Choose a video'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='service-upload-field service-upload-checkbox-wrapper'>
              <input
                type='checkbox'
                name='checkbox'
                className='emp-custom-checkbox'
                checked={formData.checkbox}
                onChange={handleChange}
              />
              <label>Once verified by admin the service will upload on app</label>
             
            </div>
            {errors.checkbox && <span className='error'>{errors.checkbox}</span>}
            <div className='service-submit-box'>
              <button type='submit' className='service-upload-button'>Submit</button>
            </div>
          </form>
        </div>
      </div>
</div>
     
    </>
  );
}

export default ServiceUpload;

import React, { useState } from 'react';
import EmpRegImg from '../assets/images/empregisterimg.png';
import EmpRegSubmitNote from './EmpRegSubmitNote'; // Assuming this is your popup component

function EmployeeRegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    address: '',
    employeeType: '',
    experience: '',
    description: '',
    bankName: '',
    accountNumber: '',
    ifcsCode: '',
    branchName: '',
    isChecked: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Form validation function
  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name) newErrors.name = 'Name is required';

    // Mobile number validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    else if (!mobileRegex.test(formData.mobile)) newErrors.mobile = 'Invalid mobile number';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';

    // Password validation
    if (!formData.password) newErrors.password = 'Password is required';

    // Other field validations
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.employeeType) newErrors.employeeType = 'Employee type is required';
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (!formData.description) newErrors.description = 'Job details are required';
    if (!formData.bankName) newErrors.bankName = 'Bank name is required';
    if (!formData.accountNumber) newErrors.accountNumber = 'Account number is required';
    if (!formData.ifcsCode) newErrors.ifcsCode = 'IFCS Code is required';
    if (!formData.branchName) newErrors.branchName = 'Branch name is required';

    // Checkbox validation
    if (!formData.isChecked) newErrors.isChecked = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setShowPopup(true); // Show popup on successful validation
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <>
      <div className="emp-register-container">
        <div className="emp-register-box">
          <div className="emp-reg-grid-box">
            <div className="emp-reg-grid-item emp-reg-grid-item-img">
              <img src={EmpRegImg} alt="Employee" className="emp-sticky-img" />
            </div>
            <div className="emp-reg-grid-item emp-reg-grid-item-form">
              <div className="emp-reg-form-box">
                <h2 className="emp-reg-form-head">Register Now</h2>
                <form className="emp-reg-form" onSubmit={handleSubmit}>
                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          className="emp-input-field"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.name}</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Mobile number</label>
                        <input
                          type="text"
                          name="mobile"
                          placeholder="+91 95*****132"
                          className="emp-input-field"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.mobile}</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          className="emp-input-field"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.email}</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          className="emp-input-field"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.password}</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Date of Birth</label>
                        <input
                          type="date"
                          name="dob"
                          className="emp-input-field"
                          value={formData.dob}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.dob}</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Gender</label>
                        <select
                          name="gender"
                          className="emp-input-field emp-select-field"
                          value={formData.gender}
                          onChange={handleChange}
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <p className="emp-error">{errors.gender}</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Address</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Enter address"
                          className="emp-input-field"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.address}</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Select Employee Type</label>
                        <select
                          name="employeeType"
                          className="emp-input-field emp-select-field"
                          value={formData.employeeType}
                          onChange={handleChange}
                        >
                          <option value="">Select employee type</option>
                          <option value="permanent">Permanent</option>
                          <option value="contract">Contract</option>
                        </select>
                        <p className="emp-error">{errors.employeeType}</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">No of Experience</label>
                        <input
                          type="text"
                          name="experience"
                          placeholder="Enter no of experience"
                          className="emp-input-field"
                          value={formData.experience}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.experience}</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Description</label>
                        <input
                          type="text"
                          name="description"
                          placeholder="Enter job details"
                          className="emp-input-field"
                          value={formData.description}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Bank Name</label>
                        <input
                          type="text"
                          name="bankName"
                          placeholder="Enter bank name"
                          className="emp-input-field"
                          value={formData.bankName}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.bankName}</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Account Number</label>
                        <input
                          type="text"
                          name="accountNumber"
                          placeholder="Enter account number"
                          className="emp-input-field"
                          value={formData.accountNumber}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.accountNumber}</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">IFCS Code</label>
                        <input
                          type="text"
                          name="ifcsCode"
                          placeholder="Enter IFCS Code"
                          className="emp-input-field"
                          value={formData.ifcsCode}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.ifcsCode}</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Branch Name</label>
                        <input
                          type="text"
                          name="branchName"
                          placeholder="Enter branch name"
                          className="emp-input-field"
                          value={formData.branchName}
                          onChange={handleChange}
                        />
                        <p className="emp-error">{errors.branchName}</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-form-control">
                    <input
                      type="checkbox"
                      name="isChecked"
                      checked={formData.isChecked}
                      onChange={handleChange}
                    />
                   <div className="emp-link-box">
                    <label className="emp-checkbox-label">
                    <input type="checkbox" 
                    name="isChecked"
                    checked={formData.isChecked}
                    onChange={handleChange}
                    className="emp-custom-checkbox" />
                     <p>Once verified by admin only you can access this employee login</p>
                    </label>
                  </div>
                    <p className="emp-error">{errors.isChecked}</p>
                  </div>

                  <div className="emp-submit-box">
                    <button type="submit" className="emp-sign-up-btn">Sign up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && <EmpRegSubmitNote />} {/* This is the popup on successful submission */}
    </>
  );
}

export default EmployeeRegisterForm;

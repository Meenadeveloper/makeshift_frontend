import PDDelivery from '../assets/images/deliver_banner.png';
import { useState, useEffect, useRef } from 'react';
function PDDeliveryPopup() {
  const [formData, setFormData] = useState({
    fromaddress: '',
    toaddress: '',
    dob: '',
    mobile: '',
    description: '',
    video: null,
    image: null,
  });

  const [isFormVisible, setIsFormVisible] = useState(true); // State to handle form visibility
  const formRef = useRef(null); // Reference to the form element

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // After submitting, hide the form
    setIsFormVisible(false);
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

   // Function to close the popup when clicking outside the form
   const closePopup = (e) => {
    // If click is outside the form, close the popup
    if (formRef.current && !formRef.current.contains(e.target)) {
      setIsFormVisible(false);
    }
  };

  // Add event listener for mousedown when the component mounts
  // useEffect(() => {
  //   document.addEventListener('mousedown', closePopup);

  //   return () => {
  //     document.removeEventListener('mousedown', closePopup);
  //   };
  // }, []);


  return (
    <>
      {isFormVisible && (
        <div className="pddelivery-overlay" >
          <div
            className="emp-register-container pddelivery-box"
            style={{ padding: '0px'  }}
           
          >
            <div className="emp-register-box" style={{position:'relative'}}>
            <button className='pdpopup-close' onClick={closePopup}> x</button>
              <div className="emp-reg-grid-box " ref={formRef}  >
                <div
                  className="emp-reg-grid-item emp-reg-grid-item-img"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <img src={PDDelivery} alt="Employee" className="emp-sticky-img" />
                </div>
                <div className="emp-reg-grid-item emp-reg-grid-item-form">
                  <div className="emp-reg-form-box">
                    <h2 className="emp-reg-form-head">Talk P&D</h2>
                    <form className="emp-reg-form" onSubmit={handleSubmit} encType="multipart/form-data">
                      <div className="emp-row">
                        <div className="emp-col">
                          <div className="emp-form-control">
                            <label className="emp-label">From Address</label>
                            <input
                              type="text"
                              name="fromaddress"
                              placeholder="Enter full Address"
                              className="emp-input-field"
                              value={formData.fromaddress}
                              onChange={handleChange}
                            />
                            <p className="emp-error"></p>
                          </div>
                        </div>

                        <div className="emp-col">
                          <div className="emp-form-control">
                            <label className="emp-label">To Address</label>
                            <input
                              type="text"
                              name="toaddress"
                              placeholder="Enter full Address"
                              className="emp-input-field"
                              value={formData.toaddress}
                              onChange={handleChange}
                            />
                            <p className="emp-error"></p>
                          </div>
                        </div>
                      </div>

                      <div className="emp-row">
                        <div className="emp-col">
                          <div className="emp-form-control">
                            <label className="emp-label">Select Date</label>
                            <input
                              type="date"
                              name="dob"
                              className="emp-input-field"
                              value={formData.dob}
                              onChange={handleChange}
                            />
                            <p className="emp-error"></p>
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
                            <p className="emp-error"></p>
                          </div>
                        </div>
                      </div>

                      <div className="emp-col" style={{ width: '100%' }}>
                        <div className="emp-form-control">
                          <label className="emp-label">Describe about Product</label>
                          <textarea
                            name="description"
                            className="emp-input-field"
                            placeholder="Describe the product here..."
                            rows="4"
                            style={{ maxWidth:'100% ',width: '100%', height: '100%' }}
                            value={formData.description}
                            onChange={handleChange}
                          ></textarea>
                          <p className="emp-error"></p>
                        </div>
                      </div>

                      <div className="emp-row">
                        <div className="emp-col">
                          <div className="service-upload-field">
                            <label>Upload Video</label>
                            <div
                              className="service-upload-file-wrapper"
                              onClick={() => document.getElementById('upload-video').click()}
                            >
                              <i className="material-icons service-upload-icon">video_library</i>
                              <input
                                type="file"
                                name="video"
                                id="upload-video"
                                className="service-upload-file"
                                accept="video/*"
                                onChange={handleVideoChange}
                              />
                              <span className="service-upload-file-name">{formData.video || 'Upload video'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="emp-col">
                          <div className="service-upload-field">
                            <label>Upload Image</label>
                            <div
                              className="service-upload-file-wrapper"
                              onClick={() => document.getElementById('upload-image').click()}
                            >
                              <i className="material-icons service-upload-icon">image</i>
                              <input
                                type="file"
                                name="image"
                                id="upload-image"
                                className="service-upload-file"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                              <span className="service-upload-file-name">{formData.image || 'Upload image'}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="emp-submit-box">
                        <button type="submit" className="emp-sign-up-btn">
                          Enquiry Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PDDeliveryPopup;

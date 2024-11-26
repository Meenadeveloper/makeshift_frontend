import Service_img from '../assets/images/service_list.jpg'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ServiceListProductDescription from './ServiceListProductDescription';
import ServiceListPrizelessDescription from './ServiceListPrizelessDescription';
function ServiceCard() {

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleShowDescription = () => {
    setIsDescriptionVisible(true);
  };

  const handleCloseDescription = () => {
    setIsDescriptionVisible(false);
  };



  // enquiry product description

  const [isEnquiryDescriptionVisible, setEnquiryIsDescriptionVisible] = useState(false);

  const handleShowEnquiryDescription = () => {
    setEnquiryIsDescriptionVisible(true);
  };

  const handleCloseEnquiryDescription = () => {
    setEnquiryIsDescriptionVisible(false);
  };




  return (
    <div>
      <div className='user-service-card-container'>
     
  <div class=" service-card">
 
 <div className='service-card-header'>
  <div className='service-card-left'>
  <h2 class="user-service-title">Packer Service    <span class="user-service-reviews">(44k reviews)</span></h2>
  <div class="user-service-info">
      <p>Working per day:   <span class="user-price">₹ 900</span></p>
      <p>Working per Hour:  <span class="user-price">₹ 200</span></p>
    </div>
  </div>
  <div className='service-card-right'>
  <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-add-btn">Add</button>
    </div>
  </div>
  </div>    
  <div className='service-card-content'>
  <div class="user-service-card-footer">
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
    <div className='user-details-link-box'>
    <button class="user-details-link"  onClick={handleShowDescription}>View Details</button>


{/* Conditionally Render ServiceListProductDescription */}
{isDescriptionVisible && (
        <ServiceListProductDescription onClose={handleCloseDescription} />
      )}
    </div>
  </div>
 </div>  
 
  </div>
  <div class=" service-card">
 
 <div className='service-card-header'>
  <div className='service-card-left'>
  <h2 class="user-service-title">Packer Service    <span class="user-service-reviews">(44k reviews)</span></h2>
  <div class="user-service-info">
      <p>Working per day:   <span class="user-price">₹ 900</span></p>
      <p>Working per Hour:  <span class="user-price">₹ 200</span></p>
    </div>
  </div>
  <div className='service-card-right'>
  <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-add-btn">Add</button>
    </div>
  </div>
  </div>    
  <div className='service-card-content'>
  <div class="user-service-card-footer">
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
    <div className='user-details-link-box'>
    <button class="user-details-link"  onClick={handleShowDescription}>View Details</button>


{/* Conditionally Render ServiceListProductDescription */}
{isDescriptionVisible && (
        <ServiceListProductDescription onClose={handleCloseDescription} />
      )}
    </div>
  </div>
 </div>  
 
  </div>
  

  <div className=" service-card enquiry-service-card">
 
 <div className='service-card-header'>
  <div className='service-card-left'>
  <h2 className="user-service-title">Home False Ceiling   <span class="user-service-reviews">(44k reviews)</span></h2>
  <div className="user-service-info" style={{marginBottom:'30px'}}>
      <Link to="/enquiry-service-booking" className="enquiry-service-btn" >Enquiry Now</Link>
    </div>
  </div>
  <div className='service-card-right'>
  <div className="user-service-image">
    <div className="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button className="user-add-btn">Add</button>
    </div>
  </div>
  </div>    
  <div className='service-card-content'>
  <div className="user-service-card-footer">
    <ul className="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
    <div className='user-details-link-box'>
    <button className="user-details-link"   onClick={handleShowEnquiryDescription}>View Details</button>
    {/* Conditionally Render ServiceListProductDescription */}
{isEnquiryDescriptionVisible && (
        <ServiceListPrizelessDescription handleClose={handleCloseEnquiryDescription} />
      )}
    
    </div>
  </div>
 </div>  
 
  </div>

  <div class=" service-card">
 
 <div className='service-card-header'>
  <div className='service-card-left'>
  <h2 class="user-service-title">Packer Service    <span class="user-service-reviews">(44k reviews)</span></h2>
  <div class="user-service-info">
      <p>Working per day:   <span class="user-price">₹ 900</span></p>
      <p>Working per Hour:  <span class="user-price">₹ 200</span></p>
    </div>
  </div>
  <div className='service-card-right'>
  <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-add-btn">Add</button>
    </div>
  </div>
  </div>    
  <div className='service-card-content'>
  <div class="user-service-card-footer">
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
    <div className='user-details-link-box'>
    <button class="user-details-link"  onClick={handleShowDescription}>View Details</button>


{/* Conditionally Render ServiceListProductDescription */}
{isDescriptionVisible && (
        <ServiceListProductDescription onClose={handleCloseDescription} />
      )}
    </div>
  </div>
 </div>  
 
  </div>

  <div class=" service-card">
 
 <div className='service-card-header'>
  <div className='service-card-left'>
  <h2 class="user-service-title">Packer Service    <span class="user-service-reviews">(44k reviews)</span></h2>
  <div class="user-service-info">
      <p>Working per day:   <span class="user-price">₹ 900</span></p>
      <p>Working per Hour:  <span class="user-price">₹ 200</span></p>
    </div>
  </div>
  <div className='service-card-right'>
  <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-add-btn">Add</button>
    </div>
  </div>
  </div>    
  <div className='service-card-content'>
  <div class="user-service-card-footer">
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
    <div className='user-details-link-box'>
    <button class="user-details-link"  onClick={handleShowDescription}>View Details</button>


{/* Conditionally Render ServiceListProductDescription */}
{isDescriptionVisible && (
        <ServiceListProductDescription onClose={handleCloseDescription} />
      )}
    </div>
  </div>
 </div>  
 
  </div>

  <div class=" service-card">
 
 <div className='service-card-header'>
  <div className='service-card-left'>
  <h2 class="user-service-title">Packer Service    <span class="user-service-reviews">(44k reviews)</span></h2>
  <div class="user-service-info">
      <p>Working per day:   <span class="user-price">₹ 900</span></p>
      <p>Working per Hour:  <span class="user-price">₹ 200</span></p>
    </div>
  </div>
  <div className='service-card-right'>
  <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-add-btn">Add</button>
    </div>
  </div>
  </div>    
  <div className='service-card-content'>
  <div class="user-service-card-footer">
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
    <div className='user-details-link-box'>
    <button class="user-details-link"  onClick={handleShowDescription}>View Details</button>


{/* Conditionally Render ServiceListProductDescription */}
{isDescriptionVisible && (
        <ServiceListProductDescription onClose={handleCloseDescription} />
      )}
    </div>
  </div>
 </div>  
 
  </div>
  



    
      
      </div>
    </div>
  )
}

export default ServiceCard

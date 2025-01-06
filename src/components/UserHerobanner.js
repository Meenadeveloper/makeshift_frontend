import UserboardHeader from './UserboardHeader';
import React, { useState, useEffect } from 'react';

function UserHerobanner() {
  const [isActive, setIsActive] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-dropdown-menu') && !e.target.closest('.user-filter-btn')) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

   // State to manage which dropdown is open
   const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState(null);

   // Function to toggle the dropdown
   const toggleSubDropdown = (index) => {
    setOpenSubDropdownIndex(openSubDropdownIndex === index ? null : index);
   };

  return (
    <div>
       <section className='herobanner'>
         {/* header */}
         <UserboardHeader/>

        <div className='container'> 
        <div className='hero-content-box'>
               <div className='hero-content'>
                <h2 className='banner-heading'>Get Services Whenever  You Need Them</h2>
                <p className='banner-txt'>Find Local Service Professional Near You</p>
                
               </div>
               <div className='hero-filter-container'>
               <div class="user-container">
  <div class="user-location-box">
    <span class="material-icons">location_on</span>
    <input type="text" class="user-location-input" placeholder="West Mambalam, Chennai" />
    <span class="material-icons">expand_more</span>
  </div>

  <div class="user-search-box">
    <span class="material-icons">search</span>
    <input type="text" class="user-search-input" placeholder="What services do you need?" />
    <button class="user-filter-btn"  onClick={toggleDropdown}>
      <span class="material-icons">tune</span>
    </button>

    {/* <!-- Dropdown Menu --> */}
    <ul className={`user-dropdown-menu ${isActive ? 'active' : ''}`} id="filterDropdown">
      <li class="user-dropdown-item">
      <div className='user-dropdown-flex'  onClick={() => toggleSubDropdown(0)} // Toggle first dropdown
        >
      <p>Select Service</p>
      <span class="material-icons">expand_more</span>
      </div>
        <ul className={`user-sub-dropdown-box ${openSubDropdownIndex === 0 ? 'active' : ''}`}>
          <li>Service 1</li>
          <li>Service 2</li>
        </ul>
     </li>
     <li class="user-dropdown-item">
      <div className='user-dropdown-flex'  onClick={() => toggleSubDropdown(1)}>
      <p>Select Categories</p>
      <span class="material-icons">expand_more</span>
      </div>
        <ul className={`user-sub-dropdown-box ${openSubDropdownIndex === 1 ? 'active' : ''}`}>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
          <li>Service 5</li>
        </ul>
     </li>
     <li class="user-dropdown-item">
      <div className='user-dropdown-flex' onClick={() => toggleSubDropdown(2)}>
      <p>Select Sub-categories</p>
      <span class="material-icons">expand_more</span>
      </div>
        <ul className={`user-sub-dropdown-box ${openSubDropdownIndex === 2 ? 'active' : ''}`}>
          <li>Service 1</li>
        </ul>
     </li>

     <li class="user-dropdown-item">
      <div className='user-dropdown-flex' onClick={() => toggleSubDropdown(3)}>
      <p>Select Location</p>
      <span class="material-icons">expand_more</span>
      </div>
        <ul className={`user-sub-dropdown-box ${openSubDropdownIndex === 3 ? 'active' : ''}`}>
          <li>Service 1</li>
        </ul>
     </li>
     <li class="user-dropdown-item">
      <div className='user-dropdown-flex' onClick={() => toggleSubDropdown(4)}>
      <p>Service Provider Rating</p>
      <span class="material-icons">expand_more</span>
      </div>
        <ul className={`user-sub-dropdown-box ${openSubDropdownIndex === 4 ? 'active' : ''}`}>
          <li>Service 1</li>
        </ul>
     </li>

     <li class="user-dropdown-item">
      <div className='user-dropdown-flex' onClick={() => toggleSubDropdown(5)}>
      <p>Service Provider Experience</p>
      <span class="material-icons">expand_more</span>
      </div>
        <ul className={`user-sub-dropdown-box ${openSubDropdownIndex === 5 ? 'active' : ''}`}>
          <li>Service 1</li>
        </ul>
     </li>
     <li class="user-dropdown-item">
      <div className='user-dropdown-flex' onClick={() => toggleSubDropdown(6)}>
      <p>Select Price Range</p>
      <span class="material-icons">expand_more</span>
      </div>
        <ul className={`user-sub-dropdown-box ${openSubDropdownIndex === 6 ? 'active' : ''}`}>
          <li>Service 1</li>
        </ul>
     </li>
      
    </ul>
  </div>
</div>
         </div>

         </div>
         
        </div>        
      </section>
    </div>
  )
}

export default UserHerobanner

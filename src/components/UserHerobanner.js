import React from 'react'
import UserboardHeader from './UserboardHeader';


function UserHerobanner() {
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
    <button class="user-filter-btn">
      <span class="material-icons">tune</span>
    </button>

    {/* <!-- Dropdown Menu --> */}
    <div class="user-dropdown-menu" id="filterDropdown">
      <div class="user-dropdown-item">Option 1</div>
      <div class="user-dropdown-item">Option 2</div>
      <div class="user-dropdown-item">Option 3</div>
      <div class="user-dropdown-item">Option 4</div>
    </div>
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

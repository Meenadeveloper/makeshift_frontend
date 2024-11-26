import Industry from '../assets/images/factory.png';
import House from '../assets/images/house.png';
import Retail from '../assets/images/retailshop.png';
import Mentor from '../assets/images/mentor.png';
import PDenquiry from '../assets/images/pd_enquiry.png';
import React, { useState } from 'react';
import ServicePopup from './ServicePopup';

function UserService() {
  return (
    <>
        <section className='service-cont'>
       <div className='category-container'>
           <div className='service-item' >
            <div className='service-img'>
            <img src={Industry} />
            </div>
              <p className='card-sub-head'>Industry & factory</p>
           </div>

           {/* service item */}
           <div className='service-item'  >
            <div className='service-img'>
            <img src={Retail} />
            </div>
              <p className='card-sub-head'>Retail & Shop</p>
           </div>

           {/* service item */}
           <div className='service-item'  >
            <div className='service-img'>
            <img src={House} />
            </div>
              <p className='card-sub-head'>Home (Personal)</p>
           </div>

            {/* service item */}
            <div className='service-item' >
            <div className='service-img'>
            <img src={Mentor} />
            </div>
              <p className='card-sub-head'>Mendor & Consultancies</p>
           </div>

            {/* service item */}
            <div className='service-item'  >
            <div className='service-img'>
            <img src={PDenquiry} />
            </div>
              <p className='card-sub-head' >P & D enquiry</p>
           </div>
       </div>
    </section>
    </>
  )
}

export default UserService

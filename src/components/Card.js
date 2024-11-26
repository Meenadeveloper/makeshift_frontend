import React from 'react'
import MachineOperator from '../assets/images/machine_operator.jpg';
import Plumber from '../assets/images/plumbers.png';
import Kitchen from '../assets/images/kitchen.jpg';
import Teacher from '../assets/images/teaching.jpg';

import HaircutBanner from '../assets/images/mini-banner1.png';
import ElectricBillBanner from '../assets/images/minibanner2.png';
import MassageBanner from '../assets/images/mini-banner3.png';

import BillingCash from '../assets/images/billing-cash-banner.png';
import QualityChecker from '../assets/images/quality-checker.jpg';
import DeliveryDriver from '../assets/images/delivery-driver.jpg';
import MarketingAssociate from '../assets/images/marketing-associate.jpg';
import StoreKeeper from '../assets/images/store-keeper.jpg';

import AdvBanner from '../assets/images/ad_banner1.png';

function Card() {
  return (
    <div style={{ display: 'flex', flexDirection:'column',gap:'50px', justifyContent: 'center' , alignItems:'center'}}>
      
      {/* product card */}
       <div className='product-card'>
        {/* Card Image */}
        <div className='card-image'>
        <img src={MachineOperator} className='image-class' alt='Machine Operator' />
        <span className='star-box d-flex'>
          <i class="material-icons">star</i>
           <p>4.3</p>
        </span>
        </div>
        <div className='card-content'>
            {/* card Heading */}
           <div className='card-head-box'>
               <span className='product-card-heading'>Loading Helper </span>
               <span className='review-count'>(44k review)</span>
           </div>
           {/* card shot note */}
           <div className='card-text-box'>
            <div className='text-inline'>
                <p className='card-sub-head'>Working Per day</p>
                <span className='prize'>&#8377; 1,000
                </span>
            </div>
            <div className='text-inline'>
                <p className='card-sub-head'>Working Per Hours</p>
                <span className='prize'>&#8377; 200.0</span>
            </div>

           </div>
             {/* card Description */}
             <ul className='card-decription'>
               <li className='card-description-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
               <li className='card-description-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit onsectetur adipiscing elit</li>


             </ul>

             {/* card buttons */}
             <div className='button-inline'>
               <button className='primary-button'>Add to Card </button>
               <button className='secondary-button'>View</button>
            </div>
        </div>
       </div>  

     {/* banner card */}
     <div className='banner-card'>
     <img src={HaircutBanner} alt="Haircut Banner" />
     </div>

     {/* mini banner card  */}

     <div className='mini-banner-card'>
        <div className='mini-banner-card-img'>
        <img src={BillingCash} alt="Billing and Cashier" />
        </div>
        <h2 className='mini-banner-heading'>Billing & Cashier</h2>
     </div>

       {/* unprize product card */}
       <div className='product-card'>
        {/* Card Image */}
        <div className='card-image'>
        <img src={MachineOperator} className='image-class' alt='Machine Operator' />
        <span className='star-box d-flex'>
          <i class="material-icons">star</i>
           <p>4.3</p>
        </span>
        </div>
        <div className='card-content'>
            {/* card Heading */}
           <div className='card-head-box'>
               <span className='product-card-heading'>Home False Ceiling </span>
               <span className='review-count'>(44k review)</span>
           </div>
           {/* card shot note */}
           <div className='card-text-box'>
            <div className='text-inline'>
                <p className='prize-note'>Note: We have not set any specific amount for these types of services, as they are based on the customer's requirements.</p>
                
            </div>
            
               </div>
             {/* card Description */}
             <ul className='card-decription'>
               <li className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
               <li className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit onsectetur adipiscing elit</li>


             </ul>

             {/* card buttons */}
             <div className='button-center'>
               <button className='secondary-button'>Enquiry Now</button>
            </div>
        </div>
       </div>  

       {/* advertisement banner */}
     <div class="adv-banner-box">
  <div class="adv-banner-item">
    <img src={AdvBanner} alt="Banner 1" />
  </div>
  {/* banner dots */}
  <div class="adv-banner-dots">
    <span class="adv-banner-dot active"></span>
    <span class="adv-banner-dot"></span>
    <span class="adv-banner-dot"></span>
  </div>
     </div>

     {/* footer */}
    </div>
  )
}

export default Card

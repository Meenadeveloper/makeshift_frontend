import React, { useState } from 'react';
import  '../styles/components/popup.css';

import {ReactComponent as Calculator } from '../assets/images/icons/calculate.svg';
import {ReactComponent as Wherehouse } from '../assets/images/icons/werehouse.svg';
import {ReactComponent as Document_write } from '../assets/images/icons/document_write.svg';
import {ReactComponent as System_work } from '../assets/images/icons/system_work.svg';
import {ReactComponent as Material_check } from '../assets/images/icons/export_check.svg';
import {ReactComponent as House_keeping } from '../assets/images/icons/house_keeping.svg';
import {ReactComponent as Packing_work } from '../assets/images/icons/package_work.svg';
import {ReactComponent as Factory_work } from '../assets/images/icons/woman-factory-worker.svg';
import {ReactComponent as Loading_helper } from '../assets/images/icons/loader_helper.svg';

import Industry from '../assets/images/factory.png';
import House from '../assets/images/house.png';
import Retail from '../assets/images/retailshop.png';
import Mentor from '../assets/images/mentor.png';
import PDenquiry from '../assets/images/pd_enquiry.png';
import { Link } from 'react-router-dom';


function ServicePopup({ handleClosePopup }) {
  return (
    <>
       <div className="feedback-modal service-model active">
          <div className="feedback-modal-content  service-modal-content">
            {/* Close Button */}
            <button className="feedback-close-btn service-popup-close" onClick={handleClosePopup}>
        <i className="fas fa-times"></i>
      </button>
            {/* Heading */}
            {/* <h2 className='feedback-heading'>Feed back</h2> */}
             {/* <p className='feedback-txt' style={{ textAlign:'left',padding:'15px 10px',fontSize:'16px',color:'#000000' }}>Service</p> */}
            {/* Emoji Feedback Row */}
            {/* <div className="service-row">
            <div class="user-category-item">
            <img src={Industry} className='user-category-svg active'/>
            <p className='active'>Accounted</p>
        </div>
        <div class="user-category-item">
        <img src={House} className='user-category-svg'/>
            <p>Warehouse associated</p>
        </div>
        <div class="user-category-item">
       
        <img src={Retail} className='user-category-svg'/>
       
        <p>Document
        Writing</p>
        </div>
        <div class="user-category-item">
        <img src={Mentor} className='user-category-svg'/>
            <p>System Working</p>
        </div>
        <div class="user-category-item">
        <img src={PDenquiry} className='user-category-svg'/>
            <p>Material checking</p>
        </div>
            </div> */}
            <p className='feedback-txt' style={{ textAlign:'left',padding:'15px 10px',fontSize:'16px',color:'#000000' ,marginTop:'10px'}}>Industry & Factory</p>
            <div className='category-row'>
            <Link to="/list-of-services" class="user-category-item">
            <Calculator className='user-category-svg'/>
            <p>Accounted</p>
        </Link>
        <Link to="/list-of-services" class="user-category-item">
        <Wherehouse className='user-category-svg'/>
            <p>Warehouse associated</p>
        </Link>
        <Link to="/list-of-services" class="user-category-item">
       
        <Document_write className='user-category-svg'/>
       
        <p>Document
        Writing</p>
        </Link>
        <Link to="/list-of-services" class="user-category-item">
        <System_work className='user-category-svg'/>
            <p>System Working</p>
        </Link>
        <Link to="/list-of-services" class="user-category-item">
        <Material_check className='user-category-svg'/>
            <p>Material checking</p>
        </Link>
        <Link to="/list-of-services" class="user-category-item">
        <House_keeping className='user-category-svg'/>
            <p>House keeping</p>
        </Link>
        <Link to="/list-of-services" class="user-category-item">
        <Packing_work className='user-category-svg'/>
            <p>Packing working</p>
        </Link>
        <Link to="/list-of-services" class="user-category-item">
        <Factory_work className='user-category-svg'/>
            <p>factory Worker</p>
        </Link>
        <Link to="/list-of-services"  class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </Link>
        {/* <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div> */}


            </div>
          
          </div>
        </div>
    </>
  )
}

export default ServicePopup

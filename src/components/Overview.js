import React from 'react'
import '../styles/components/pages.css';
import {ReactComponent as Trained } from '../assets/images/icons/octicon_people-16.svg';
import {ReactComponent as Verified } from '../assets/images/icons/verifier.svg';
import {ReactComponent as Warrenty } from '../assets/images/icons/icon-park-outline_people-safe.svg';

function Overview() {
  return (
    <div>
       <div className='overview-box user-service-overview'>
                <div className='user-inner-overview'>
                  <h2>Overview</h2>

                 <div class="overview-icons">
                   <div className='overview-item'>
                   <div class="icon">
                    <Trained />
                    <p>Trained Professional</p>
                   </div>
                   <div className='over-par'>Get service from trusted and verified partner with professional skills and experience.</div>
                    </div> 
                    <div className='overview-item'>
                    <div class="icon">
                    <Verified />
                    <p>Background Verified</p>
                   </div>
                   <div className='over-par'>Get service from trusted and verified partner with professional skills and experience.</div>

                    </div>
                    <div className='overview-item'>
                <div class="icon">
                <Warrenty />
                    <p>Service-specific options</p>
                </div>
                <div className='over-par'>Get service from trusted and verified partner with professional skills and experience.</div>

                </div>
                
                
            </div>
                </div>
       </div>
    </div>
  )
}

export default Overview

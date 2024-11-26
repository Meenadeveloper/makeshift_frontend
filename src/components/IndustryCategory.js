import React from 'react'
import {ReactComponent as Calculator } from '../assets/images/icons/calculate.svg';
import {ReactComponent as Wherehouse } from '../assets/images/icons/werehouse.svg';
import {ReactComponent as Document_write } from '../assets/images/icons/document_write.svg';
import {ReactComponent as System_work } from '../assets/images/icons/system_work.svg';
import {ReactComponent as Material_check } from '../assets/images/icons/export_check.svg';
import {ReactComponent as House_keeping } from '../assets/images/icons/house_keeping.svg';
import {ReactComponent as Packing_work } from '../assets/images/icons/package_work.svg';
import {ReactComponent as Factory_work } from '../assets/images/icons/woman-factory-worker.svg';
import {ReactComponent as Loading_helper } from '../assets/images/icons/loader_helper.svg';



function IndustryCategory() {
  return (
    <div className='user-category-box'>
       <h1 style={{color:'rgba(70, 69, 69, 1)', fontWeight:'700'}}>Industry & Factory</h1>
    <div class="user-category-container">
        <div class="user-category-item">
            <Calculator className='user-category-svg'/>
            <p>Accounted</p>
        </div>
        <div class="user-category-item">
        <Wherehouse className='user-category-svg'/>
            <p>Warehouse associated</p>
        </div>
        <div class="user-category-item">
       
        <Document_write className='user-category-svg'/>
       
        <p>Document
        Writing</p>
        </div>
        <div class="user-category-item">
        <System_work className='user-category-svg'/>
            <p>System Working</p>
        </div>
        <div class="user-category-item">
        <Material_check className='user-category-svg'/>
            <p>Material checking</p>
        </div>
        <div class="user-category-item">
        <House_keeping className='user-category-svg'/>
            <p>House keeping</p>
        </div>
        <div class="user-category-item">
        <Packing_work className='user-category-svg'/>
            <p>Packing working</p>
        </div>
        <div class="user-category-item">
        <Factory_work className='user-category-svg'/>
            <p>factory Worker</p>
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
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
        <div class="user-category-item">
        <Loading_helper className='user-category-svg'/>
            <p>loading helper</p>
        </div>
    </div>

    </div>
  )
}

export default IndustryCategory

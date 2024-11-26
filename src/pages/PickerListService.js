import UserboardHeader from '../components/UserboardHeader';
import Footer from '../components/Footer';
import Service_img from '../assets/images/service_list.jpg'
import React, { useState } from 'react';
import SuccessPopup from '../components/SuccessPopup';
function PickerListService() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show the modal
  const handlePayNowClick = () => {
    setIsModalVisible(true);  // Show the modal when Pay Now button is clicked
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);  // Hide the modal when it's clicked
  };

  return (
    <>
       <div className='wrapper'>
           
           <UserboardHeader/>
            <div className='page-wrapper'>
              <div className='container'>
               <div className='picker-service-box'>
                   <div className='picker-service-card-box'>
                      <div className='picker-service-card-head'>
                        <h2>List Of Service</h2>
                        </div>

                        <div className='picker-service-grid-box'>
                        <div class="border-card" style={{}}>
                        <table className="user-service-card-header" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px' }}>
  <tbody>
    <tr>
      <td >
        <h2 className="user-service-title">Picker Service</h2>
      </td>
      <td>
        <span className="user-service-reviews" style={{ fontSize: '10px' }}>(44k reviews)</span>
      </td>
    </tr>

    

    <tr className="user-service-card-body" style={{borderBottom:'1.5px dotted #D4D4D4', borderTop:'1.5px dotted #D4D4D4'}}>
      <td className="user-service-info" style={{  display:'flex' ,flexDirection:'column' , gap:'5px' }}>
        <p>Working per day:</p>
        <p style={{ color: '#B51144', fontSize: '12px', fontWeight: '600' }}>View Details</p>

      </td>
      <td style={{ }}>
        <span className="user-price">₹ 900</span>
      </td>
      <td style={{ }}>
        <div className="user-service-image">
          <div className="user-service-rating">
            <span>★ 4.5</span>
          </div>
          <img src={Service_img} alt="Packer Service Image" />
        </div>
      </td>
    </tr>
    <tr>
    
    </tr>
  </tbody>
</table>

  
  
  {/* <div class="user-service-card-date">
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
  </div>
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
   
  </div> */}

<div class="user-service-card-footer" style={{paddingTop:'10px', borderBottom:'1.07px dotted #EAEAEA', borderTop:'1.07px dotted #EAEAEA'}}>
<table className="user-service-description" style={{ width: '100%', borderCollapse: 'collapse' }}>
  <tbody>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700' }}>Service Method</td>
      <td style={{ padding: '8px' }}>:</td>
      <td style={{ padding: '8px' }}>Day</td>
    </tr>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700' }}>Working Duration</td>
      <td style={{ padding: '8px' }}>:</td>
      <td style={{ padding: '8px' }}>01 Day</td>
    </tr>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700' }}>Preferred Date</td>
      <td style={{ padding: '8px' }}>:</td>
      <td style={{ padding: '8px' }}>August 26, 2024</td>
    </tr>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700' }}>Preferred Time</td>
      <td style={{ padding: '8px' }}>:</td>
      <td style={{ padding: '8px' }}>12 : 00 pm</td>
    </tr>
  </tbody>
</table>

   
  </div>

  <table className="user-service-description" style={{ width: '100%', borderCollapse: 'collapse' }}>
  <tbody>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700', color:'#000000', fontSize:'16px' }}>Amount</td>
      <td style={{ padding: '8px', fontWeight: '700', color:'#B51144', fontSize:'16px'  }}>&#8377;
       1,000</td>
    </tr>
   
  </tbody>
</table>


                        </div>
                        <div class="border-card" style={{}}>
                        <table className="user-service-card-header" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px' }}>
  <tbody>
    <tr>
      <td >
        <h2 className="user-service-title">Picker Service</h2>
      </td>
      <td>
        <span className="user-service-reviews" style={{ fontSize: '10px' }}>(44k reviews)</span>
      </td>
    </tr>

    

    <tr className="user-service-card-body" style={{borderBottom:'1.5px dotted #D4D4D4', borderTop:'1.5px dotted #D4D4D4'}}>
      <td className="user-service-info" style={{  display:'flex' ,flexDirection:'column' , gap:'5px' }}>
        <p>Working per day:</p>
        <p style={{ color: '#B51144', fontSize: '12px', fontWeight: '600' }}>View Details</p>

      </td>
      <td style={{ }}>
        <span className="user-price">₹ 900</span>
      </td>
      <td style={{ }}>
        <div className="user-service-image">
          <div className="user-service-rating">
            <span>★ 4.5</span>
          </div>
          <img src={Service_img} alt="Packer Service Image" />
        </div>
      </td>
    </tr>
    <tr>
    
    </tr>
  </tbody>
</table>

  
  
  {/* <div class="user-service-card-date">
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
  </div>
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
   
  </div> */}

<div class="user-service-card-footer" style={{paddingTop:'10px', borderBottom:'1.07px dotted #EAEAEA', borderTop:'1.07px dotted #EAEAEA'}}>
<table className="user-service-description" style={{ width: '100%', borderCollapse: 'collapse' }}>
  <tbody>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700' }}>Service Method</td>
      <td style={{ padding: '8px' }}>:</td>
      <td style={{ padding: '8px' }}>Day</td>
    </tr>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700' }}>Working Duration</td>
      <td style={{ padding: '8px' }}>:</td>
      <td style={{ padding: '8px' }}>01 Day</td>
    </tr>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700' }}>Preferred Date</td>
      <td style={{ padding: '8px' }}>:</td>
      <td style={{ padding: '8px' }}>August 26, 2024</td>
    </tr>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700' }}>Preferred Time</td>
      <td style={{ padding: '8px' }}>:</td>
      <td style={{ padding: '8px' }}>12 : 00 pm</td>
    </tr>
  </tbody>
</table>

   
  </div>

  <table className="user-service-description" style={{ width: '100%', borderCollapse: 'collapse' }}>
  <tbody>
    <tr className="picker-details-list">
      <td style={{ padding: '8px', fontWeight: '700', color:'#000000', fontSize:'16px' }}>Amount</td>
      <td style={{ padding: '8px', fontWeight: '700', color:'#B51144', fontSize:'16px'  }}>&#8377;
       1,000</td>
    </tr>
   
  </tbody>
</table>


                        </div>
                       
                        {/* <div class="border-card"  style={{border:' 1.07px solid #EAEAEA !important'}}>
  <div class="user-service-card-header">
    <h2 class="user-service-title">Packer Service</h2>
    <span class="user-service-reviews" style={{fontSize:'10px'}}>(44k reviews)</span>
   
  </div>
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important'}}>
    <div class="user-service-info">
      <p>Working per day: <span class="user-price">₹ 900</span></p>
      <p style={{color:'#B51144' , fontSize:'12px',fontWeight:'600'}}>View Details </p>
    </div>
    <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
    </div>
  </div>
  <div class="user-service-card-date">
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
  </div>
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
   
  </div>
                        </div> */}

                        
                        </div>
                   </div>
                   <div className='picker-payment-box'>
                   <div className='payment-box'>
                      <div className='payment-item'>
                        <h2>Service summary</h2>
                        <ul className='payment-item-list-box'>
                            <li className='payment-item-list-item'>
                                <p>Picker Service</p>

                                <p className='wrap-par'>
                                    {/* <span>Working per day :</span> */}
                                    <span style={{color:'#B51144'}}>&#8377; 1,000</span>
                                
                                </p>
                            </li>

                            <li className='payment-item-list-item'>
                                <p>Packer Service</p>

                                <p className='wrap-par'>
                                    {/* <span>Working per day :</span> */}
                                    <span style={{color:'#B51144'}}>&#8377; 1,000</span>
                                
                                </p>
                            </li>
                        </ul>
                        
                       
                      </div>

                      <div className='payment-item'>
                      <ul className='payment-item-list-box'>
                      <h2>Payment summary</h2>
                            <li className='payment-item-list-item'>
                                <p>Item total</p>

                                <p className='wrap-par'>
                                    
                                    <span style={{color:'#B51144'}}>&#8377; 100</span>
                                
                                </p>
                            </li>

                            <li className='payment-item-list-item'>
                                <p>Taxes and Fee</p>

                                <p className='wrap-par'>
                                  
                                    <span style={{color:'#B51144'}}>&#8377; 2,000</span>
                                
                                </p>
                            </li>
                        </ul>
                      </div>
                      <div className='payment-item'>
                      <ul className='payment-item-list-box' style={{borderBottom:'none'}}>
                            <li className='payment-item-list-item last' >
                                <p style={{fontSize:'20px'}}>Amount to pay</p>

                                <p className='wrap-par' style={{fontSize:'20px'}}>
                                  
                                    <span style={{color:'#B51144'}}>&#8377; 2,100</span>
                                
                                </p>
                            </li>

                            
                            <div className='button-inline' style={{justifyContent:'center'}}>
               <button className='primary-button'  onClick={handlePayNowClick}>Pay Now </button>


               {/* Conditionally render the SuccessPopup component */}
      {isModalVisible && (
       
          <SuccessPopup onClick={handleCloseModal} />
       
       
      )}
            </div>
                           
                        </ul>
                      </div>
                    </div>
                      </div>
               </div>

             

              </div>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default PickerListService

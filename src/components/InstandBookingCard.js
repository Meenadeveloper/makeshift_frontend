import Service_img from '../assets/images/service_list.jpg'
import Location from '../assets/images/icons/location.svg';
function InstandBookingCard() {
  return (
    <>
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
      <td style={{ padding: '8px', fontWeight: '700', color:'#000000', fontSize:'16px' }}>Amount</td> <td></td>
      <td style={{ padding: '8px', fontWeight: '700', color:'#B51144', fontSize:'16px'  }}>&#8377;
       1,000</td>
    </tr>
   <tr>
   <td className='button-inline'>
            <button type="" className='pending-btn'>Pending</button>
        </td>
        <td></td>
        <td>            <button type="" className='cancel-btn'>Cancel Booking</button>
        </td>
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
      <td style={{ padding: '8px', fontWeight: '700', color:'#000000', fontSize:'16px' }}>Amount</td> <td></td>
      <td style={{ padding: '8px', fontWeight: '700', color:'#B51144', fontSize:'16px'  }}>&#8377;
       1,000</td>
    </tr>
   <tr>
   <td className='button-inline'>
            <button type="" className='pending-btn'>Pending</button>
        </td>
        <td></td>
        <td>            <button type="" className='cancel-btn'>Cancel Booking</button>
        </td>
   </tr>
  </tbody>
</table>


       </div>

     
    </>
  )
}

export default InstandBookingCard

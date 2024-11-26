import Footer from '../components/Footer';
import UserboardHeader from '../components/UserboardHeader';
import ServiceBookingForm from '../components/ServiceBookingForm';
import '../styles/components/pages.css';
import MachineOperator from '../assets/images/machine_operator.jpg';

function ListOfServiceBooking() {
  return (
    <>
       <div className='wrapper'>
           
           <UserboardHeader/>
            <div className='page-wrapper'>
              <div className='container'>
              <div className='user-list-service-box'>
          <div className='user-page-item ' style={{padding:'10px'}}>
          <div className='user-service-card-container' >
          <div class="user-service-card"  style={{maxWidth:'550px'}}>
            <p className='user-service-note'>( Note: If you extend the working hours, you will be required to pay an additional amount for the extra hours )</p>
          </div>
          </div>

          <div className='user-service-card-container user-service-card ' style={{marginTop:'20px',maxWidth:'100%', alignItems:'center'}}>
          <div>
            <h2 style={{fontSize:'20px',color:'#000000', paddingBottom:'10px',paddingLeft:'20px', fontWeight:'700'}}>List Of Service</h2>
            </div>
          <div class="user-list-service-card-box" style={{maxWidth:'100%'}}>
            
               {/* product card */}
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
             <ul className='card-decription' style={{padding:'20px', paddingBottom:'0px'}}>
               <li className='card-description-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
               <li className='card-description-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit onsectetur adipiscing elit</li>


             </ul>

             {/* card buttons */}
             <div className='button-inline' style={{justifyContent:'center'}}>
               <button className='primary-button'>Select Slot </button>
            </div>
        </div>
          </div> 

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
             <ul className='card-decription' style={{padding:'20px', paddingBottom:'0px'}}>
               <li className='card-description-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
               <li className='card-description-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit onsectetur adipiscing elit</li>


             </ul>

             {/* card buttons */}
             <div className='button-inline' style={{justifyContent:'center'}}>
               <button className='primary-button'>Select Slot </button>
            </div>
        </div>
          </div> 
          
          </div>
          </div>

         
          </div>
           <div className='user-page-item service-booking-form-box'>
       <ServiceBookingForm />
           </div>
        
          </div>

              </div>
            </div>

            <Footer/>
        </div>
     
    </>
  )
}

export default ListOfServiceBooking

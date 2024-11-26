import Sidebar from '../components/Sidebar';
import UserboardHeader from '../components/UserboardHeader';

import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import PDEnquiryCard from '../components/PDEnquiryCard';

function PDEnquiryPage() {
  return (
    <>
       <div className='wrapper'>
        <UserboardHeader/>
          <div className='container'>
            <div className='page-container'>
            <Sidebar/>
            <div className='page-body'>
             <div className='booking-menu-box'>
                <ul className='booking-menu-container'>
                <li className='booking-menu-item '><Link to="/instand-booking" className='booking-menu-link'>Instant Booking</Link></li>
                    <li className='booking-menu-item '><Link to="/complete-booking" className='booking-menu-link'>Completed</Link></li>
                    <li className='booking-menu-item'><Link to="/cancel-booking" className='booking-menu-link'>Canceled</Link></li>
                    <li className='booking-menu-item booking-active-menu'><Link to="/pd-enquiry" className='booking-menu-link'>P & D Enquiry</Link></li>
                    <li className='booking-menu-item  '><Link to="/service-enquiry" className='booking-menu-link'>Service Enquiry</Link></li>


                </ul>
             </div>
              
              <div className='booking-card-box' style={{ maxWidth:'100%' }}>
                 <div className='booking-grid-box enquiry-grid'>
                    <PDEnquiryCard/>
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

export default PDEnquiryPage

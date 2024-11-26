

import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import EmployeeHeader from '../components/EmployeeHeader';
import EmpSidebar from '../components/EmpSidebar';
import EmpBookingListCard from '../components/EmpBookingListCard';

function BookingListPage() {

  // Define styles with media queries using JavaScript object
  const styles = {
    bookingCardBox: {
      padding: '20px',
      margin: '10px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#fff',
      // Default styles for larger screens
      width: '100%',
      
      transition: 'all 0.3s ease',
      // Media query for max-width 1400px
      '@media (max-width: 1400px)': {
        maxWidth: '900px', // Adjust width for 1400px screens
      },
      // Media query for max-width 900px
      '@media (max-width: 900px)': {
        maxWidth: '100%', // Full width for smaller screens
        padding: '10px', // Adjust padding for smaller screens
      },
    },
  };
  return (
    <>
       <div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
           <EmpSidebar/>
            <div className='page-body'>
             <div className='booking-menu-box'>
                <ul className='booking-menu-container'>
                <li className='booking-menu-item booking-active-menu'><Link to="/employee-booking-list" className='booking-menu-link'>Booking List</Link></li>
                    <li className='booking-menu-item '><Link to="/employee-booking-completed" className='booking-menu-link'>Completed</Link></li>
                    <li className='booking-menu-item'><Link to="/employee-booking-cancel" className='booking-menu-link'>Canceled</Link></li>
                    <li className='booking-menu-item '><Link to="/employee-booking-pdenquiery" className='booking-menu-link'>P & D Enquiry</Link></li>

                </ul>
             </div>
              
              <div className='booking-card-box' style={styles.bookingCardBox}>
                 <div className='emp-book-inner-box '>
                 <EmpBookingListCard/>
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

export default BookingListPage

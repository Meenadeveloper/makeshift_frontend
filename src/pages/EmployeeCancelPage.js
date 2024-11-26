import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import EmployeeHeader from '../components/EmployeeHeader';
import EmpSidebar from '../components/EmpSidebar';
import EmployeeCancelCard from '../components/EmployeeCancelCard';
function EmployeeCancelPage() {
  return (
    <div>
       <div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
           <EmpSidebar/>
            <div className='page-body'>
             <div className='booking-menu-box'>
                <ul className='booking-menu-container'>
                <li className='booking-menu-item '><Link to="/employee-booking-list" className='booking-menu-link'>Booking List</Link></li>
                    <li className='booking-menu-item '><Link to="/employee-booking-completed" className='booking-menu-link'>Completed</Link></li>
                    <li className='booking-menu-item booking-active-menu'><Link to="/employee-booking-cancel" className='booking-menu-link'>Canceled</Link></li>
                    <li className='booking-menu-item '><Link to="/employee-booking-pdenquiery" className='booking-menu-link'>P & D Enquiry</Link></li>

                </ul>
             </div>
              
              <div className='booking-card-box' style={{ maxWidth:'100%', }}>
                 <div className='emp-book-inner-box '>
                 <EmployeeCancelCard/>
                 </div>
              </div>

            </div>
            </div>
            </div>
          <Footer/>
        </div>
      
    </div>
  )
}

export default EmployeeCancelPage

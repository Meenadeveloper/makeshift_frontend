import EmpSidebar from '../components/EmpSidebar';
import Footer from '../components/Footer';
import NotificationMsg from '../components/NotificationMsg';

import '../styles/components/pages.css';
import EmployeeHeader from './../components/EmployeeHeader';
function EmpNotification() {
  return (
    <>
      <div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
            <EmpSidebar/>
            <div className='page-body '>
            <NotificationMsg/>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
    </>
  )
}

export default EmpNotification

import EmpSidebar from '../components/EmpSidebar';
import Footer from '../components/Footer';
import UserPasswordchange from '../components/UserPasswordchange';

import '../styles/components/pages.css';
import EmployeeHeader from './../components/EmployeeHeader';
function EmpPasswordChange() {
  return (
    <>
       <div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
            <EmpSidebar/>
            <div className='page-body '>
            <UserPasswordchange/>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
    </>
  )
}

export default EmpPasswordChange

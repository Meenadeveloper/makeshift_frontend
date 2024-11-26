import EmpSidebar from '../components/EmpSidebar';
import Footer from '../components/Footer';
import UserPrivacyPolicy from '../components/UserPrivacyPolicy';

import '../styles/components/pages.css';
import EmployeeHeader from './../components/EmployeeHeader';
function EmpPrivacyPolicy() {
  return (
    <>
       <div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
            <EmpSidebar/>
            <div className='page-body '>
            <UserPrivacyPolicy/>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
    </>
  )
}

export default EmpPrivacyPolicy

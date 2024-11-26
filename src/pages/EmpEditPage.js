import EmpSidebar from '../components/EmpSidebar';
import Footer from '../components/Footer';
import UserEdit  from '../components/UserEdit';

import '../styles/components/pages.css';
import EmployeeHeader from './../components/EmployeeHeader';
function EmpEditPage() {
  return (
    <>
       <div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
            <EmpSidebar/>
            <div className='page-body '>
              <UserEdit/>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
    </>
  )
}

export default EmpEditPage

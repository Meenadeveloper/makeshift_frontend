import EmpSidebar from '../components/EmpSidebar';
import Footer from '../components/Footer';
import UserReport from '../components/UserReport';

import '../styles/components/pages.css';
import EmployeeHeader from './../components/EmployeeHeader';
function EmpReportQuery() {
  return (
    <>
    <div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
            <EmpSidebar/>
            <div className='page-body '>
            <UserReport/>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
      
    </>
  )
}

export default EmpReportQuery

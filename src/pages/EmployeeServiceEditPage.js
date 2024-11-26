import EmpServiceEditCard from '../components/EmpServiceEditCard';
import EmpSidebar from '../components/EmpSidebar';
import Footer from '../components/Footer';

import '../styles/components/pages.css';
import EmployeeHeader from './../components/EmployeeHeader';
function EmployeeServiceEditPage() {
  return (
    <div>
       <div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
            <EmpSidebar/>
            <div className='page-body '>
          <EmpServiceEditCard/>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
    </div>
  )
}

export default EmployeeServiceEditPage

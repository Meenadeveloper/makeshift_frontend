import Sidebar from '../components/Sidebar';
import UserboardHeader from '../components/UserboardHeader';

import Footer from '../components/Footer';
import UserPasswordchange from '../components/UserPasswordchange';
function PasswordChange() {
  return (
    <>
     <div className='wrapper'>
        <UserboardHeader/>
          <div className='container'>
            <div className='page-container'>
            <Sidebar/>
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

export default PasswordChange

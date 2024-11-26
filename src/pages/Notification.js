import Sidebar from '../components/Sidebar';
import UserboardHeader from '../components/UserboardHeader';

import Footer from '../components/Footer';
import NotificationMsg from '../components/NotificationMsg';
function Notification() {
  return (
    <>
       <div className='wrapper'>
        <UserboardHeader/>
          <div className='container'>
            <div className='page-container'>
            <Sidebar/>
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

export default Notification

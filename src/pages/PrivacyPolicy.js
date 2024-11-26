import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import UserboardHeader from '../components/UserboardHeader';
import UserPrivacyPolicy from '../components/UserPrivacyPolicy';

function PrivacyPolicy() {
  return (
    <div className='wrapper'>
        <UserboardHeader/>
          <div className='container'>
            <div className='page-container'>
            <Sidebar/>
            <div className='page-body '>
            <UserPrivacyPolicy/>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
  )
}

export default PrivacyPolicy

import UserHerobanner from '../components/UserHerobanner'
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import IndustryCategory from '../components/IndustryCategory';
import Overview from '../components/Overview';
import UserService from '../components/UserService';

function ListOfServices() {
  return (
    <>
        <div className='wrapper'>
            <UserHerobanner/>
           <UserService/>
            <div className='page-wrapper'>
              <div className='container'>
              <div className='user-page-container sticky-container'>
          <div className='user-page-item user-category'>
            <IndustryCategory/>
          </div>
           <div className='user-page-item service-cards'>
            <ServiceCard/>
           </div>
        <div className='user-page-item user-overview'>
          <Overview/>
        </div>
          </div>

              </div>
            </div>

            <Footer/>
        </div>
     
    </>
  )
}

export default ListOfServices

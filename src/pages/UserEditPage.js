import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import UserEdit  from '../components/UserEdit';


import '../styles/components/pages.css';
import UserboardHeader from '../components/UserboardHeader';
function UserEditPage() {
    return (
        <div className='wrapper'>
        <UserboardHeader/>
          <div className='container'>
            <div className='page-container'>
            <Sidebar/>
            <div className='page-body '>
              <UserEdit/>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
      )
}

export default UserEditPage

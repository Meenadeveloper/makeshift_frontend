import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import UserReport from '../components/UserReport';


import '../styles/components/pages.css';
import UserboardHeader from '../components/UserboardHeader';
function UserReportPage() {
  return (
    <div className='wrapper'>
    <UserboardHeader/>
      <div className='container'>
        <div className='page-container'>
        <Sidebar/>
        <div className='page-body '>
        <UserReport/>
        </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default UserReportPage;

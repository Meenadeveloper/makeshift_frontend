import React from 'react'
import EmpHeroBanner from '../components/EmpHeroBanner'
import EmpBookListCardSlider from '../components/EmpBookListCardSlider'
import BannerCardSlider from '../components/BannerCardSlider';
import EmpServiceCardSlider from '../components/EmpServiceCardSlider';
import Footer from '../components/Footer';

function EmployeeHome() {
  return (
    <>
      <div className='wrapper'>
        <EmpHeroBanner/>
        <EmpBookListCardSlider/>
        <BannerCardSlider/>
        <EmpServiceCardSlider/>
        <Footer/>
      </div>
    </>
  )
}

export default EmployeeHome

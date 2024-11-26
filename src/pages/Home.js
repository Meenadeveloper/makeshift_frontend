import '../styles/components/popup.css';
import Herosection from '../components/Herosection';
import Services from '../components/Service';
import Footer from '../components/Footer';
import ProductSlider from '../components/ProductSlider';
import ProductDescription from '../components/ProductDescription';

import BannerCardSlider from '../components/BannerCardSlider';
import FactoryProductSlider from '../components/FactoryProductSlider';
import ShopSlider from '../components/ShopSlider';
import AdvBannerSlider from '../components/AdvBannerSlider';
import Personalslider from '../components/Personalslider';
import Tauter from '../components/Tauter';
// import NotePopup from '../components/NotePopup';
// import OtpPopup from '../components/OtpPopup';
// import BookingConfirmPopup from '../components/BookingConfirmPopup';
// import SuccessPopup from '../components/SuccessPopup';
// import feedback from '../components/FeedbackPopup';


import React, { useState } from 'react';
import PrizelessProductDescription from '../components/PrizelessProductDescription';



function Home() {

 // State to track which description is shown
 const [activeDescription, setActiveDescription] = useState(null);

 // Handlers for opening and closing the descriptions
 const handleViewClick = (descriptionType) => {
   setActiveDescription(descriptionType); // Show the respective description
 };

 const handleCloseClick = () => {
   setActiveDescription(null); // Hide the description component
 };
  return (
    <>
      <div className='wrapper'>
       
        <Herosection/>
        <Services/>
        <ProductSlider onViewClick={handleViewClick}   />
    
    {/* Conditionally render description components based on activeDescription state */}
    {activeDescription === 'cart' && (
          <ProductDescription onCloseClick={handleCloseClick} />
        )}
        {activeDescription === 'enquiry' && (
          <PrizelessProductDescription  onCloseClick={handleCloseClick} />
        )}
       <BannerCardSlider/>
       <FactoryProductSlider/>
       <ShopSlider/>
       <AdvBannerSlider/>

       <Personalslider/>
       <Tauter/>
        <Footer/>
     
      </div>
      
    </>
  )
}

export default Home

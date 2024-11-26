import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/pagination';    // Import Pagination styles
import 'swiper/css/navigation';    // Import Navigation styles

// Import Swiper modules correctly
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Pdenquiry2 from '../assets/images/pdenquiry1.png';
import Pdenquiry3 from '../assets/images/pdenquiry2.png';
import Pdenquiry4 from '../assets/images/pdenquiry3.jpeg';
import Service_img from '../assets/images/service_list.jpg'
import EmpLocation from '../assets/images/icons/location.svg'
import Delete from '../assets/images/delete.svg';
import Edit from '../assets/images/edit.svg';
function EmpServiceCardSlider() {
  return (
    <>
      <div className="product-slider-sec">
      <div className="container">
         <div className='display-inline sec-head-box' style={{paddingTop:'30px'}}>
            <h2 className='sec-head'>Service</h2>
            <Link to="/employee-booking-list" className="sec-head-link">See all</Link>
          </div>

          <Swiper
            className="product-swiper"
            grabCursor={true}  // This enables the drag cursor
            spaceBetween={20}
            slidesPerView={1} // Default on mobile devices
            breakpoints={{
              900: { slidesPerView: 2 }, // For tablets, show 2 items
              998: { slidesPerView: 3 }, // For laptops, show 3 items
              1300: { slidesPerView: 3 }, // For desktops, show 4 items
            }}
            loop={true} // Loop the slides
          >

              <SwiperSlide> 
              <div className='slot-card-item emp-swipe-card'>
                                 <div className='slot-card-head' style={{borderBottom:'none',}}>
                                 <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Add required Swiper modules
        spaceBetween={20}                           // Space between slides
        slidesPerView={3}                           // Show 1 slide at a time
        loop={true}                                 // Enable looping
        autoplay={{
          delay: 3000,                              // Auto-slide delay (3 seconds)
          disableOnInteraction: false,              // Auto-slide will continue even after interaction
        }}
        pagination={{
          clickable: true,                          // Enable clickable pagination
        }}
        navigation={false}                           // Enable navigation arrows
      >
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry4} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry2} alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry3} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry2} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry4} alt="Slide 3" />
          </div>
        </SwiperSlide>
        
                                 </Swiper>
                                 </div>

                                 <div className='slot-card-body' style={{borderBottom:'none',}}>
                                     <div className='emp-pack-detail-container' style={{display:'block'}}>
                                        <h2 style={{fontSize:'20px',fontWeight:'700', paddingBottom:'0px'}}>Picker Service</h2>
                                     </div>
                                     <ul className='emp-pers-detail-box'>
                                        <li><span>Service : </span><p>Home / Personal</p></li>
                                        <li><span>Categories :   </span><p> Customer service</p></li>
                                        <li><span> Sub - Categories : </span><p> Personal Customer service</p></li>
                                        <li><span> Employee Type :  </span><p> Full Time</p></li>


                                        

                                     </ul>
                                 </div>
                
                               
                                   <div className='emp-button-box' style={{paddingTop:'0px'}}>
                                   <button className='emp-otp-btn'><img src={Delete} alt=''/>Delete</button>
                                   <button className='emp-cancel-btn'><img src={Edit} alt=''/>Edit</button>

                                   </div>


                               
                            </div> 
             
               </SwiperSlide>

               <SwiperSlide> 
              <div className='slot-card-item emp-swipe-card'>
                                 <div className='slot-card-head' style={{borderBottom:'none',}}>
                                 <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Add required Swiper modules
        spaceBetween={20}                           // Space between slides
        slidesPerView={3}                           // Show 1 slide at a time
        loop={true}                                 // Enable looping
        autoplay={{
          delay: 3000,                              // Auto-slide delay (3 seconds)
          disableOnInteraction: false,              // Auto-slide will continue even after interaction
        }}
        pagination={{
          clickable: true,                          // Enable clickable pagination
        }}
        navigation={false}                           // Enable navigation arrows
      >
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry4} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry2} alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry3} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry2} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry4} alt="Slide 3" />
          </div>
        </SwiperSlide>
        
                                 </Swiper>
                                 </div>

                                 <div className='slot-card-body' style={{borderBottom:'none',}}>
                                     <div className='emp-pack-detail-container' style={{display:'block'}}>
                                        <h2 style={{fontSize:'20px',fontWeight:'700', paddingBottom:'0px'}}>Picker Service</h2>
                                     </div>
                                     <ul className='emp-pers-detail-box'>
                                        <li><span>Service : </span><p>Home / Personal</p></li>
                                        <li><span>Categories :   </span><p> Customer service</p></li>
                                        <li><span> Sub - Categories : </span><p> Personal Customer service</p></li>
                                        <li><span> Employee Type :  </span><p> Full Time</p></li>


                                        

                                     </ul>
                                 </div>
                
                               
                                   <div className='emp-button-box' style={{paddingTop:'0px'}}>
                                   <button className='emp-otp-btn'><img src={Delete} alt=''/>Delete</button>
                                   <button className='emp-cancel-btn'><img src={Edit} alt=''/>Edit</button>

                                   </div>


                               
                            </div> 
             
               </SwiperSlide>


               <SwiperSlide> 
              <div className='slot-card-item emp-swipe-card'>
                                 <div className='slot-card-head' style={{borderBottom:'none',}}>
                                 <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Add required Swiper modules
        spaceBetween={20}                           // Space between slides
        slidesPerView={3}                           // Show 1 slide at a time
        loop={true}                                 // Enable looping
        autoplay={{
          delay: 3000,                              // Auto-slide delay (3 seconds)
          disableOnInteraction: false,              // Auto-slide will continue even after interaction
        }}
        pagination={{
          clickable: true,                          // Enable clickable pagination
        }}
        navigation={false}                           // Enable navigation arrows
      >
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry4} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry2} alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry3} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry2} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry4} alt="Slide 3" />
          </div>
        </SwiperSlide>
        
                                 </Swiper>
                                 </div>

                                 <div className='slot-card-body' style={{borderBottom:'none',}}>
                                     <div className='emp-pack-detail-container' style={{display:'block'}}>
                                        <h2 style={{fontSize:'20px',fontWeight:'700', paddingBottom:'0px'}}>Picker Service</h2>
                                     </div>
                                     <ul className='emp-pers-detail-box'>
                                        <li><span>Service : </span><p>Home / Personal</p></li>
                                        <li><span>Categories :   </span><p> Customer service</p></li>
                                        <li><span> Sub - Categories : </span><p> Personal Customer service</p></li>
                                        <li><span> Employee Type :  </span><p> Full Time</p></li>


                                        

                                     </ul>
                                 </div>
                
                               
                                   <div className='emp-button-box' style={{paddingTop:'0px'}}>
                                   <button className='emp-otp-btn'><img src={Delete} alt=''/>Delete</button>
                                   <button className='emp-cancel-btn'><img src={Edit} alt=''/>Edit</button>

                                   </div>


                               
                            </div> 
             
               </SwiperSlide>


               <SwiperSlide> 
              <div className='slot-card-item emp-swipe-card'>
                                 <div className='slot-card-head' style={{borderBottom:'none',}}>
                                 <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Add required Swiper modules
        spaceBetween={20}                           // Space between slides
        slidesPerView={3}                           // Show 1 slide at a time
        loop={true}                                 // Enable looping
        autoplay={{
          delay: 3000,                              // Auto-slide delay (3 seconds)
          disableOnInteraction: false,              // Auto-slide will continue even after interaction
        }}
        pagination={{
          clickable: true,                          // Enable clickable pagination
        }}
        navigation={false}                           // Enable navigation arrows
      >
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry4} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry2} alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry3} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry2} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pd-enquiry-carousel-item">
            <img src={Pdenquiry4} alt="Slide 3" />
          </div>
        </SwiperSlide>
        
                                 </Swiper>
                                 </div>

                                 <div className='slot-card-body' style={{borderBottom:'none',}}>
                                     <div className='emp-pack-detail-container' style={{display:'block'}}>
                                        <h2 style={{fontSize:'20px',fontWeight:'700', paddingBottom:'0px'}}>Picker Service</h2>
                                     </div>
                                     <ul className='emp-pers-detail-box'>
                                        <li><span>Service : </span><p>Home / Personal</p></li>
                                        <li><span>Categories :   </span><p> Customer service</p></li>
                                        <li><span> Sub - Categories : </span><p> Personal Customer service</p></li>
                                        <li><span> Employee Type :  </span><p> Full Time</p></li>


                                        

                                     </ul>
                                 </div>
                
                               
                                   <div className='emp-button-box' style={{paddingTop:'0px'}}>
                                   <button className='emp-otp-btn'><img src={Delete} alt=''/>Delete</button>
                                   <button className='emp-cancel-btn'><img src={Edit} alt=''/>Edit</button>

                                   </div>


                               
                            </div> 
             
               </SwiperSlide>



               
          </Swiper>
       </div>
      </div>
    </>
  )
}

export default EmpServiceCardSlider

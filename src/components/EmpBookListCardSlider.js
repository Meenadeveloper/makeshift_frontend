import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import Service_img from '../assets/images/service_list.jpg'
import EmpLocation from '../assets/images/icons/location.svg'
function EmpBookListCardSlider() {
  return (
    <>
      <div className="product-slider-sec">
      <div className="container">
         <div className='display-inline sec-head-box' style={{paddingTop:'30px'}}>
            <h2 className='sec-head'>Your Booking List</h2>
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
                                 <div className='slot-card-head'>
                                    <div className='slot-card-left'>
                                           <div className='inline-text'>
                                             <h2 className='slot-card-title' >Picker Service</h2>
                                             <span className='slot-review-count'>(44k review )</span>
                                           </div>

                                           {/* <div className='inline-text'>
                                             <p className='slot-workday'>Working per day :</p>
                                             <span className='slot-prize'>&#8377; 200</span>
                                           </div> */}
                                           <div className='inline-text'>
                                           <button className='view-detail-btn'>View Details</button>

                                           </div>
                                    </div>
                                    <div className='slot-card-right'>
                                    <div className="user-service-image">
                                    <div className="user-service-rating">
                                             <span>★ 4.5</span>
                                        </div>
                                      <img src={Service_img} alt='' />
                                    </div>
                                    </div>
                                 </div>

                                 <div className='slot-card-body' style={{borderBottom:'none'}}>
                                     <div className='emp-pack-detail-container'>
                                         <div className='emp-pack-detail-item'>
                                            <p>Service Method :</p>
                                            <span>Day</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Working Duration :</p>
                                            <span>01 Day</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Preferred Date : </p>
                                            <span>August 26 2024</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Preferred Time :</p>
                                            <span>12 : 00 pm</span>
                                         </div>
                                     </div>
                                     <ul className='emp-pers-detail-box'>
                                        <li><span>Mobile number : </span><p>96542584563</p></li>
                                        <li><span>E-mail ID :  </span><p>Sivakarthikayan.03@gmail.com </p></li>

                                        <li style={{flexDirection:'column',display:'flex',justifyContent:'flex-start', alignItems:'baseline'}}>
                                        <span>Address :  </span>
                                        <p style={{display:'flex', alignItems:'center',gap:'6px'}}>
                                        <img src={EmpLocation} alt=''/>No3/1, 1street, west mambalam, chennai-33</p>
                                        </li>

                                        <li style={{flexDirection:'column',display:'flex',justifyContent:'flex-start', alignItems:'baseline'}}>
                                        <span>Description :  </span>
                                        <p style={{display:'flex', alignItems:'center',gap:'6px'}}>
                                        No3/1, 1street, west mambalam, chennai-33It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.........</p>
                                        </li>

                                     </ul>
                                 </div>
                
                               
                                   <div className='emp-button-box'>
                                   <button className='emp-otp-btn'>Generate OTP</button>
                                   <button className='emp-cancel-btn'>Cancel Booking </button>

                                   </div>


                               
                            </div> 
             
               </SwiperSlide>

               <SwiperSlide> 
              <div className='slot-card-item emp-swipe-card'>
                                 <div className='slot-card-head'>
                                    <div className='slot-card-left'>
                                           <div className='inline-text'>
                                             <h2 className='slot-card-title' >Picker Service</h2>
                                             <span className='slot-review-count'>(44k review )</span>
                                           </div>

                                           {/* <div className='inline-text'>
                                             <p className='slot-workday'>Working per day :</p>
                                             <span className='slot-prize'>&#8377; 200</span>
                                           </div> */}
                                           <div className='inline-text'>
                                           <button className='view-detail-btn'>View Details</button>

                                           </div>
                                    </div>
                                    <div className='slot-card-right'>
                                    <div className="user-service-image">
                                    <div className="user-service-rating">
                                             <span>★ 4.5</span>
                                        </div>
                                      <img src={Service_img} alt='' />
                                    </div>
                                    </div>
                                 </div>

                                 <div className='slot-card-body' style={{borderBottom:'none'}}>
                                     <div className='emp-pack-detail-container'>
                                         <div className='emp-pack-detail-item'>
                                            <p>Service Method :</p>
                                            <span>Day</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Working Duration :</p>
                                            <span>01 Day</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Preferred Date : </p>
                                            <span>August 26 2024</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Preferred Time :</p>
                                            <span>12 : 00 pm</span>
                                         </div>
                                     </div>
                                     <ul className='emp-pers-detail-box'>
                                        <li><span>Mobile number : </span><p>96542584563</p></li>
                                        <li><span>E-mail ID :  </span><p>Sivakarthikayan.03@gmail.com </p></li>

                                        <li style={{flexDirection:'column',display:'flex',justifyContent:'flex-start', alignItems:'baseline'}}>
                                        <span>Address :  </span>
                                        <p style={{display:'flex', alignItems:'center',gap:'6px'}}>
                                        <img src={EmpLocation} alt=''/>No3/1, 1street, west mambalam, chennai-33</p>
                                        </li>

                                        <li style={{flexDirection:'column',display:'flex',justifyContent:'flex-start', alignItems:'baseline'}}>
                                        <span>Description :  </span>
                                        <p style={{display:'flex', alignItems:'center',gap:'6px'}}>
                                        No3/1, 1street, west mambalam, chennai-33It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.........</p>
                                        </li>

                                     </ul>
                                 </div>
                
                               
                                   <div className='emp-button-box'>
                                   <button className='emp-otp-btn'>Generate OTP</button>
                                   <button className='emp-cancel-btn'>Cancel Booking </button>

                                   </div>


                               
                            </div> 
             
               </SwiperSlide>

               <SwiperSlide> 
              <div className='slot-card-item emp-swipe-card'>
                                 <div className='slot-card-head'>
                                    <div className='slot-card-left'>
                                           <div className='inline-text'>
                                             <h2 className='slot-card-title' >Picker Service</h2>
                                             <span className='slot-review-count'>(44k review )</span>
                                           </div>

                                           {/* <div className='inline-text'>
                                             <p className='slot-workday'>Working per day :</p>
                                             <span className='slot-prize'>&#8377; 200</span>
                                           </div> */}
                                           <div className='inline-text'>
                                           <button className='view-detail-btn'>View Details</button>

                                           </div>
                                    </div>
                                    <div className='slot-card-right'>
                                    <div className="user-service-image">
                                    <div className="user-service-rating">
                                             <span>★ 4.5</span>
                                        </div>
                                      <img src={Service_img} alt='' />
                                    </div>
                                    </div>
                                 </div>

                                 <div className='slot-card-body' style={{borderBottom:'none'}}>
                                     <div className='emp-pack-detail-container'>
                                         <div className='emp-pack-detail-item'>
                                            <p>Service Method :</p>
                                            <span>Day</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Working Duration :</p>
                                            <span>01 Day</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Preferred Date : </p>
                                            <span>August 26 2024</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Preferred Time :</p>
                                            <span>12 : 00 pm</span>
                                         </div>
                                     </div>
                                     <ul className='emp-pers-detail-box'>
                                        <li><span>Mobile number : </span><p>96542584563</p></li>
                                        <li><span>E-mail ID :  </span><p>Sivakarthikayan.03@gmail.com </p></li>

                                        <li style={{flexDirection:'column',display:'flex',justifyContent:'flex-start', alignItems:'baseline'}}>
                                        <span>Address :  </span>
                                        <p style={{display:'flex', alignItems:'center',gap:'6px'}}>
                                        <img src={EmpLocation} alt=''/>No3/1, 1street, west mambalam, chennai-33</p>
                                        </li>

                                        <li style={{flexDirection:'column',display:'flex',justifyContent:'flex-start', alignItems:'baseline'}}>
                                        <span>Description :  </span>
                                        <p style={{display:'flex', alignItems:'center',gap:'6px'}}>
                                        No3/1, 1street, west mambalam, chennai-33It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.........</p>
                                        </li>

                                     </ul>
                                 </div>
                
                               
                                   <div className='emp-button-box'>
                                   <button className='emp-otp-btn'>Generate OTP</button>
                                   <button className='emp-cancel-btn'>Cancel Booking </button>

                                   </div>


                               
                            </div> 
             
               </SwiperSlide>

               <SwiperSlide> 
              <div className='slot-card-item emp-swipe-card'>
                                 <div className='slot-card-head'>
                                    <div className='slot-card-left'>
                                           <div className='inline-text'>
                                             <h2 className='slot-card-title' >Picker Service</h2>
                                             <span className='slot-review-count'>(44k review )</span>
                                           </div>

                                           {/* <div className='inline-text'>
                                             <p className='slot-workday'>Working per day :</p>
                                             <span className='slot-prize'>&#8377; 200</span>
                                           </div> */}
                                           <div className='inline-text'>
                                           <button className='view-detail-btn'>View Details</button>

                                           </div>
                                    </div>
                                    <div className='slot-card-right'>
                                    <div className="user-service-image">
                                    <div className="user-service-rating">
                                             <span>★ 4.5</span>
                                        </div>
                                      <img src={Service_img} alt='' />
                                    </div>
                                    </div>
                                 </div>

                                 <div className='slot-card-body' style={{borderBottom:'none'}}>
                                     <div className='emp-pack-detail-container'>
                                         <div className='emp-pack-detail-item'>
                                            <p>Service Method :</p>
                                            <span>Day</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Working Duration :</p>
                                            <span>01 Day</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Preferred Date : </p>
                                            <span>August 26 2024</span>
                                         </div>
                                         <div className='emp-pack-detail-item'>
                                            <p>Preferred Time :</p>
                                            <span>12 : 00 pm</span>
                                         </div>
                                     </div>
                                     <ul className='emp-pers-detail-box'>
                                        <li><span>Mobile number : </span><p>96542584563</p></li>
                                        <li><span>E-mail ID :  </span><p>Sivakarthikayan.03@gmail.com </p></li>

                                        <li style={{flexDirection:'column',display:'flex',justifyContent:'flex-start', alignItems:'baseline'}}>
                                        <span>Address :  </span>
                                        <p style={{display:'flex', alignItems:'center',gap:'6px'}}>
                                        <img src={EmpLocation} alt=''/>No3/1, 1street, west mambalam, chennai-33</p>
                                        </li>

                                        <li style={{flexDirection:'column',display:'flex',justifyContent:'flex-start', alignItems:'baseline'}}>
                                        <span>Description :  </span>
                                        <p style={{display:'flex', alignItems:'center',gap:'6px'}}>
                                        No3/1, 1street, west mambalam, chennai-33It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.........</p>
                                        </li>

                                     </ul>
                                 </div>
                
                               
                                   <div className='emp-button-box'>
                                   <button className='emp-otp-btn'>Generate OTP</button>
                                   <button className='emp-cancel-btn'>Cancel Booking </button>

                                   </div>


                               
                            </div> 
             
               </SwiperSlide>
          </Swiper>
       </div>
      </div>
    </>
  )
}

export default EmpBookListCardSlider

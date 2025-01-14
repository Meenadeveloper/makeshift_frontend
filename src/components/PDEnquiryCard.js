import Pdenquiry2 from '../assets/images/pdenquiry1.png';
import Pdenquiry3 from '../assets/images/pdenquiry2.png';
import Pdenquiry4 from '../assets/images/pdenquiry3.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';              // Import core Swiper styles
import 'swiper/css/pagination';    // Import Pagination styles
import 'swiper/css/navigation';    // Import Navigation styles

// Import Swiper modules correctly
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function PDEnquiryCard() {
  return (
    <>
       <div className='booking-grid-item'>
      <div class="user-service-card">
  
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important', justifyContent:'center' , border:'none'}}>
    
  <div className="pd-enquiry-carousel-box">
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
  </div>
 
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="booking-datas">
        <li><b>From :  </b> Madhavaram , Chennai -39</li>
        <li><b>To  : </b>  West mambalam , Chennai - 33 </li>
        <li><b>Mobile number :  </b> 9654785621</li>
        <li><b>Date :   </b> August 24 2024</li>
        {/* <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li> */}
        <li><span className='bold-list'>Describe About product  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the
           readable content of a page when looking at its layout content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <div class="user-service-card-date" style={{ borderBottom:'none' }}>
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
         </div> */}

        {/* <li className='button-inline'>
            <button type="" className='pending-btn'>Pending</button>
            <button type="" className='cancel-btn'>Cancel Booking</button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>

      <div className='booking-grid-item'>
      <div class="user-service-card">
  
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important', justifyContent:'center' , border:'none'}}>
    
  <div className="pd-enquiry-carousel-box">
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
  </div>
 
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="booking-datas">
        <li><b>From :  </b> Madhavaram , Chennai -39</li>
        <li><b>To  : </b>  West mambalam , Chennai - 33 </li>
        <li><b>Mobile number :  </b> 9654785621</li>
        <li><b>Date :   </b> August 24 2024</li>
        {/* <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li> */}
        <li><span className='bold-list'>Describe About product  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the
           readable content of a page when looking at its layout content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <div class="user-service-card-date" style={{ borderBottom:'none' }}>
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
         </div> */}

        {/* <li className='button-inline'>
            <button type="" className='pending-btn'>Pending</button>
            <button type="" className='cancel-btn'>Cancel Booking</button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>
      <div className='booking-grid-item'>
      <div class="user-service-card">
  
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important', justifyContent:'center' , border:'none'}}>
    
  <div className="pd-enquiry-carousel-box">
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
  </div>
 
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="booking-datas">
        <li><b>From :  </b> Madhavaram , Chennai -39</li>
        <li><b>To  : </b>  West mambalam , Chennai - 33 </li>
        <li><b>Mobile number :  </b> 9654785621</li>
        <li><b>Date :   </b> August 24 2024</li>
        {/* <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li> */}
        <li><span className='bold-list'>Describe About product  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the
           readable content of a page when looking at its layout content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <div class="user-service-card-date" style={{ borderBottom:'none' }}>
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
         </div> */}

        {/* <li className='button-inline'>
            <button type="" className='pending-btn'>Pending</button>
            <button type="" className='cancel-btn'>Cancel Booking</button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>
      <div className='booking-grid-item'>
      <div class="user-service-card">
  
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important', justifyContent:'center' , border:'none'}}>
    
  <div className="pd-enquiry-carousel-box">
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
  </div>
 
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="booking-datas">
        <li><b>From :  </b> Madhavaram , Chennai -39</li>
        <li><b>To  : </b>  West mambalam , Chennai - 33 </li>
        <li><b>Mobile number :  </b> 9654785621</li>
        <li><b>Date :   </b> August 24 2024</li>
        {/* <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li> */}
        <li><span className='bold-list'>Describe About product  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the
           readable content of a page when looking at its layout content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <div class="user-service-card-date" style={{ borderBottom:'none' }}>
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
         </div> */}

        {/* <li className='button-inline'>
            <button type="" className='pending-btn'>Pending</button>
            <button type="" className='cancel-btn'>Cancel Booking</button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>
      <div className='booking-grid-item'>
      <div class="user-service-card">
  
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important', justifyContent:'center' , border:'none'}}>
    
  <div className="pd-enquiry-carousel-box">
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
  </div>
 
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="booking-datas">
        <li><b>From :  </b> Madhavaram , Chennai -39</li>
        <li><b>To  : </b>  West mambalam , Chennai - 33 </li>
        <li><b>Mobile number :  </b> 9654785621</li>
        <li><b>Date :   </b> August 24 2024</li>
        {/* <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li> */}
        <li><span className='bold-list'>Describe About product  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the
           readable content of a page when looking at its layout content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <div class="user-service-card-date" style={{ borderBottom:'none' }}>
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
         </div> */}

        {/* <li className='button-inline'>
            <button type="" className='pending-btn'>Pending</button>
            <button type="" className='cancel-btn'>Cancel Booking</button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>
 <div className='booking-grid-item'>
 <div class="user-service-card">


<div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important', justifyContent:'center' , border:'none'}}>

<div className="pd-enquiry-carousel-box">
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
</div>

<div class="user-service-card-footer" style={{paddingTop:'10px'}}>
<ul class="booking-datas">
   <li><b>From :  </b> Madhavaram , Chennai -39</li>
   <li><b>To  : </b>  West mambalam , Chennai - 33 </li>
   <li><b>Mobile number :  </b> 9654785621</li>
   <li><b>Date :   </b> August 24 2024</li>
   {/* <li><span className='bold-list'>Address : </span> 
   <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
   <img src={Location} alt="" />
   <p>No3/1, 1street, west mambalam, chennai-33</p>
   </div>
   </li> */}
   <li><span className='bold-list'>Describe About product  </span> 
   <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
   <p>It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout content of a page when looking at its layout</p>
   </div>
   </li>
   {/* <div class="user-service-card-date" style={{ borderBottom:'none' }}>
<div class="user-service-card-date-item">
<span>Date : </span>
<p>August 24 2024</p>
</div>
<div class="user-service-card-date-item">
<span>Time : </span>
<p>12 : 00 pm</p>
</div>
<div class="user-service-card-date-item">
<span>Working Days :</span>
<p>1 Days</p>
</div>
    </div> */}

   {/* <li className='button-inline'>
       <button type="" className='pending-btn'>Pending</button>
       <button type="" className='cancel-btn'>Cancel Booking</button>
   </li> */}
</ul> 

</div>
 </div>
 </div>
     
    </>
  )
}

export default PDEnquiryCard

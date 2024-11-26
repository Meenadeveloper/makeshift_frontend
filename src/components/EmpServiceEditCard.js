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

import Delete from '../assets/images/delete.svg';
import Edit from '../assets/images/edit.svg';

function EmpServiceEditCard() {

    // Array of card data
  const cardData = [
    {
      id: 1,
      from: "Madhavaram , Chennai -39",
      to: "West Mambalam , Chennai - 33",
      mobile: "9654785621",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      images: [Pdenquiry4, Pdenquiry2, Pdenquiry3, Pdenquiry2, Pdenquiry3],
    },
    {
      id: 2,
      from: "Adyar, Chennai -20",
      to: "Thiruvanmiyur , Chennai - 41",
      mobile: "9876543210",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      images: [Pdenquiry2, Pdenquiry3, Pdenquiry4, Pdenquiry2, Pdenquiry3],
    },
    // Add 4 more card objects to total 6
    {
      id: 3,
      from: "Velachery , Chennai -42",
      to: "Guindy , Chennai - 25",
      mobile: "9123456780",
      description: "This is another example of content that captures attention.",
      images: [Pdenquiry3, Pdenquiry4, Pdenquiry2, Pdenquiry2, Pdenquiry3],
    },
    {
      id: 4,
      from: "Tambaram , Chennai -600",
      to: "Anna Nagar , Chennai -40",
      mobile: "9988776655",
      description: "Some engaging content about the product is here.",
      images: [Pdenquiry4, Pdenquiry2, Pdenquiry3, Pdenquiry2, Pdenquiry3],
    },
    {
      id: 5,
      from: "Nungambakkam , Chennai -34",
      to: "T Nagar , Chennai -17",
      mobile: "9345678901",
      description: "The product details are mentioned here for the reader.",
      images: [Pdenquiry2, Pdenquiry3, Pdenquiry4],
    },
    {
      id: 6,
      from: "Royapettah , Chennai -14",
      to: "Mylapore , Chennai - 27",
      mobile: "9534567890",
      description: "Further product information presented in a readable format.",
      images: [Pdenquiry3, Pdenquiry2, Pdenquiry4],
    }
  ];
  return (
    <>
    <div className='booking-card-box' style={{maxWidth:'850px'}}>
      <div className='emp-book-card-box'>
      {cardData.map((card) => (
        <div className='emp-book-item' key={card.id}>
          <div className='slot-card-item emp-swipe-card'>
            <div className='slot-card-head' style={{ borderBottom: 'none' , display:'flex', justifyContent:'center'}}>
            <div className='' style={{maxWidth:'330px'}}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]} // Add required Swiper modules
                spaceBetween={20}                           // Space between slides
                slidesPerView={3}                           // Show 3 slides at a time
                loop={true}                                 // Enable looping
                autoplay={{
                  delay: 3000,                              // Auto-slide delay (3 seconds)
                  disableOnInteraction: false,              // Auto-slide will continue even after interaction
                }}
                pagination={{
                  clickable: true,                          // Enable clickable pagination
                }}
                navigation={false}                           // Disable navigation arrows
              >
                {card.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="pd-enquiry-carousel-item">
                      <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
              
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
                

            <div class="emp-button-box" style={{ paddingTop:'0px' }}>
            <button class="emp-cancel-btn"><img src={Edit} alt="" />Edit</button>

                <button class="emp-otp-btn">
                    <img src={Delete} alt="" />Delete</button>
                    
                    </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  )
}

export default EmpServiceEditCard

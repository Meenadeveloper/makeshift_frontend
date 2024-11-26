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

function EmployeePDEnquiryCard() {
  // Array of card data
  const cardData = [
    {
      id: 1,
      from: "Madhavaram , Chennai -39",
      to: "West Mambalam , Chennai - 33",
      mobile: "9654785621",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      images: [Pdenquiry4, Pdenquiry2, Pdenquiry3, Pdenquiry3, Pdenquiry4],
    },
    {
      id: 2,
      from: "Adyar, Chennai -20",
      to: "Thiruvanmiyur , Chennai - 41",
      mobile: "9876543210",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      images: [Pdenquiry2, Pdenquiry3, Pdenquiry4, Pdenquiry3, Pdenquiry4],
    },
    // Add 4 more card objects to total 6
    {
      id: 3,
      from: "Velachery , Chennai -42",
      to: "Guindy , Chennai - 25",
      mobile: "9123456780",
      description: "This is another example of content that captures attention.",
      images: [Pdenquiry3, Pdenquiry4, Pdenquiry2, Pdenquiry3, Pdenquiry4],
    },
    {
      id: 4,
      from: "Tambaram , Chennai -600",
      to: "Anna Nagar , Chennai -40",
      mobile: "9988776655",
      description: "Some engaging content about the product is here.",
      images: [Pdenquiry4, Pdenquiry2, Pdenquiry3, Pdenquiry3, Pdenquiry4],
    },
    {
      id: 5,
      from: "Nungambakkam , Chennai -34",
      to: "T Nagar , Chennai -17",
      mobile: "9345678901",
      description: "The product details are mentioned here for the reader.",
      images: [Pdenquiry2, Pdenquiry3, Pdenquiry4, Pdenquiry3, Pdenquiry4],
    },
    {
      id: 6,
      from: "Royapettah , Chennai -14",
      to: "Mylapore , Chennai - 27",
      mobile: "9534567890",
      description: "Further product information presented in a readable format.",
      images: [Pdenquiry3, Pdenquiry2, Pdenquiry4, Pdenquiry3, Pdenquiry4],
    }
  ];

  return (
    <div className='emp-book-card-box'  style={{maxWidth:'850px'}}>
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

            <div className='slot-card-body' style={{ borderBottom: 'none' }}>
              <ul className='emp-pers-detail-box'>
                <li style={{ paddingBottom: '10px' }}>
                  <span>From : </span><p>{card.from}</p>
                </li>
                <li style={{ paddingBottom: '10px' }}>
                  <span>To : </span><p>{card.to}</p>
                </li>
                <li style={{ paddingBottom: '10px' }}>
                  <span>Mobile number : </span><p>{card.mobile}</p>
                </li>
                <li style={{
                  flexDirection: 'column',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'baseline',
                  paddingBottom: '10px',
                }}>
                  <span>Describe About product : </span>
                  <p style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    {card.description}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeePDEnquiryCard;

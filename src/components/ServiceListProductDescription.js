
import '../styles/components/pages.css';
import thumbnail1 from '../assets/images/thumbnail-img1.jpg';
import thumbnail2 from '../assets/images/thumbnail2.jpg';

import thumbnail3 from '../assets/images/thumbnail3.jpg';

import { ReactComponent as YellowStar } from '../assets/images/icons/twemoji_star.svg';
import {ReactComponent as Trained } from '../assets/images/icons/octicon_people-16.svg';
import {ReactComponent as Verified } from '../assets/images/icons/verifier.svg';
import {ReactComponent as Warrenty } from '../assets/images/icons/icon-park-outline_people-safe.svg';
import {ReactComponent as Hexogen } from '../assets/images/icons/tabler_hexagon-letter-i-filled.svg';
import {ReactComponent as Share } from '../assets/images/icons/material-symbols_share.svg';
import {ReactComponent as BlackStar } from '../assets/images/icons/black_star.svg';
import {ReactComponent as Books } from '../assets/images/icons/books.svg';
import {ReactComponent as Plus } from '../assets/images/icons/plus.svg';
import {ReactComponent as SmallStar } from '../assets/images/icons/material-symbols_star.svg';

import { Link } from 'react-router-dom';



import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


function ServiceListProductDescription({ onClose }) {
  return (
    <>
       <div className='product-description-overlay'>
         <div className='product-desc-container'>
         <button type="" 
         className='product-desc-container-close'
         onClick={onClose}
         ><span class="material-icons">close</span></button>

           <h2 className='product-description-head'>Description</h2>
          
            <div className='flex-wrap'>
                {/* image carousel */}
                
                <Swiper
            className="thumnail-image-container"
            grabCursor={true}  // This enables the drag cursor
            modules={[Pagination, Autoplay]}  // Added Autoplay module
            spaceBetween={10} // Space between slides
            slidesPerView={1} // Only one slide visible at a time
            loop={true} // Infinite loop of slides
            autoplay={{
              delay: 3000, // Auto slide delay (in ms)
              disableOnInteraction: false, // Auto slide continues even when user interacts
            }}
            pagination={{
              clickable: true, // Make dots clickable
              type: 'bullets', // Use dots for pagination
            }}
          >     
           <SwiperSlide>
           <div className='thumpnail-carousel-item'>
                    <div className='thumbnail-big-image'>
                        <img src={thumbnail1} alt="" />
                    </div>
                    <div className='thumbnail-image-box'>
                    <div className='thumbnail-image'>
                    <img src={thumbnail2} alt="" />
                    </div>
                    <div className='thumbnail-image'>
                    <img src={thumbnail3} alt="" />
                    </div>
                    </div>
                   
                </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='thumpnail-carousel-item'>
                    <div className='thumbnail-big-image'>
                        <img src={thumbnail1} alt="" />
                    </div>
                    <div className='thumbnail-image-box'>
                    <div className='thumbnail-image'>
                    <img src={thumbnail2} alt="" />
                    </div>
                    <div className='thumbnail-image'>
                    <img src={thumbnail3} alt="" />
                    </div>
                    </div>
                   
                </div>
           </SwiperSlide>
                
               
             </Swiper>
             {/* prize box */}
             <div className='flex-col' style={{ maxWidth:'450px',minWidth:'300px', width:'450px' }}>
                <div style={{ display:'flex',flexDirection:'row', gap:'15px', alignItems:'center', }}>
                <h2 className='prod-head'>Picker Service </h2>
                <span className='star-count'><YellowStar className='yellow-star'/>4.5</span>
                </div>

                <span style={{ color:'#575757',fontSize:'12px' }}>(44k review )</span>

                          <div className="card-text-box" style={{ paddingLeft:'0px', borderBottom:'none',paddingTop:'10px' }}>
                      <div className="text-inline" style={{ paddingBottom:'15px' , paddingTop:'10px'}}>
                        <p className="card-sub-head">Working Per Day</p>
                        <span className="prize">&#8377; 1000</span>
                      </div>
                      <div className="text-inline" style={{ paddingBottom:'15px'}}>
                        <p className="card-sub-head">Working Per Hour</p>
                        <span className="prize">&#8377; 200</span>
                      </div>
                    </div>

                    {/* Card Buttons */}
                  <div className="button-flex" style={{ padding:' 15px 0px !important;',gap:'15px',justifyContent:'space-evenly' }}>
                    <Link  to="/service-booking" className="primary-button"
                     style={{width:'160px', margin:'0px', height:'45px',display:'flex',
                      justifyContent:'center', alignItems:'center',gap:'10px' }}> <Books /><p>Book Service</p> 
                      </Link>
                    <Link to="/picker-service-booking" className="secondary-button"
                     style={{ width:'160px',margin:'0px',background:' var(--primary-color);',
                      height:'45px',display:'flex',
                       justifyContent:'center', alignItems:'center',gap:'10px' }}>
                        <Plus /><p>Add to Cart</p> </Link>
                  </div>
             </div>
            </div>
            <p className='desc-note'>( Note: If you extend the working hours, you will be required to pay an additional amount for the extra hours )</p>
             <div className='about-text' style={{textAlign:'left'}}>
              <h2>About us</h2>
              <ul>
                <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
                <li>They use picking lists or handheld devices to find and gather the correct items</li>
              </ul>   
             </div>
             <div className='overview-box'>
                <div className='inner-overview'>
                  <h2>Overview</h2>

                 <div class="overview-icons">
                   <div className='overview-item'>
                   <div class="icon">
                    <Trained />
                    <p>Trained Professional</p>
                   </div>
                   <div className='over-par'>Get service from trusted and verified partner with professional skills and experience.</div>
                    </div> 
                    <div className='overview-item'>
                    <div class="icon">
                    <Verified />
                    <p>Background Verified</p>
                   </div>
                   <div className='over-par'>Get service from trusted and verified partner with professional skills and experience.</div>

                    </div>
                    <div className='overview-item'>
                <div class="icon">
                <Warrenty />
                    <p>Service-specific options</p>
                </div>
                <div className='over-par'>Get service from trusted and verified partner with professional skills and experience.</div>

                </div>
                
                
            </div>
                </div>
             </div>
             <div className='about-text'>
              <h2>Please note</h2>
              <ul style={{ listStyle:'none' }}>
                <li style={{ display:'flex',alignItems:'center',flexDirection:'row', gap:'6px',paddingBottom:'15px' }}>
                    <Hexogen style={{ marginRight:'15px' }} />
                <p>Responsible for selecting items from the warehouse 
                shelves based on customer orders</p> 
                </li>
                <li style={{ display:'flex',alignItems:'center',flexDirection:'row', gap:'6px',paddingBottom:'15px' }}>
                    <Hexogen style={{ marginRight:'15px' }}  />
                <p>They use picking lists or handheld devices to find and 
                gather the correct items    </p>
                 </li>
              </ul>
              <div class="share-section">
                <div className='share-box'>
                    <p>Share this service with your loved ones</p>

                    
            <button class="share-button">
               <Share />  Share
            </button>
        </div>
                </div>
             </div>

              {/*review  */}
              <div className='flex-wrap'>
                <div className='flex-col'>
                <h2 className='prod-head' style={{ display:'inline-flex' , gap:'10px'}}> <BlackStar /> 4.2</h2>
                <span style={{ color:'#575757',fontSize:'14px' }}>20 reviews</span>
                <div class="review-summary">
                <div class="star-bar" style={{ display:'inline-flex', gap:'10px' , alignItems:'center', justifyContent:'center'}}>
                    <span><SmallStar style={{ marginRight:'10px' }} />5</span>
                    <div class="bar"><div class="filled" style={{width: '85%'}}></div></div>
                    <span>17</span>
                </div>
                <div class="star-bar" style={{ display:'inline-flex', gap:'10px' , alignItems:'center', justifyContent:'center'}}>
                    <span><SmallStar style={{ marginRight:'10px' }} />4</span>
                    <div class="bar"><div class="filled" style={{width: '10%'}}></div></div>
                    <span>2</span>
                </div>
                <div class="star-bar" style={{ display:'inline-flex', gap:'10px' , alignItems:'center', justifyContent:'center'}}>
                    <span><SmallStar style={{ marginRight:'10px' }} />3</span>
                    <div class="bar"><div class="filled" style={{width: '0%'}}></div></div>
                    <span>0</span>
                </div>
                <div class="star-bar" style={{ display:'inline-flex', gap:'10px' , alignItems:'center', justifyContent:'center'}}>
                    <span><SmallStar style={{ marginRight:'10px' }} />2</span>
                    <div class="bar"><div class="filled" style={{width: '5%'}}></div></div>
                    <span>1</span>
                </div>
                <div class="star-bar" style={{ display:'inline-flex', gap:'10px' , alignItems:'center', justifyContent:'center'}}>
                    <span><SmallStar style={{ marginRight:'10px' }} />1</span>
                    <div class="bar"><div class="filled" sstyle={{width: '0%'}}></div></div>
                    <span>0</span>
                </div>
            </div>
                </div>
                <div className='all-review-box'>
                    <h2>All reviews</h2>
                    <ul className='all-review-list'>
                        <li>
                        <div class="review-item">
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <strong style={{ paddingBottom:'10px' }}>Ashok:</strong> 
                <span style={{ paddingBottom:'10px' , paddingLeft:'5px'}}>Good Service</span> </p>
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <span  style={{ paddingBottom:'10px' }}> Aug 25, 2024</span>
                    <strong style={{ paddingBottom:'10px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center' }} >
                        <SmallStar style={{ marginRight:'10px',  }} className='greeen-star' />
                        <p  style={{ color:'green'  }}>4.2</p>
                        </strong>
                    </p>
                    </div>
                        </li>
                        <li>
                        <div class="review-item">
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <strong style={{ paddingBottom:'10px' }}>Ashok:</strong> 
                <span style={{ paddingBottom:'10px' , paddingLeft:'5px'}}>Good Service</span> </p>
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <span  style={{ paddingBottom:'10px' }}> Aug 25, 2024</span>
                    <strong style={{ paddingBottom:'10px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center' }} >
                        <SmallStar style={{ marginRight:'10px',  }} className='greeen-star' />
                        <p  style={{ color:'green'  }}>4.2</p>
                        </strong>
                    </p>
                    </div>
                        </li>
                        <li>
                        <div class="review-item">
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <strong style={{ paddingBottom:'10px' }}>Ashok:</strong> 
                <span style={{ paddingBottom:'10px' , paddingLeft:'5px'}}>Good Service</span> </p>
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <span  style={{ paddingBottom:'10px' }}> Aug 25, 2024</span>
                    <strong style={{ paddingBottom:'10px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center' }} >
                        <SmallStar style={{ marginRight:'10px',  }} className='greeen-star' />
                        <p  style={{ color:'green'  }}>4.2</p>
                        </strong>
                    </p>
                    </div>
                        </li>
                        <li>
                        <div class="review-item">
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <strong style={{ paddingBottom:'10px' }}>Ashok:</strong> 
                <span style={{ paddingBottom:'10px' , paddingLeft:'5px'}}>Good Service</span> </p>
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <span  style={{ paddingBottom:'10px' }}> Aug 25, 2024</span>
                    <strong style={{ paddingBottom:'10px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center' }} >
                        <SmallStar style={{ marginRight:'10px',  }} className='greeen-star' />
                        <p  style={{ color:'green'  }}>4.2</p>
                        </strong>
                    </p>
                    </div>
                        </li>
                        <li>
                        <div class="review-item">
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <strong style={{ paddingBottom:'10px' }}>Ashok:</strong> 
                <span style={{ paddingBottom:'10px' , paddingLeft:'5px'}}>Good Service</span> </p>
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <span  style={{ paddingBottom:'10px' }}> Aug 25, 2024</span>
                    <strong style={{ paddingBottom:'10px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center' }} >
                        <SmallStar style={{ marginRight:'10px',  }} className='greeen-star' />
                        <p  style={{ color:'green'  }}>4.2</p>
                        </strong>
                    </p>
                    </div>
                        </li>
                        <li>
                        <div class="review-item">
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <strong style={{ paddingBottom:'10px' }}>Ashok:</strong> 
                <span style={{ paddingBottom:'10px' , paddingLeft:'5px'}}>Good Service</span> </p>
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <span  style={{ paddingBottom:'10px' }}> Aug 25, 2024</span>
                    <strong style={{ paddingBottom:'10px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center' }} >
                        <SmallStar style={{ marginRight:'10px',  }} className='greeen-star' />
                        <p  style={{ color:'green'  }}>4.2</p>
                        </strong>
                    </p>
                    </div>
                        </li>
                        <li>
                        <div class="review-item">
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <strong style={{ paddingBottom:'10px' }}>Ashok:</strong> 
                <span style={{ paddingBottom:'10px' , paddingLeft:'5px'}}>Good Service</span> </p>
                <p style={{ display:'flex', flexDirection:'column' }}>
                    <span  style={{ paddingBottom:'10px' }}> Aug 25, 2024</span>
                    <strong style={{ paddingBottom:'10px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center' }} >
                        <SmallStar style={{ marginRight:'10px',  }} className='greeen-star' />
                        <p  style={{ color:'green'  }}>4.2</p>
                        </strong>
                    </p>
                    </div>
                        </li>
                    </ul>
                </div>
              </div>
              <div className='flex-wrap'>
                {/* Card Buttons */}
                <div className="button-flex" style={{ padding:' 15px 0px !important;',gap:'15px',justifyContent:'space-evenly' }}>
                    <Link  to="/service-booking" className="primary-button" 
                    style={{width:'160px', margin:'0px', height:'45px',display:'flex', justifyContent:'center',
                     alignItems:'center',gap:'10px' }}> <Books /><p>Book Service</p> 
                     </Link>
                    <button className="secondary-button" style={{ width:'160px',margin:'0px',background:' var(--primary-color);', height:'45px',display:'flex', justifyContent:'center', alignItems:'center',gap:'10px' }}><Plus /><p>Add to Cart</p> </button>
                  </div>
              </div>
         </div>
      </div>
    </>
  )
}

export default ServiceListProductDescription

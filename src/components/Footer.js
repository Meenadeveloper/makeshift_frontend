import React from 'react'
import FooterLogo from '../assets/logo/footer_logo.jpg';
import Instagram from '../assets/images/instagram.png';
function Footer() {
  return (
    <>
      <footer className='footer-bg'>
        <div className='container'>
          <div className='footer-box'>
            <div className='footer-item footer-image-box'>
            <img src={FooterLogo} className='footer-logo' />

          </div>
          </div>
        <div className='footer-box'>
        <div className='footer-item'>
                  <ul className='footer-list'>
                    <li className='footer-heading'>Company</li>
                    <li className='footer-link'><a href="#">About Us</a></li>
                    <li className='footer-link'><a href="#">Terms & Condition</a></li>
                    <li className='footer-link'><a href="#">Privacy Policy</a></li>
                    <li className='footer-link'><a href="#">Service</a></li>
                </ul>
        </div>
        <div className='footer-item'>
                  <ul className='footer-list'>
                    <li className='footer-heading'>For Customer</li>
                    <li className='footer-link'><a href="#" >UC Review</a></li>
                    <li  className='footer-link'><a href="#">Categories near you</a></li>
                    <li  className='footer-link'><a href="#">Contact us</a></li>
                    <li  className='footer-link'><a href="#">Blog</a></li>
                </ul>
        </div>
        <div className='footer-item'>
                   <ul className='footer-list'>
                    <li className='footer-heading'>For Partners</li>
                    <li  className='footer-link'><a href="#">Register as a professional</a></li>
                </ul>
        </div>
        <div className='footer-item'>
        <div class="footer-section social-links">
                <p className='footer-heading'>Social Links</p>
                <div class="footer-social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#"><i class="fab fa-twitter"></i>
                    </a>
                    <a href="#"><i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#"> <img src={Instagram}  />
                    </a>
                </div>
            </div>
        </div>
       
    </div>
        </div>
      </footer>

    </>
  )
}

export default Footer

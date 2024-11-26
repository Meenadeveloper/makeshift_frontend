import '../styles/components/header.css';
import HomeLogo from '../assets/logo/header_logo.jpg';
import ProfilePic from '../assets/images/profile_pic.jpg';
import React, { useState, useEffect, useRef } from 'react'; // Only one import for React
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/sidebarSlice';

import { ReactComponent as ProfileIcon } from '../assets/images/gg_profile.svg';
import { ReactComponent as LogoutIcon } from '../assets/images/solar_logout-3-bold.svg';
import CategoryPopup from './CategoryPopup';

function UserboardHeader() {
  const dispatch = useDispatch();


  const [isSticky, setIsSticky] = useState(false); // State for sticky header

  // Function to check scroll position and set sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(false);
  const loginPanelRef = useRef(null);
  const toggleLoginPanel = () => {
    setIsLoginPanelOpen(prevState => !prevState);
  };

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginPanelRef.current && !loginPanelRef.current.contains(event.target)) {
        setIsLoginPanelOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  

  const [searchQuery, setSearchQuery] = useState(''); // State to track the input
  const [isTyping, setIsTyping] = useState(false); // State to track if the user is typing
  // Handle change in search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsTyping(e.target.value.length > 0); // If there's text, hide the icon
  };

  
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);
  const SearchPanelRef = useRef(null);

  const toggleSearchPanel = () => {
    setIsSearchPanelOpen(prevState => !prevState);
  };

// Close the search panel when clicking outside
useEffect(() => {
  const handleClickOutsidePanel = (event) => {
    // Check if the click happened outside the search panel
    if (SearchPanelRef.current && !SearchPanelRef.current.contains(event.target)) {
      setIsSearchPanelOpen(false); // Close the search panel
    }
  };

  // Adding event listener for clicks outside the panel
  document.addEventListener('mousedown', handleClickOutsidePanel);

  // Cleanup the event listener when the component is unmounted or re-rendered
  return () => {
    document.removeEventListener('mousedown', handleClickOutsidePanel);
  };
}, []); // Empty dependency array ensures this runs only once on mount and unmount



const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);

  const handleCategoryClick = () => {
    setIsCategoryPopupOpen(true); // Open the popup when Categories link is clicked
  };

  const handleClosePopup = () => {
    setIsCategoryPopupOpen(false); // Close the popup when close button is clicked
  };


  // State to track the screen width
  const [isMobile, setIsMobile] = useState(false);

  // Update state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 999); // Set to true for screens <= 768px
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize); // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the listener
    };
  }, []);



 // Define style objects for hiding and showing the mobile menu box
  const hidemobilemenuicon = { display: 'none' };
  const showmobilemenuicon = { display: 'flex' };
  // Check if the current route is '/list-of-services'
  const mobileMenuIconDisplay =window.location.pathname === '/list-of-services'  || !isMobile ? hidemobilemenuicon : showmobilemenuicon;
  return (
    <>
       <header className={isSticky ? 'sticky-header' : ''}>
        <div className='header-box z-index'>
          <div className='container'>
            <div className='header-bg'>
             
              <div className='logo-box'>
                <a href='/makeshift'><img src={HomeLogo} alt="Home Logo" /></a>
              </div>
              {/* NAVIBAR */}
              <ul className='navibar desktop-menu-box'>
                <li className='menu-link-box'>
                  <Link to="/makeshift" className="menu-link">Home</Link>
                </li>
                <li className='menu-link-box' onClick={handleCategoryClick}>
                  <Link to="#" className="menu-link">Categories</Link>
                </li>
                <li className='menu-link-box'>
                  <Link to="/instand-booking" className="menu-link">Booking History</Link>
                </li>
              </ul>

              <ul className='navibar mobile-menu-box' style={mobileMenuIconDisplay}>
                <button className='mobileMenu-open'  onClick={() => dispatch(toggleSidebar())}>
                  <i className="material-icons">menu</i>
                </button>
                
              </ul>

              <ul className='navibar'>
                
                <li className='menu-link-box '>
                  <Link to="#" className="menu-link location-menu">
                    <span className="material-icons">location_on</span>
                    <span className='location-text'>West Mambalam, Chennai</span>
                    <span className="material-icons">expand_more</span>
                  </Link>
                </li>
                <li className='menu-link-box'>
                  <Link to="#" className="menu-link notification-menu">
                    <span className="material-icons">notifications</span>
                    <div className='small-dot'></div>
                  </Link>
                </li>
                <li className='menu-link-box'>
                  <Link to="/picker-service-booking" className="menu-link cart-menu">
                    <span className="material-icons">shopping_basket</span>
                  </Link>
                </li>
                 {/* Search Menu */}
                 <li className='menu-link-box'>
                  <button className="menu-link search-menu" onClick={toggleSearchPanel}>
                    <span className="material-icons">search</span>
                  </button>
                  {isSearchPanelOpen && (
                     
                      <div className="search-popup-box" ref={SearchPanelRef}>
                      <input
                        type="search"
                        name="search"
                        value={searchQuery}
                        placeholder="Search what did you want"
                        onChange={handleSearchChange} // Update the value as the user types
                      />
                      {!isTyping && <i className="material-icons">search</i>} {/* Hide icon when typing */}
                    </div>
                     
                    
                  )}
                </li>

                 {/* User Login Icon */}
                 <li className='menu-link-box ' ref={loginPanelRef}>
                  <button onClick={toggleLoginPanel} className="menu-link user-login">
                    <img src={ProfilePic} alt="Profile" />
                  </button>

                  {/* Login Panel */}
                  {isLoginPanelOpen && (
                    <ul className=' login-panel'>
                      <li className='menu-link-box'>
                        <ProfileIcon style={{ marginRight: '10px' }} className='menu-icon' />
                        <Link to="/user-edit" className="menu-link">Profile</Link>
                      </li>
                      <li className='menu-link-box'>
                        <LogoutIcon style={{ marginRight: '10px' }} className='menu-icon' />
                        <Link to="/" className="menu-link">Logout</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {isCategoryPopupOpen && <CategoryPopup handleClosePopup={handleClosePopup} />}

      <ul className="footer-mobile-panel" >
      <li className="menu-link-box">
        <i className="material-icons">home</i>
        <Link to="" className="menu-link">Home</Link>
      </li>
      <li className="menu-link-box" onClick={handleCategoryClick}>
        <i className="material-icons">category</i>
        <Link to="#" className="menu-link">Categories</Link>
      </li>
      <li className="menu-link-box">
        <i className="material-icons">calendar_today</i>
        <Link to="/instand-booking" className="menu-link">Booking History</Link>
      </li>
    </ul>
    </>
  )
}

export default UserboardHeader

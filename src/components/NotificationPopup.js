import React, { useState } from 'react';
import Notify from '../assets/images/notification.png';
function NotificationPopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Default is visible

  const handleOverlayClick = () => {
    setIsPopupVisible(false); // Close the popup when overlay is clicked
  };

  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the overlay
  };

  return (
    <>
      {isPopupVisible && (
        <div className="user-notifi-overlay" onClick={handleOverlayClick}>
          {/* Popup */}
          <div className="user-notifi-popup" onClick={handlePopupClick}>
            <h2 style={{fontSize:'15px', fontWeight:'700'}}>Latest Notifications</h2>
            <ul className="user-notifi-notifications">
              <li>
                <img src={Notify} alt="icon" />
                <p><strong>Admin</strong> added new categories so you can explore the <span className="user-notifi-highlight">new service</span></p>
              </li>
              <li>
              <img src={Notify} alt="icon" />
                <p><strong>Trending</strong> service so you can explore the new service</p>
              </li>
              <li>
              <img src={Notify} alt="icon" />
                <p><strong>Successful</strong> booked the kitchen helper service, Thank you</p>
              </li>
              <li>
              <img src={Notify} alt="icon" />
                <p><strong>Admin</strong> added new categories so you can explore the <span className="user-notifi-highlight">new service</span></p>
              </li>
              <li>
              <img src={Notify} alt="icon" />
                <p><strong>Trending</strong> service so you can explore the new service</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NotificationPopup;

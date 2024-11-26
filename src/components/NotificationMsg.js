import Notification_one from '../assets/images/icons/Group 8224 (1).svg';
import Notification_two from '../assets/images/icons/Group 8224 (2).svg';
import Notification_three from '../assets/images/icons/Group 8224.svg';
import Notification_four from '../assets/images/icons/Group 8225.svg';


function NotificationMsg() {
  return (
    <>
      <div className="notification-container">
         <h2>Latest</h2>
         <ul style={{paddingTop:'20px'}}>
            <li className="notification-list-item">
                <div className="notification-img-box">
                    <img src={Notification_one} />
                </div>
                <div className="notification-txt">
                    <p>Admin add new categories so you can explore the  <b>new service</b> </p>
                </div>
            </li>

            <li className="notification-list-item">
                <div className="notification-img-box">
                    <img src={Notification_two} />
                </div>
                <div className="notification-txt">
                    <p><b>Trending</b> service so you can explore the new service</p>
                </div>
            </li>

            <li className="notification-list-item">
                <div className="notification-img-box">
                    <img src={Notification_three} />
                </div>
                <div className="notification-txt">
                    <p><b>Trending</b> service so you can explore the new service</p>
                </div>
            </li>
            <li className="notification-list-item">
                <div className="notification-img-box">
                    <img src={Notification_four} />
                </div>
                <div className="notification-txt">
                    <p>Admin add new categories so you can explore the  <b>new service</b> </p>
                </div>
            </li>
            
            <li className="notification-list-item">
                <div className="notification-img-box">
                    <img src={Notification_three} />
                </div>
                <div className="notification-txt">
                    <p><b>Trending</b> service so you can explore the new service</p>
                </div>
            </li>

            
            <li className="notification-list-item">
                <div className="notification-img-box">
                    <img src={Notification_three} />
                </div>
                <div className="notification-txt">
                    <p><b>Trending</b> service so you can explore the new service</p>
                </div>
            </li>

            
            <li className="notification-list-item">
                <div className="notification-img-box">
                    <img src={Notification_three} />
                </div>
                <div className="notification-txt">
                    <p><b>Trending</b> service so you can explore the new service</p>
                </div>
            </li>
         </ul>
         
    </div>
    </>
  )
}

export default NotificationMsg

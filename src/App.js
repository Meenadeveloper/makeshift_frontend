import './App.css';
import './styles/components/body.css';
import './styles/components/header.css';
import './styles/components/footer.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import Card from './components/Card';
import UserReportPage from './pages/UserReportPage';
import ProductDescription from './components/ProductDescription';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Signin from './components/Signin';
import OtpVerification from './components/OtpVerification';
import FeedbackPopup from './components/FeedbackPopup';
import ListOfServices from './pages/ListOfServices';
import ServiceBooking from './pages/ServiceBooking';
import ListOfServiceBooking from './pages/ListOfServiceBooking';
import PickerListService from './pages/PickerListService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Notification from './pages/Notification';
import PasswordChange from './pages/PasswordChange';
import UserEditPage from './pages/UserEditPage';
import UserHome from './pages/UserHome';
import InstandBookingPage from './pages/InstandBookingPage';
import ScheduledBookingPage from './pages/ScheduledBookingPage';
import PDEnquiryPage from './pages/PDEnquiryPage';
import ServiceEnquiryPage from './pages/ServiceEnquiryPage';
import ServicePopup from './components/ServicePopup';
import CompleteBookingPage from './pages/CompleteBookingPage';
import CancelBookingPage from './pages/CancelBookingPage';
import SlotNotes from './components/SlotNotes';
import EnquiryServiceBooking from './components/EnquiryServiceBooking';
import PrizelessProductDescription from './components/PrizelessProductDescription';
import SlotBookedPage from './pages/SlotBookedPage';
import EmployeeIndex from './pages/EmployeeIndex';
import EmployeeRegisterPgae from './pages/EmployeeRegisterPgae';
import EmployeeLoginPage from './pages/EmployeeLoginPage';
import ServiceUpload from './components/ServiceUpload';
import EmployeeHome from './pages/EmployeeHome';
import EmpEditPage from './pages/EmpEditPage';
import EmpNotification from './pages/EmpNotification';
import EmpPasswordChange from './pages/EmpPasswordChange';
import EmpPrivacyPolicy from './pages/EmpPrivacyPolicy';
import EmpReportQuery from './pages/EmpReportQuery';
import EmpEarnings from './pages/EmpEarnings';
import BookingListPage from './pages/BookingListPage';
import EmployeeCompleted from './pages/EmployeeCompleted';
import EmployeeCancelPage from './pages/EmployeeCancelPage';
import EmployeePDEnquiryPage from './pages/EmployeePDEnquiryPage';
import PDDeliveryPopup from './components/PDDeliveryPopup';
import EmployeeServiceEditPage from './pages/EmployeeServiceEditPage';
import EmpBookingOtp from './components/EmpBookingOtp';
import NotificationPopup from './components/NotificationPopup';

function App() {
  return (
    <>
       <Router  >
        {/* Route Definitions */}
        <Routes>
          <Route path="/makeshift" element={<Home />} />
          <Route path="/user-home" element={<UserHome />} />

          <Route path="/user-edit" element={<UserEditPage/>} />
          <Route path="/instand-booking" element={<InstandBookingPage/>} />
          <Route path="/scheduled-booking" element={<ScheduledBookingPage/>} />
          <Route path="/complete-booking" element={<CompleteBookingPage/>} />
          <Route path="/cancel-booking" element={<CancelBookingPage/>} />

          <Route path="/pd-enquiry" element={<PDEnquiryPage/>} />
          <Route path="/service-enquiry" element={<ServiceEnquiryPage/>} />



          <Route path="/notification" element={<Notification/>} />
          <Route path="/change-password" element={<PasswordChange/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

         <Route path="/user-report" element={<UserReportPage/>} />
          <Route path="/description" element={<ProductDescription/>} />
          <Route path="/enquiry-product-description" element={<PrizelessProductDescription/>} />

          <Route path="/component" element={<Card/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot" element={<ForgotPassword/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/otp-verification" element={<OtpVerification/>} />
          <Route path="/feedback" element={<FeedbackPopup/>} />
          <Route path="/list-of-services" element={<ListOfServices/>} />
          <Route path="/service-booking" element={<ServiceBooking/>} />
          <Route path="/list-of-service-booking" element={<ListOfServiceBooking/>} />
          <Route path="/picker-service-booking" element={<PickerListService/>} />
          <Route path="/enquiry-service-booking" element={<EnquiryServiceBooking/>} />

          <Route path="/service-popup" element={<ServicePopup/>} />

          <Route path="/slotnote-popup" element={<SlotNotes/>} />
          <Route path="/slot-booked" element={<SlotBookedPage/>} />

          {/* employee flow */}

          <Route path="/employee-index" element={<EmployeeIndex/>} />
          <Route path="/employee-register" element={<EmployeeRegisterPgae/>} />
          <Route path="/employee-login" element={<EmployeeLoginPage/>} />
          <Route path="/service-upload" element={<ServiceUpload/>} />
          <Route path="/employee-home" element={<EmployeeHome/>} />
          <Route path="/employee-edit-profile" element={<EmpEditPage/>} />
          <Route path="/employee-notification" element={<EmpNotification/>} />
          <Route path="/employee-service-edit" element={<EmployeeServiceEditPage/>} />
          <Route path="/employee-change-password" element={<EmpPasswordChange/>} />
          <Route path="/employee-privacy-policy" element={<EmpPrivacyPolicy/>} />
          <Route path="/employee-report-query" element={<EmpReportQuery/>} />
          <Route path="/employee-earnings" element={<EmpEarnings/>} />
         
          <Route path="/employee-booking-list" element={<BookingListPage/>} />
          <Route path="/employee-booking-completed" element={<EmployeeCompleted/>} />

          <Route path="/employee-booking-cancel" element={<EmployeeCancelPage/>} />

          <Route path="/employee-booking-pdenquiery" element={<EmployeePDEnquiryPage/>} />

          <Route path="/pd-delivery-popup" element={<PDDeliveryPopup/>} />

          <Route path="/booking-otp" element={<EmpBookingOtp/>} />
          <Route path="/notification-popup" element={<NotificationPopup/>} />









        </Routes>  
    </Router>
    </>
  );
}

export default App;

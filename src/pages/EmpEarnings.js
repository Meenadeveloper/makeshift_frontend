import Footer from '../components/Footer';
import EmpSidebar from '../components/EmpSidebar';

import '../styles/components/pages.css';
import EmployeeHeader from './../components/EmployeeHeader';
import Earning_img1 from '../assets/images/earning_1.png';
import Earning_img2 from '../assets/images/earning_2.png';
import PDFDownload from '../assets/images/ph_download-fill.svg';

import TableProfile from '../assets/images/table_profile.jpg';
import TableProfile2 from '../assets/images/table_profile2.jpg';


function EmpEarnings() {
  return (
    <>
<div className='wrapper'>
        <EmployeeHeader/>
          <div className='container'>
            <div className='page-container'>
            <EmpSidebar/>
            <div className='page-body '>
            <div className='earning-container'>
                <div className='earning-item'>
                    <img src={Earning_img1} alt="earning"/>
                </div>
                <div className='earning-item'>
                <img src={Earning_img2} alt="earning"/>
                </div>
            </div>
            <div className='earning-title-box'>
                <h2>Total Earnings</h2>
                <button className='month-list-box'>
                    <p>This month</p><span className="material-icons">expand_more</span>


                </button>
            </div>
                <div className='booking-card-box' style={{maxWidth:'100%' , padding:'10px'}}>
                <div class="earning-table-container">
        <table class="earning-table-table">
            <thead>
                <tr>
                    <th class="earning-table-header">Service Name</th>
                    <th class="earning-table-header">Date</th>
                    <th class="earning-table-header">Working Duration</th>
                    <th class="earning-table-header">Invoice</th>
                    <th class="earning-table-header">Status</th>
                    <th class="earning-table-header">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="earning-table-cell tabel-cell-profile">
                        <img src={TableProfile} alt="Teaching" class="earning-table-img" /><p>Teaching</p> 
                    </td>
                    <td class="earning-table-cell">15/09/2024</td>
                    <td class="earning-table-cell">01 Day</td>
                    <td class="earning-table-cell">
                    <a href="#" class="earning-table-invoice-link">
                    <img src={PDFDownload} alt="dowload"/>
                    Invoice Download</a></td>
                    <td class="earning-table-cell earning-table-status received">Received</td>
                    <td class="earning-table-cell">Rs : 1,000</td>
                </tr>
                <tr>
                <td class="earning-table-cell tabel-cell-profile">
                        <img src={TableProfile2} alt="Plumbing" class="earning-table-img" /><p>Plumbing</p> 
                    </td>
                    <td class="earning-table-cell">17/09/2024</td>
                    <td class="earning-table-cell">02 Day</td>
                    <td class="earning-table-cell"><a href="#" class="earning-table-invoice-link">
                    <img src={PDFDownload} alt="dowload"/>

                    <p>Invoice Download</p></a></td>
                    <td class="earning-table-cell earning-table-status pending">Pending</td>
                    <td class="earning-table-cell">Rs : 2,000</td>
                </tr>
                <tr>
                <td class="earning-table-cell tabel-cell-profile">
                        <img src={TableProfile2} alt="Car repair" class="earning-table-img" /> <p>Car repair</p>
                    </td>
                    <td class="earning-table-cell">15/09/2024</td>
                    <td class="earning-table-cell">01 Day</td>
                    <td class="earning-table-cell"><a href="#" class="earning-table-invoice-link">
                    <img src={PDFDownload} alt="dowload"/>

                    Invoice Download</a></td>
                    <td class="earning-table-cell earning-table-status received">Received</td>
                    <td class="earning-table-cell">Rs : 1,000</td>
                </tr>
                <tr>
                <td class="earning-table-cell tabel-cell-profile">
                        <img src={TableProfile2} alt="Teaching" class="earning-table-img" /> <p>Teaching</p>
                    </td>
                    <td class="earning-table-cell">15/09/2024</td>
                    <td class="earning-table-cell">01 Day</td>
                    <td class="earning-table-cell"><a href="#" class="earning-table-invoice-link">
                    <img src={PDFDownload} alt="dowload"/>

                    Invoice Download</a></td>
                    <td class="earning-table-cell earning-table-status received">Received</td>
                    <td class="earning-table-cell">Rs : 1,000</td>
                </tr>
                <tr>
                <td class="earning-table-cell tabel-cell-profile">
                        <img src={TableProfile2} alt="Painting" class="earning-table-img" /><p>Painting</p> 
                    </td>
                    <td class="earning-table-cell">15/09/2024</td>
                    <td class="earning-table-cell">01 Day</td>
                    <td class="earning-table-cell"><a href="#" class="earning-table-invoice-link">
                    <img src={PDFDownload} alt="dowload"/>

                    Invoice Download</a></td>
                    <td class="earning-table-cell earning-table-status received">Received</td>
                    <td class="earning-table-cell">Rs : 1,000</td>
                </tr>
                <tr>
                <td class="earning-table-cell tabel-cell-profile">
                        <img src={TableProfile2} alt="Teaching" class="earning-table-img" /> <p>Teaching</p>
                    </td>
                    <td class="earning-table-cell">15/09/2024</td>
                    <td class="earning-table-cell">01 Day</td>
                    <td class="earning-table-cell"><a href="#" class="earning-table-invoice-link">
                    <img src={PDFDownload} alt="dowload"/>

                    Invoice Download</a></td>
                    <td class="earning-table-cell earning-table-status received">Received</td>
                    <td class="earning-table-cell">Rs : 1,000</td>
                </tr>
            </tbody>
        </table>
    </div>
               </div>
            </div>
            </div>  
            </div>
          <Footer/>
        </div>
    </>
  )
}

export default EmpEarnings

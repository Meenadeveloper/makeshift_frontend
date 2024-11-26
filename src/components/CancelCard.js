import Service_img from '../assets/images/service_list.jpg'

function CancelCard() {
  return (
    <>
     <div className='slot-grid-card-box'>
                            <div className='slot-card-item'>
                                 <div className='slot-card-head'>
                                    <div className='slot-card-left'>
                                           <div className='inline-text'>
                                             <h2 className='slot-card-title' >Picker Service</h2>
                                             <span className='slot-review-count'>(44k review )</span>
                                           </div>

                                           <div className='inline-text'>
                                             <p className='slot-workday'>Working per day :</p>
                                             <span className='slot-prize'>&#8377; 200</span>
                                           </div>
                                           <div className='inline-text'>
                                           <button className='view-detail-btn'>View Details</button>

                                           </div>
                                    </div>
                                    <div className='slot-card-right'>
                                    <div className="user-service-image">
                                    <div className="user-service-rating">
                                             <span>★ 4.5</span>
                                        </div>
                                      <img src={Service_img} alt="Packer Service Image" />
                                    </div>
                                    </div>
                                 </div>

                                 <div className='slot-card-body'>
                                      <div className='space-text'>
                                        <p className='slot-detail'>Service Method :</p>
                                        <span className='slot-data'>Day</span>
                                      </div>
                                      <div className='space-text'>
                                        <p className='slot-detail'>Working Duration :</p>
                                        <span className='slot-data'>01 Day</span>
                                      </div>

                                      <div className='space-text'>
                                        <p className='slot-detail'>Preferred Date  :</p>
                                        <span className='slot-data'>August 26 2024</span>
                                      </div>

                                      <div className='space-text'>
                                        <p className='slot-detail'>Preferred Time  :</p>
                                        <span className='slot-data'>12 : 00 pm</span>
                                      </div>
                                 </div>
                
                                 <div className='slot-card-footer'>
                                   <div className='slot-amount'><p>Sub- Total Amount</p>
                                   <button className='user-cancel-btn'>Canceled</button>

                                   </div>
                                   <p className='amount-number'>&#8377; 3,000</p>


                                 </div>

                            </div>

                            {/* slot card */}
                            <div className='slot-card-item'>
                                 <div className='slot-card-head'>
                                    <div className='slot-card-left'>
                                           <div className='inline-text'>
                                             <h2 className='slot-card-title' >Picker Service</h2>
                                             <span className='slot-review-count'>(44k review )</span>
                                           </div>

                                           <div className='inline-text'>
                                             <p className='slot-workday'>Working per day :</p>
                                             <span className='slot-prize'>&#8377; 200</span>
                                           </div>
                                           <div className='inline-text'>
                                           <button className='view-detail-btn'>View Details</button>

                                           </div>
                                    </div>
                                    <div className='slot-card-right'>
                                    <div className="user-service-image">
                                    <div className="user-service-rating">
                                             <span>★ 4.5</span>
                                        </div>
                                      <img src={Service_img} alt="Packer Service Image" />
                                    </div>
                                    </div>
                                 </div>

                                 <div className='slot-card-body'>
                                      <div className='space-text'>
                                        <p className='slot-detail'>Service Method :</p>
                                        <span className='slot-data'>Day</span>
                                      </div>
                                      <div className='space-text'>
                                        <p className='slot-detail'>Working Duration :</p>
                                        <span className='slot-data'>01 Day</span>
                                      </div>

                                      <div className='space-text'>
                                        <p className='slot-detail'>Preferred Date  :</p>
                                        <span className='slot-data'>August 26 2024</span>
                                      </div>

                                      <div className='space-text'>
                                        <p className='slot-detail'>Preferred Time  :</p>
                                        <span className='slot-data'>12 : 00 pm</span>
                                      </div>
                                 </div>
                
                                 <div className='slot-card-footer'>
                                   <div className='slot-amount'><p>Sub- Total Amount</p>
                                   <button className='user-cancel-btn'>Canceled</button>

                                   </div>
                                   <p className='amount-number'>&#8377; 3,000</p>


                                 </div>
                            </div>
                        </div>
      
    </>
  )
}

export default CancelCard

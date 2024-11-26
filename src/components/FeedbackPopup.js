import React, { useState } from 'react';
import  '../styles/components/popup.css';

import FeedbackOne from '../assets/images/feedback1.svg';
import FeedbackTwo from '../assets/images/feedback2.svg';
import FeedbackThree from '../assets/images/feedback3.svg';
import FeedbackFour from '../assets/images/feedback4.svg';
import FeedbackFive from '../assets/images/feedback5.svg';

function FeedbackPopup() {
  // State to control the modal visibility
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(true);

  // Functions to close modal
  const handleClose = () => {
    setIsFeedbackModalOpen(false);
  };

  const handleCancel = () => {
    alert('Feedback canceled');
    setIsFeedbackModalOpen(false);
  };

  const handleSubmit = () => {
    alert('Feedback submitted');
    setIsFeedbackModalOpen(false);
  };

  return (
    <div>
      {isFeedbackModalOpen && (
        <div className="feedback-modal active">
          <div className="feedback-modal-content">
            {/* Close Button */}
            <button className="feedback-close-btn" onClick={handleClose}><i className="fas fa-times"></i></button>

            {/* Heading */}
            <h2 className='feedback-heading'>Feed back</h2>
             <p className='feedback-txt'>What do you think of the service provided ?</p>
            {/* Emoji Feedback Row */}
            <div className="feedback-emoji-row">
              <button><img src={FeedbackFive} alt="Sad Emoji" /></button>
              <button><img src={FeedbackFour} alt="Unhappy Emoji" /></button>
              <button><img src={FeedbackThree} alt="Neutral Emoji" /></button>
              <button><img src={FeedbackTwo} alt="Happy Emoji" /></button>
              <button><img src={FeedbackOne} alt="Excited Emoji" /></button>
            </div>
            <p className='feedback-txt' style={{ textAlign:'left' }}>Share your commend here about service </p>
            {/* Comment Box */}
            <div className="feedback-comment-box">
              <textarea rows="4" placeholder="Share your comment here about service"></textarea>
            </div>

            {/* Action Buttons */}
            <div className="feedback-modal-footer">
              <button className="feedback-cancel-btn" onClick={handleCancel}>Cancel</button>
              <button className="feedback-submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackPopup;

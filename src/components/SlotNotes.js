import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SlotNotes({ onClose }) {
  const modalRef = useRef();
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  
  // State for form inputs
  const [serviceMethod, setServiceMethod] = useState('');
  const [workingDuration, setWorkingDuration] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [preferredDate, setPreferredDate] = useState('');

  // Error states
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    // Formatting current time and date
    setCurrentTime(`${hours}:${minutes < 10 ? '0' + minutes : minutes}`);
    setCurrentDate(today.toISOString().split('T')[0]); // YYYY-MM-DD format
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const validateForm = () => {
    const newErrors = {};

    if (!serviceMethod) newErrors.serviceMethod = 'Please select a service method.';
    if (!workingDuration) newErrors.workingDuration = 'Please select a working duration.';
    if (!preferredTime) newErrors.preferredTime = 'Please select a preferred service time.';
    if (!preferredDate) newErrors.preferredDate = 'Please select a preferred service date.';

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      navigate('/slot-booked'); // Redirect to the slot-booked page if validation passes
    }
  };

  return (
    <div className="slot-model-popup">
      <div className="slot-note-container" ref={modalRef}>
        <h2 className="slot-note-title">Note</h2>
        <div className="slot-note-form">
          <div className="slot-note-group">
            <label htmlFor="service-method" className="slot-note-label">Select Service method</label>
            <select
              id="service-method"
              className="slot-note-select"
              value={serviceMethod}
              onChange={(e) => setServiceMethod(e.target.value)}
            >
              <option disabled value="">Select Service method</option>
              <option value="Method1">Service Method 1</option>
              <option value="Method2">Service Method 2</option>
            </select>
            {errors.serviceMethod && <div className="error-text">{errors.serviceMethod}</div>}
          </div>
          <div className="slot-note-group">
            <label htmlFor="working-duration" className="slot-note-label">Select Working Duration</label>
            <select
              id="working-duration"
              className="slot-note-select"
              value={workingDuration}
              onChange={(e) => setWorkingDuration(e.target.value)}
            >
              <option disabled value="">Select Working Duration</option>
              <option value="1hour">1 Hour</option>
              <option value="2hours">2 Hours</option>
            </select>
            {errors.workingDuration && <div className="error-text">{errors.workingDuration}</div>}
          </div>
          <div className="slot-note-group">
            <label htmlFor="service-time" className="slot-note-label">Preferred Service Time</label>
            <input
              type="time"
              id="service-time"
              className="slot-note-select"
              min={currentTime}
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              required
            />
            {errors.preferredTime && <div className="error-text">{errors.preferredTime}</div>}
          </div>
          <div className="slot-note-group">
            <label htmlFor="service-date" className="slot-note-label">Preferred Service Date</label>
            <input
              type="date"
              id="service-date"
              className="slot-note-select"
              min={currentDate}
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              required
            />
            {errors.preferredDate && <div className="error-text">{errors.preferredDate}</div>}
            <small className="slot-note-hint">*Pre-booking available after one month</small>
          </div>
        </div>
        <button className="slot-note-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default SlotNotes;

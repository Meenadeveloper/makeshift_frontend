import Profile_pic from '../assets/images/profile_pic.jpg';
import Profile_Edit from '../assets/images/ant-design_edit-filled.png';

function UserReport() {
  return (
    <div className="userReport-container">
      <div className="userreport-head-box">
        <h2>Report & Queries</h2>
      </div>

      <form className="userReport-form">
        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-label">Enter name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="userReport-input"
            />
          </div>
          <div className="userReport-field">
            <label className="userReport-label">Enter e-mail id</label>
            <input
              type="email"
              placeholder="example.@gmail.com"
              className="userReport-input"
            />
          </div>
        </div>

        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-label">Enter mobile number</label>
            <input
              type="tel"
              placeholder="+91 95*****862"
              className="userReport-input"
            />
          </div>
          <div className="userReport-field">
            <label className="userReport-label">Select service</label>
            <select className="userReport-input user-report-select" style={{background:'#F9F9F9'}}>
              <option value="">Select service</option>
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Issue</option>
              <option value="billing">Billing Issue</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        
        

        {/* Textarea for query description */}
        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-label"> Description</label>
            <textarea
              placeholder="Enter job details"
              className="userReport-input-textbox"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="form-btn-box">
          <button type="submit" className="userReport-submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserReport;

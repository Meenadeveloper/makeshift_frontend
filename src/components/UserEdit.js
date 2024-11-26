import Profile_pic from '../assets/images/profile_pic.jpg';
import Profile_Edit from '../assets/images/ant-design_edit-filled.png';

function UserEdit() {
    return (
        <div className="userReport-container">
         <div className="userprofile-box">
      <div className="userReport-profile">
        <img src={Profile_pic} alt="" />
        <input type="file" id="file-input" style={{ display: 'none' }} />
        <label htmlFor="file-input" className="edit-box">
          <img src={Profile_Edit} alt="Edit" />
        </label>
      </div>
    </div>
          
          <form className="userReport-form">
            <div className="userReport-row">
              <div className="userReport-field">
                <label className="userReport-label">Enter name</label>
                <input type="text" placeholder="Enter full name" className="userReport-input" />
              </div>
              <div className="userReport-field">
                <label className="userReport-label">Enter e-mail id</label>
                <input type="email" placeholder="example.@gmail.com" className="userReport-input" />
              </div>
            </div>
            <div className="userReport-row">
              <div className="userReport-field">
                <label className="userReport-label">Enter mobile number</label>
                <input type="tel" placeholder="+91 95*****862" className="userReport-input" />
              </div>
              <div className="userReport-field">
                <label className="userReport-label">Enter address</label>
                <input type="text" placeholder="Enter address details" className="userReport-input" />
    
              </div>
            </div>
            <div className='form-btn-box'>
            <button type="submit" className="userReport-submitButton">Submit</button>
    
            </div>
          </form>
        </div>
      );
}

export default UserEdit

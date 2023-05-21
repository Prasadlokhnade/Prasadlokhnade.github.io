import React from 'react';
import './feedback.css';

function FeedbackForm() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <br />
          <h1>Feedback</h1>
        </div>
        <div className="row">
          <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide" style={{ float: 'left' }}>
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Age</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: 'right' }}>
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: 'right' }}>
              <input type="text" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Password</label>
            </div>
          </div>

          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required></textarea>
              <label>Feedback</label>
            </div>
          </div>
          <div className="col-xs-12" id="iiq">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;

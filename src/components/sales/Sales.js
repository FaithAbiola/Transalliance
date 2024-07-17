import PropTypes from "prop-types";
import "./Sales.css";

const Sales = ({ className = "" }) => {
  return (
    <div className={`sales ${className}`}>
      <h2 className="speak-to-sales">Speak to Sales</h2>
      <div className="form-wrapper">
        <div className="form">
          <div className="fields">
            <div className="email">Email</div>
            <input className="name-input" type="text" />
          </div>
          <div className="fields1">
            <div className="first-name">First Name</div>
            <input className="fields-child" type="text" />
          </div>
          <div className="fields2">
            <div className="last-name">Last Name</div>
            <input className="fields-item" type="text" />
          </div>
          <div className="fields3">
            <div className="message">Message</div>
            <textarea className="fields-inner" rows={7} cols={29} />
          </div>
        </div>
      </div>
      <div className="agreement-check">
        <div className="empty-submit-parent">
          <input className="empty-submit" type="checkbox" />
          <div className="i-agree-to-container">
            I agree to receiving payment news and trends from Inpay, including
            updates to our products and services. I am aware that I can withdraw
            this consent at any time by contacting Inpay or unsubscribing via
            email. I agree to Inpay processing my personal data in accordance
            with its 
            <a
              className="privacy-policy"
              href="https://www.inpay.com/privacy-policy"
              target="_blank"
            >
              <span className="privacy-policy1">Privacy Policy</span>
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`send-content-parent ${className}`}>
      <div className="send-content">
        <div className="wrapper-ellipse-14">
          <img
            className="wrapper-ellipse-14-child"
            alt=""
            src="/images/ellipse-14.svg"
          />
        </div>
        <div className="send-description-container">
          <div className="send-description-container-child" />
          <div className="send-description-wrapper">
            <div className="send-and-receive">
              Send and Receive Money from all over with ease.
            </div>
            <div className="image-grid-container">
              <div className="image-grid">
                <img className="image-36-icon" alt="" src="/images/image-36.svg" />
                <img className="image-35-icon" alt="" src="/images/image-35.svg" />
                <img className="image-38-icon" alt="" src="/images/image-38.svg" />
                <img
                  className="image-37-icon"
                  loading="lazy"
                  alt=""
                  src="/images/image-37.svg"
                />
                <img className="image-34-icon" alt="" src="/images/image-34.svg" />
                <img className="image-33-icon" alt="" src="/images/image-33.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-div" />
      <div className="money-out-container">
        <div className="money-out">Money Out</div>
        <img
          className="fiarrow-right-circle-icon2"
          alt=""
          src="/images/arrow-right-circle-money.svg"
        />
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3
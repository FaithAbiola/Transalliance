import PropTypes from "prop-types";
import "./SubContainer.css";

const SubContainer = ({ className = "" }) => {
  return (
    <div className={`sub-container ${className}`}>
      <div className="deep-container">
        <header className="nested-container">
          <div className="layout-container">
            <div className="element-container">
              <div className="element-container-child" />
              <div className="content-container">
                <img
                  className="whatsapp-image-2024-05-27-at-1"
                  alt=""
                  src="/images/transalliance-logo.svg"
                />
              </div>
            </div>
          </div>
          <div className="navigation-container-parent">
            <div className="navigation-container">
              <div className="navigation-items">
                <a href="#" className="home">Home</a>
                <a href="#" className="about">About</a>
                <a href="#" className="solutions">Solutions</a>
                <a href="#" className="news-insights">{`News & Insights`}</a>
              </div>
            </div>
            <div className="contact-container">
              <a href="#" className="contact-us">Contact Us</a>
            </div>
            <button className="button-container">
              <a href="#" className="get-started">Get Started</a>
              <div className="button-container-inner">
                <img className="frame-item" alt="" src="/images/get-arrow.svg" />
              </div>
            </button>
          </div>
        </header>
        <div className="main-content-wrapper">
          <div className="main-content">
            <div className="description-wrapper">
              <div className="description">
                <b className="simplified-cross-border-paymen">
                  Simplified cross-border payment
                </b>
                <h1 className="we-are-the-container">
                  <p className="we-are-the">{`We are the `}</p>
                  <p className="payments-people">payments people</p>
                </h1>
                <div className="transalliance-groups-cross-b">
                  Transalliance Group.'s cross-border payments solutions connect
                  organisations and communities globally to the network they
                  need to thrive. Together, we make money move.
                </div>
              </div>
            </div>
            <div className="image-wrapper-parent">
              <div className="image-wrapper">
                <img
                  className="flat-lay-with-laptop-and-headp"
                  loading="lazy"
                  alt=""
                  src="/images/laptop-headphones.svg"
                />
                <img className="vector-icon" alt="" src="/images/dot-background.svg" />
              </div>
              <div className="tracking-container">
                <b className="transaction-tracking">
                  24/7, 365 transaction tracking
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SubContainer.propTypes = {
  className: PropTypes.string,
};

export default SubContainer
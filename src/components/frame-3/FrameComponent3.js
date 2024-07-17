import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`network-content-parent ${className}`}>
      <div className="network-content">
        <div className="description-container">
          <div className="expert-description">
            <div className="regulation-description">
              <div className="sepa-description">
                <div className="sepa-container">
                  <b className="sepa-instant-sepa-container">
                    <p className="sepa-instant-sepa">{`SEPA Instant, SEPA & SWIFT`}</p>
                    <p className="blank-line">&nbsp;</p>
                  </b>
                </div>
              </div>
              <div className="danish-fsa-regulated-wrapper">
                <b className="danish-fsa-regulated-container">
                  <p className="danish-fsa-regulated">Danish FSA regulated</p>
                </b>
              </div>
            </div>
          </div>
          <div className="about-us1">
            <h1 className="the-human-powered-payments-container">
              <p className="the-human-powered-payments">
                The human-powered payments network
              </p>
            </h1>
            <div className="driven-by-a-container">
              <p className="driven-by-a">
                Driven by a team of over 200 global payments experts with
                absolute dedication to solving our customers’ most complex
                cross-border payments challenges.
              </p>
            </div>
            <button className="learn-container">
              <div className="learn-more">Learn More</div>
              <div className="learn-icon-container">
                <img
                  className="fiarrow-right-circle-icon3"
                  alt=""
                  src="/images/arrow-right-circle-money.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="portal-content-parent">
        <div className="portal-content">
          <div className="portal-description">
            <div className="wrapper-group-2751">
              <img
                className="wrapper-group-275-item"
                alt=""
                src="/images/group-learn.svg"
              />
            </div>
            <img
              className="portal-description-child"
              alt=""
              src="/images/lady-laptop.svg"
            />
            <div className="portal-image-container">
              <img
                className="portal-image-container-child"
                alt=""
                src="/images/man-frame.svg"
              />
              <img
                className="smiling-purposeful-young-busin-icon"
                alt=""
                src="/images/young-businessman.svg"
              />
            </div>
          </div>
          <img className="portal-content-child" alt="" src="/images/vector-49.svg" />
          <img
            className="portal-content-item"
            loading="lazy"
            alt=""
            src="/images/phone.svg"
          />
          <div className="customer-portal-for-live-trans-wrapper">
            <b className="customer-portal-for-container">
              <p className="customer-portal-for">
                Customer portal for live transaction monitoring
              </p>
            </b>
          </div>
        </div>
        <div className="currencies">
          <div className="container">
            <div className="currencies-served">90+ currencies served</div>
          </div>
        </div>
        <button className="more">
          <div className="container1">
            <div className="learn-more1">Learn More</div>
          </div>
          <img
            className="fiarrow-right-circle-icon4"
            alt=""
            src="/images/arrow-right-circle-learn.svg"
          />
        </button>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5
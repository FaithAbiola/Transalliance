import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`about-content-parent ${className}`}>
      <div className="about-content">
        <div className="about-heading">
          <b className="about-us">ABOUT US</b>
        </div>
        <div className="about-description">
          <h1 className="payment-pathways-built">
            Payment pathways, built for you
          </h1>
          <div className="transalliance-group-money-container">
            <p className="transalliance-group-money">
              Transalliance Group. Money Out and Money In solutions give our
              customers the ability to complete cross-border, multi-currency
              transactions securely and at speed. And with a single provider for
              both payouts and pay-ins, say goodbye to the operational headaches
              of multi-supplier management
            </p>
          </div>
        </div>
      </div>
      <img className="frame-inner" loading="lazy" alt="" src="/images/anthony.svg" />
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4
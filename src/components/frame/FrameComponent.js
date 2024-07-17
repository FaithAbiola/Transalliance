import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`wrapper-group-275-parent ${className}`}>
      <div className="wrapper-group-2752">
        <img
          className="wrapper-group-275-inner"
          alt=""
          src="/images/annual-report.svg"
        />
      </div>
      <div className="container10" />
        <div className="frame-wrapper1">
          <div className="report-parent">
            <div className="report">
              <b className="annual-report">2023 Annual Report</b>
            </div>
            <h2 className="click-below-to">
              Click below to read more about Inpay’s impressive year-on-year
              growth and to download the full report.
            </h2>
          </div>
        </div>
        <div className="wrapper-group-2752">
        <img
          className="wrapper-group-275-down"
          alt=""
          src="/images/annual-report-down.svg"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1
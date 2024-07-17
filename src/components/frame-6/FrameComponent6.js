import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`travel-content-parent ${className}`}>
      <div className="travel-content">
        <img className="vector-icon1" alt="" src="/images/dot-vector.svg" />
        <img
          className="travel-concept-with-documents"
          alt=""
          src="/images/travel.svg"
        />
        <div className="more-container">
          <div className="more-button">
            <b className="discover-more">Discover More</b>
          </div>
          <img
            className="fiarrow-right-circle-icon1"
            loading="lazy"
            alt=""
            src="/images/arrow-right-circle-dis.svg"
          />
        </div>
        <img className="travel-content-child" alt="" src="/images/vector.svg" />
      </div>
      <div className="wrapper-group-275-wrapper">
        <div className="wrapper-group-275">
          <img
            className="wrapper-group-275-child"
            alt=""
            src="/images/group.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2
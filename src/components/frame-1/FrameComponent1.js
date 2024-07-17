import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent = ({
  className = "",
  image47,
  nGOs,
  fiarrowRightCircle,
}) => {
  return (
    <div className={`image-47-parent ${className}`}>
      <img className="image-47-icon" loading="lazy" alt="" src={image47} />
      <div className="columns2">
        <h3 className="ngos">{nGOs}</h3>
        <div className="images">
          <div className="content1">
            <div className="learn-more2">Learn More</div>
          </div>
          <img
            className="fiarrow-right-circle-icon5"
            alt=""
            src={fiarrowRightCircle}
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  image47: PropTypes.string,
  nGOs: PropTypes.string,
  fiarrowRightCircle: PropTypes.string,
};

export default FrameComponent
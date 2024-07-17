import PropTypes from "prop-types";
import "./Sectors.css";
import FrameComponent from "../frame-1/FrameComponent1";

const Sectors = ({ className = "" }) => {
  return (
    <section className={`sectors ${className}`}>
      <div className="container6">
        <h1 className="sectors-we-serve-container">
          <p className="sectors-we-serve">Sectors we serve</p>
        </h1>
        <div className="content2">
          <div className="we-simplify-the-container">
            <p className="we-simplify-the">
              We simplify the complexities of cross-border payments in some of
              the world’s most demanding sectors. Learn more about who we serve
              and how we add value below.
            </p>
          </div>
          <div className="grid">
            <div className="container7">
              <div className="column">
                <div className="container8">
                  <div className="item">
                    <img
                      className="image-44-icon"
                      alt=""
                      src="/images/building.svg"
                    />
                    <div className="image">
                      <h3 className="finacial-services">Finacial Services</h3>
                      <div className="learn-more3">Learn More</div>
                      <img
                        className="fiarrow-right-circle-icon6"
                        alt=""
                        src="/images/arrow-right-circle-sect.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-45-parent">
                <img
                  className="image-45-icon"
                  loading="lazy"
                  alt=""
                  src="/images/laptop-hand.svg"
                />
                <div className="icon">
                  <h3 className="igaming">iGaming</h3>
                  <div className="container9">
                    <div className="image1">
                      <div className="learn-more4">Learn More</div>
                    </div>
                    <img
                      className="fiarrow-right-circle-icon7"
                      alt=""
                      src="/images/arrow-right-circle-sect.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-inner">
              <div className="frame-container">
                <FrameComponent
                  image47="/images/landscape.svg"
                  nGOs="NGOs"
                  fiarrowRightCircle="/images/arrow-right-circle-sect.svg"
                />
                <FrameComponent
                  image47="/images/containers.svg"
                  nGOs="Corporates"
                  fiarrowRightCircle="/images/arrow-right-circle-sect.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Sectors.propTypes = {
  className: PropTypes.string,
};

export default Sectors
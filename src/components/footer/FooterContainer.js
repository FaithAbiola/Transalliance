import PropTypes from "prop-types";
import "./FooterContainer.css";

const FooterContainer = ({ className = "" }) => {
  return (
    <section className={`footer-container ${className}`}>
      <footer className="footer-content">
        <div className="footer-columns-parent">
          <div className="footer-columns">
            <div className="footer-column-one">
              <div className="footer-brand-details-parent">
                <div className="footer-brand-details">
                  <div className="footer-brand">
                    <img
                      className="whatsapp-image-2024-05-27-at-11"
                      loading="lazy"
                      alt=""
                      src="/images/footer-logo.svg"
                    />
                  </div>
                  <div className="transalliance-group">
                    Transalliance Group.
                  </div>
                </div>
                <button className="footer-contact">
                  <div className="contact-us1">Contact Us</div>
                  <img
                    className="fiarrow-right-circle-icon8"
                    alt=""
                    src="/images/arrow-right-circle.svg"
                  />
                </button>
              </div>
              <div className="footer-location">
                <div className="footer-address">
                  <div className="offices">Offices</div>
                  <div className="denmark-toldbodgade-55b-1253">
                    <p className="denmark-toldbodgade-55b-12531">
                      Denmark:<br/>Toldbodgade 55B<br/>1253, Copenhagen
                    </p>
                    <p className="united-kingdom">United Kingdom:</p>
                    <p className="blank-line1">&nbsp;</p>
                    <p className="poultry-ec2r-8ej-london">
                      1 Poultry<br/>EC2R 8EJ, London
                    </p>
                    <p className="infoinpaycom">info@inpay.com</p>
                    <p className="phone-45-88" style={{width:"80%"}}>Phone: +45 88 610 600</p>
                  </div>
                </div>
                <div className="footer-links">
                  <div className="solution-links">
                    <div className="solutions1">Solutions</div>
                    <div className="money-out1">Money Out</div>
                    <div className="money-in">Money In</div>
                  </div>
                  <div className="sectors-links">
                    <div className="sectors1">{`Sectors `}</div>
                    <div className="financial-services">Financial Services</div>
                    <div className="igaming1">iGaming</div>
                    <div className="corporates1">Corporates</div>
                    <div className="ngos1">NGOs</div>
                  </div>
                  <div className="other-links">
                    <div className="other">Other</div>
                    <div className="about-us2">About Us</div>
                    <div className="news-insights1">{`News & Insights`}</div>
                    <div className="compliance">Compliance</div>
                    <div className="careers">Careers</div>
                    <div className="contact-us2">Contact us</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jan3" />
          </div>
          <div className="footer-column-two">
            <div className="footer-social">
              <div className="social-media">Social Media</div>
              <div className="social-links">
                <img
                  className="social-links-child"
                  loading="lazy"
                  alt=""
                  src="/images/facebook.svg"
                />
                <img
                  className="social-links-item"
                  loading="lazy"
                  alt=""
                  src="/images/twitter.svg"
                />
                <img
                  className="social-links-inner"
                  loading="lazy"
                  alt=""
                  src="/images/instagram.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img className="footer-content-child" alt="" src="/frame-565.svg" />
      </footer>
    </section>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer
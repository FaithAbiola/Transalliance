import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`container-parent ${className}`}>
      <div className="container2">
        <div className="header">
          <b className="our-service">OUR SERVICE</b>
        </div>
        <h1 className="the-transalliance-group-container">
          <p className="the-transalliance-group">
            The Transalliance Group. difference
          </p>
        </h1>
      </div>
      <div className="content">
        <div className="container3">
          <div className="network">
            <div className="jan">
              <div className="jan1">
                <div className="jan2">
                  <img
                    className="image-40-icon"
                    loading="lazy"
                    alt=""
                    src="/images/trusted.svg"
                  />
                </div>
                <div className="we-are-your-trusted-partner-parent">
                  <div className="we-are-your">We are your trusted partner</div>
                  <div className="we-are-a">
                    We are a dedicated and diligent team of payments specialists
                    that’s committed to helping you unlock opportunity, create
                    value and make payments happen, together.
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="yoga">
                  <img
                    className="image-39-icon"
                    loading="lazy"
                    alt=""
                    src="/images/network.svg"
                  />
                </div>
                <div className="we-provide-the">
                  We provide the network you need
                </div>
                <div className="we-open-access">
                  We open access to a resilient global network spanning 90+
                  countries that’s built to simplify complex challenges and move
                  money at speed.
                </div>
              </div>
              <div className="metric-container">
                <div className="metric-item">
                  <img
                    className="image-41-icon"
                    loading="lazy"
                    alt=""
                    src="/images/compliance.svg"
                  />
                </div>
                <div className="we-bring-certainty">
                  We bring certainty through compliance
                </div>
                <div className="we-were-born">
                  We were born with compliance at our heart. Licensed by the
                  globally trusted Danish FSA, when we move money you can be
                  confident that it gets to the right place with absolute
                  accuracy.
                </div>
              </div>
              <div className="columns1">
                <div className="image-42-wrapper">
                  <img
                    className="image-42-icon"
                    loading="lazy"
                    alt=""
                    src="/images/expertise.svg"
                  />
                </div>
                <div className="we-execute-with">We execute with expertise</div>
                <div className="we-complete-an-container">
                  <p className="we-complete-an">
                    We complete an industry-leading 99% of payments for
                    customers in the fast-changing financial services, iGaming,
                    corporate and NGO sectors, drawing on 16 years of proven
                    expertise.
                  </p>
                  <p className="p">.</p>
                </div>
              </div>
              <div className="empty">
                {/* <div className="wrapper-group-278">
                  <img
                    className="wrapper-group-278-child"
                    alt=""
                    src="/images/group-278.svg"
                  />
                </div> */}
                <img
                  className="container-icon"
                  alt=""
                  src="/images/inpay-dash.svg"
                />
                <img
                  className="container-icon1"
                  loading="lazy"
                  alt=""
                  src="/images/laptop-table.svg"
                />
              </div>
            </div>
            <div className="passion">
              <div className="container4">
                <div className="our-global-payments-network-is-wrapper">
                  <div className="our-global-payments-container">
                    <p className="our-global-payments">
                      Our global payments network is powered by passionate
                      people, transparent customer relationships, and
                      leading-edge technology.
                    </p>
                  </div>
                </div>
                <div className="team">
                  <div className="container5">
                    <div className="header1">
                      <div className="our-team">OUR TEAM</div>
                      <b className="over-200-experts">{`Over 200 Experts `}</b>
                    </div>
                  </div>
                  <div className="experts">
                    <img
                      className="container-icon2"
                      loading="lazy"
                      alt=""
                      src="/images/lady-tea.svg"
                    />
                    <div className="meet">
                      <h2 className="meet-our-best">
                        Meet our best financial experts
                      </h2>
                      <div className="fiarrow-down-left-wrapper">
                        <img
                          className="fiarrow-down-left-icon"
                          loading="lazy"
                          alt=""
                          src="/images/arrow-down-left.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="corporates-wrapper">
            <div className="corporates">Corporates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6
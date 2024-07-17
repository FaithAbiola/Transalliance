
import FooterContainer from "../footer/FooterContainer";
import FrameComponent6 from "../frame-2/FrameComponent2";
import FrameComponent5 from "../frame-3/FrameComponent3";
import FrameComponent3 from "../frame-4/FrameComponent4";
import FrameComponent4 from "../frame-5/FrameComponent5";
import FrameComponent2 from "../frame-6/FrameComponent6";
import FrameComponent1 from "../frame/FrameComponent";
import Sales from "../sales/Sales";
import Sectors from "../sectors/Sectors";
import SubContainer from "../sub-container/SubContainer";
import "./Inpay.css";

const Inpay = () => {
  return (
    <div className="inpay">
      <section className="main-container">
        <div className="logo-linkedin">
          <div className="logo-linkedin-child" />
          <SubContainer/>
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent4 />
      <div className="frame-parent">
        <div className="frame-wrapper">
          <div className="frame-child" />
        </div>
        <img
          className="portrait-corporate-woman-worki-icon"
          loading="lazy"
          alt=""
          src="/images/corporate-woman.svg"
        />
      </div>
      <div className="inpay-child" />
      <FrameComponent3 />
      <FrameComponent5 />
      <FrameComponent6 />
      <div className="portal">
        <h1 className="one-portal-every-container">
          <p className="one-portal">{`One portal, `}</p>
          <p className="every-transaction">every transaction</p>
        </h1>
        <div className="our-customer-portal-container">
          <p className="our-customer-portal">
            Our customer portal provides an intuitive interface to access all of
            our services via a simple, single login.
          </p>
          <ul className="real-time-247-365-transacti">
            <li className="real-time-247-365">
              Real-time, 24/7, 365 transaction tracking
            </li>
            <li className="customizable-downloadable">{`Customizable & downloadable reports`}</li>
            <li className="rich-data-analysis">Rich data analysis</li>
            <li className="multiple-integration-methods">
              Multiple integration methods, built to suit your needs
            </li>
          </ul>
        </div>
      </div>
      <Sectors />
      <section className="frame-group">
        <FrameComponent1 />
        <div className="saless">
          {/* <div className="sales-img"> */}
            <img
              className="sales-img"
              alt=""
              src="/images/lady-with-laptop.svg"
            />
          {/* </div> */}
          <div className="sales-parent">
            <Sales />
            <div className="submit-button-container-wrapper">
              <button className="submit-button-container">
                <div className="submit-details">
                  <div className="submit">Submit</div>
                </div>
                <img
                  className="fiarrow-right-circle-icon"
                  alt=""
                  src="/images/arrow-right-circle.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterContainer />
    </div>
  );
};

export default Inpay
import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    
    <Fragment>
       <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About SmartShop</h6>
            <p className="text-justify">“A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.”</p>
            <h4> – Jeff Bezos</h4>
            <p>Founder & CEO of Amazon</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Menu</h6>
            <ul className="footer-links">
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Cookie Policy</a></li>
              <li><a href="">Purchasing Policy</a></li>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Career</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Contact Us</h6>
            <ul className="footer-links">
              <li><a href="">Dhaka,Bangladesh</a></li>
              <li><a href=""></a>Email: support@smartshop.com.bd</li>
              <li><a href="">Contact no: 01621956685</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">  Develop By Tanvir Niloy © Copyright {moment().format("YYYY")}
         <a href="#"> SmartShop</a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="youtube" href="#"><i className="fa fa-youtube"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </Fragment>
  );
};

export default Footer;
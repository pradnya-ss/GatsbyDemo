import React from "react"
import footerlogo from "../../static/3s-group-logo.png"
var createReactClass = require('create-react-class');

const Footer = createReactClass({
    render: function() {
      return (
        <footer>
          <div className="container">
            <div className="footer-top">
              <div className="left">
                <img src={footerlogo} alt="3s Group Logo" />
                <a href className="footer-subscribe">Subscribe Now</a>
                <ul className="footer-social">
                  <li className="fb"><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li className="twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li className="insta"><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="right">
                <ul className="footer-nav">
                  <li>
                    <a href="javascript:void(0);">Headlines</a>
                    <ul className="submenu">
                      <li><a href="javascript:void(0);">Current Events</a></li>
                      <li><a href="javascript:void(0);">Global Coverage</a></li>
                      <li><a href="javascript:void(0);">Economic Department</a></li>
                      <li><a href="javascript:void(0);">Immigration / Labour</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Doing Business</a>
                    <ul className="submenu">
                      <li><a href="javascript:void(0);">Registering a Business</a></li>
                      <li><a href="javascript:void(0);">Setting up Operations</a></li>
                      <li><a href="javascript:void(0);">Running a Business</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Destination Dubai</a>
                    <ul className="submenu">
                      <li><a href="javascript:void(0);">Economic Indicators</a></li>
                      <li><a href="javascript:void(0);">Initiatives</a></li>
                      <li><a href="javascript:void(0);">Infrastructure</a></li>
                      <li><a href="javascript:void(0);">Talent Pool</a></li>
                      <li><a href="javascript:void(0);">Lifestyle</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Quick Links</a>
                    <ul className="submenu">
                      <li><a href="javascript:void(0);">Lorem Ipsum</a></li>
                      <li><a href="javascript:void(0);">Lorem</a></li>
                      <li><a href="javascript:void(0);">Lorem Ipsum</a></li>
                      <li><a href="javascript:void(0);">Lorem</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-btm">
              <ul className="other-links">
                <li><a href="javascript:void(0);">Privacy Policy</a></li>
                <li><a href="javascript:void(0);">Cookie Notice</a></li>
                <li><a href="javascript:void(0);">Copyright Policy</a></li>
                <li><a href="javascript:void(0);">Data Policy</a></li>
                <li><a href="javascript:void(0);">Subscribe Agreement &amp; Terms of Use</a></li>
              </ul>
              <p className="copyright">Copuyright ©2020 Dubai BizBuzz. All Rights Reserved.</p>
              <p className="design-by">Designed &amp; Developed by <a href="javascript:void(0);" target="_blank">emQube</a></p>
            </div>
          </div>
        </footer>
      );
    }
  });
export default Footer;
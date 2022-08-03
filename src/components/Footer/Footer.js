import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container bottom_border">
        <div className="row">
          <div className=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">
              Techzone Software Academy
            </h5>
            <p className="mb10">
              2nd Floor, <br />
              Beside Chicha's Restaurant, <br />
              Synosoft Building, Veer Nagar,<br />
              Lakdikapul, <br />
              Hyderabad - 500004, <br />
              India
            </p>
            <p>Phone: +91 6304872757</p>
            <p>Email: contact@techzonesoftware.academy</p>
          </div>
          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
            <ul className="footer_ul_amrc">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="http://techzoneinfo.com">Main page</a>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

            <ul className="footer_ul2_amrc">
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  <FaFacebookSquare /> :<a href="#">https://www.facebook.com</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  <FaInstagramSquare /> :
                  <a href="#">https://www.instagram.com</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  <AiFillLinkedin /> :<a href="#">https://www.linkedin.com</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  <BsTwitter /> :<a href="#">https://www.twitter.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

import "./Courses.css";

import appdev from "../../clients/client-10.jpg";
import AppDevelopmentBrochure from "../../brochures/App_Dev.pdf"

const AppDevelopment = () => {
  return (
    <section id="tabs" className="tabs">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex">
          <li className="nav-item col-3" style={{ width: "100rem" }}>
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              data-bs-target="#tab-1"
            >
              <i className="ri-gps-line"></i>
              <h4 className="d-none d-lg-block">
                Mobile and Web Application Development Course
              </h4>
            </a>
          </li>
        </ul>
        <div className="tab-pane my-4" id="tab-4">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>3 Months MERN Full Stack Web Development</h3>
              <p>
                This program is a full stack web development using MERN
                Architecture. THis program will help you get your dream job as
                Web developer/Software developer
              </p>
              <p className="fst-italic">
                Learn The Most In-Demand Technology For Web App Development
                Learn The Most In-Demand Technology For Web App Development
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>Introduction to Web
                  Development, Basics of HTML & CSS
                </li>
                <li>
                  <i className="ri-check-double-line"></i>Core JavaScript
                </li>
                <li>
                  <i className="ri-check-double-line"></i>Frontend development using
                  react.js
                </li>
                <li>
                  <i className="ri-check-double-line"></i>Introduction to Database,
                  Google Firebase, MongoDB
                </li>
                <li>
                  <i className="ri-check-double-line"></i>Backend Development with
                  Express.js and Node.js
                </li>
                <li>
                  <i className="ri-check-double-line"></i>Interview & Communication
                  Skills
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img src={appdev} alt="" className="img-fluid" />
            </div>
          </div>
          <button className="brochure__button">
            <a className="brochure__button" href={AppDevelopmentBrochure}>
              Download Complete Brochure
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;

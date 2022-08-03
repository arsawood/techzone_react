// import React, { useState } from "react";
// import { Collapse } from "react-bootstrap";
// import "./Tabs.css";

// const Tabs = () => {
//   const [openDropdown, setOpenDropdown] = useState(false);

//   return (
//     <>
//       <div className="tabs__container">
//         <button onClick={() => setOpenDropdown(!openDropdown)} className="tab">
//           Data Science
//         </button>

//         <button onClick={() => setOpenDropdown(!openDropdown)} className="tab">
//           Artificial Intelligence
//         </button>
//         <button className="tab">Data Analytics</button>
//         <button className="tab">Web Development</button>
//       </div>
//       <Collapse in={openDropdown}>
//         <div id="example-collapse-text">
//           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//           terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//           labore wes anderson cred nesciunt sapiente ea proident.
//         </div>
//       </Collapse>
//       <Collapse in={openDropdown}>
//         <div id="example-collapse-text">
//           Ai pariatur cliche reprehenderit, enim eiusmod high life accusamus
//           terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//           labore wes anderson cred nesciunt sapiente ea proident.
//         </div>
//       </Collapse>
//     </>
//   );
// };

// export default Tabs;

import React from "react";
import "./Tabs.css";
import ds from "../../../clients/client-4.png";
import ai from "../../../clients/client-1.jpg";
import danalytics from "../../../clients/client-9.png";
import appdev from "../../../clients/client-10.jpg";

import {Link} from 'react-router-dom'

const Tabs = () => {
  return (
    <section id="tabs" className="tabs">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex">
          <li className="nav-item col-3">
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              data-bs-target="#tab-1"
            >
              <i className="ri-gps-line"></i>
              <h4 className="d-none d-lg-block">Data Science</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i className="ri-body-scan-line"></i>
              <h4 className="d-none d-lg-block">Artificial Intelligence</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <i className="ri-sun-line"></i>
              <h4 className="d-none d-lg-block">Data Analytics </h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
              <i className="ri-store-line"></i>
              <h4 className="d-none d-lg-block">Web & Mobile App Dev</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div
                className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>3 Months Data Science Program.</h3>
                <p className="fst-italic">
                  Master Data Science with our industry based curriculum and
                  experienced faculties
                </p>
                <ul>
                  <h4>Modules @ Glance</h4>
                  <li>
                    <i className="ri-check-double-line"></i>Excel Basics, Statistics
                    and Data Visualization with Excel
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Python Programming,
                    MySQL Database
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Data Visualization Tools
                    (Tableau, PowerBI)
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Machine Learning, Deep
                    Learning
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Capstone Projects,
                    Interview & Communication skills
                  </li>
                </ul>
                <p>
                  Data Science is the most in-demand field with lots of jobs
                  available. It is booming due to its application in every
                  domain. Learn Data Science from industry experts with live
                  projects. We will not only train you, but will guide and
                  mentor you to crack best jobs!
                </p>
                <p>
                  Major Projects :
                  <li>
                    Visualizing and Report building on different real time
                    datasets
                  </li>
                  <li>House Price Prediction</li>
                  <li>Stock Price Prediction Using Time Series</li>
                  <li>Object Recognition & Face Recognition</li>
                </p>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={ds} width="500px" alt="" className="img-fluid" />
              </div>
            </div>
            <Link to="/datascience" className="custom__button">Know more</Link>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>3 Months Artificial Intelligence Program.</h3>
                <p>
                  Our 3 Months AI program will make you expert in the most
                  demanding technology and 4th industrial revolution. There are
                  lots of jobs waiting for you, join our program and we will
                  guide and mentor you to crack the best jobs in AI.
                </p>
                <p className="fst-italic">
                  Master Artificial Intelligence with our Industry based
                  curriculum
                </p>
                <ul>
                  <h4>Modules @ Glance</h4>
                  <li>
                    <i className="ri-check-double-line"></i>Introduction to AI,
                    Maths for AI, SQL
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Python Programming for
                    AI
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Machine Learning
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Deep Learning (Computer
                    Vision, Natural Language Processing, LSTM, RNN
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Capstone Projects,
                    Interview & Communication skills
                  </li>
                </ul>
                <p>
                  Major Projects :
                  <li>Attendance System Using Facial Recognition</li>
                  <li>Chatbot</li>
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={ai} width="500px" alt="" className="img-fluid" />
              </div>
            </div>
            <Link to="/aintelligence" className="custom__button">Know more</Link>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>2 Months Data Analytics  Program</h3>
                <p>
                  Hesitant to learn Data Science? No problem you can start with
                  our data analyst course and the best part is that there are
                  lots jobs for data analyst as well!
                </p>
                <ul>
                  <h4>Modules @ Glance</h4>
                  <li>
                    <i className="ri-check-double-line"></i>Excel Basics to Advance
                    with Statistics
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Python Programming for
                    Data Analytics
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>MySQL Database
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Data Visualization and
                    Report Building with Tableau, Power BI, Google Data Studio
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Interview and
                    Communication skills
                  </li>
                </ul>
                <p className="fst-italic">
                  Get hired as Data Analyst by completing our data analytics
                  course!
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={danalytics} alt="" className="img-fluid" />
              </div>
            </div>
            <Link to="/dataanalytics" className="custom__button">Know more</Link>
          </div>
          <div className="tab-pane" id="tab-4">
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
                    <i className="ri-check-double-line"></i>Frontend development
                    using react.js
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Introduction to
                    Database, Google Firebase, MongoDB
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Backend Development with
                    Express.js and Node.js
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Interview &
                    Communication Skills
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={appdev} alt="" className="img-fluid" />
              </div>
            </div>
            <Link to="/appdevelopment" className="custom__button">Know more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;

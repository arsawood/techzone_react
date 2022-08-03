import React from "react";
import "./Courses.css";

import ds from "../../clients/client-4.png";
import DataScienceBrochure from "../../brochures/Data_Science.pdf"

const DataScience = () => {
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
              <h4 className="d-none d-lg-block">Complete Data Science Course</h4>
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
            <button className="brochure__button">
              <a className="brochure__button" href={DataScienceBrochure}>
                Download Complete Brochure
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataScience;

import React from "react";

import "./Courses.css";

import danalytics from "../../clients/client-9.png";
import DataAnalyticsBrochure from "../../brochures/Data_Analytics.pdf"


const DataAnalytics = () => {
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
              <h4 className="d-none d-lg-block">Complete Data Analytics Course</h4>
            </a>
          </li>
        </ul>

        <div className="tab-pane my-4" id="tab-3">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>2 Months Data Analytics Program</h3>
              <p>
                Hesitant to learn Data Science? No problem you can start with
                our data analyst course and the best part is that there are lots
                jobs for data analyst as well!
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
          <button className="brochure__button">
            <a className="brochure__button" href={DataAnalyticsBrochure}>
              Download Complete Brochure
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;

import React from "react";

import "./Courses.css";

import ai from "../../clients/client-4.png";
import AIntelligenceBrochure from "../../brochures/AI_ML.pdf"

const AIntelligence = () => {
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
              <h4 className="d-none d-lg-block">Artificial Intelligence Course</h4>
            </a>
          </li>
        </ul>

        <div className="tab-pane my-4" id="tab-2">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>3 Months Artificial Intelligence Program.</h3>
              <p>
                Our 3 Months AI program will make you expert in the most
                demanding technology and 4th industrial revolution. There are
                lots of jobs waiting for you, join our program and we will guide
                and mentor you to crack the best jobs in AI.
              </p>
              <p className="fst-italic">
                Master Artificial Intelligence with our Industry based
                curriculum
              </p>
              <ul>
                <h4>Modules @ Glance</h4>
                <li>
                  <i className="ri-check-double-line"></i>Introduction to AI, Maths
                  for AI, SQL
                </li>
                <li>
                  <i className="ri-check-double-line"></i>Python Programming for AI
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
          <button className="brochure__button">
            <a className="brochure__button" href={AIntelligenceBrochure}>
              Download Complete Brochure
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIntelligence;

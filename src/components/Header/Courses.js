import React from "react";

import DataAnalytics from "../Courses/DataAnalytics";
import AIntelligence from "../Courses/AIntelligence";
import DataScience from "../Courses/DataScience";
import AppDevelopment from "../Courses/AppDevelopment";

const Courses = () => {
  return (
    <div>
      <DataScience />
      <AIntelligence />
      <DataAnalytics />
      <AppDevelopment />
      <section id="services" className="services section-bg ">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Other Courses</h2>
          <p>We offer wide range of courses that are in huge demand in the industry!</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-briefcase"></i>
              <h4><a href="#">Python Programming</a></h4>
              <p>Learn core python programming in just one month!</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-card-checklist"></i>
              <h4><a href="#">R Programming</a></h4>
              <p>R programming is one of the in-demand languages today. Learn from our industry experts!</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-bar-chart"></i>
              <h4><a href="#">AWS Cloud Solutions Architect</a></h4>
              <p>Cloud is present and future! Learn and work in the technology of present and future.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-binoculars"></i>
              <h4><a href="#">Mysql Database Administration</a></h4>
              <p>The world is generating huge data and who will store and manage data? Learn Mysql database one of the most in-demand database</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-brightness-high"></i>
              <h4><a href="#">Tableau/Power BI/Google Data Studio</a></h4>
              <p>THis Business Intelligence tools are in real demand and there are lots of jobs available!</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="600">
              <i className="bi bi-calendar4-week"></i>
              <h4><a href="#">Java Programming</a></h4>
              <p>Java has been in demand for lots of years and it countinues to be...Learn and Work as Java Developer.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Courses;

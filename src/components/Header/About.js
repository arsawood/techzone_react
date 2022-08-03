import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div style={{zIndex: 10}}>
    <section id="about" className="about section-bg image">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>Who are we</h3>
              <p>
                We are a group of IT professionals with 40 plus years of
                combined Software experience. We have worked on different
                software platforms for different domestic and international
                clients/industries.
              </p>
              <Link to="/about" className="btn btn-danger">
                About us
              </Link>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bx bx-receipt"></i>
                  <h4>Our Mission</h4>
                  <p  >
                    Offering quality and affordable industry-oriented
                    personalized software training.
                  </p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bx bx-cube-alt"></i>
                  <h4>Our Vision</h4>
                  <p>
                    To become a trusted software training partner on emerging
                    technologies for individuals to organizations of all scales.
                    One stop solution for all software training requirements
                    till placement.
                  </p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bx bx-images"></i>
                  <h4>Goals</h4>
                  <p>
                    Creating awareness about the latest Career opportunities in
                    the Software industry, particularly in the field of data
                    science, AI (artificial intelligence), Cloud, blockchain and
                    professional coding. Goals: Creating awareness about the
                    latest Career opportunities in the Software industry,
                    particularly in the field of data science, AI (artificial
                    intelligence), Cloud, blockchain and professional coding.
                  </p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bx bx-shield"></i>
                  <h4>Demand for Our courses</h4>
                  <p>
                    Currently there is a huge demand for Data Scientists, Data
                    Analysts, AI Engineers, Cloud Architects and Mobile app
                    developers. They are required in large numbers by companies
                    in India, Gulf, US and Europe. The demand is growing fast in
                    Gulf countries. During the pandemic, companies are hiring
                    aggressively because these jobs can be performed online.
                  </p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bx bx-images"></i>
                  <h4>Our Competitive advantages</h4>
                  <p>
                    There are few good institutes who offer the same courses but
                    the course fees are very high. And other institutes are not
                    up to the mark in terms of quality training. And here we
                    bridge this gap by providing high-quality training with an
                    affordable fee, internship opportunity and support till
                    placement.
                  </p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bx bx-shield"></i>
                  <h4>Our Unique Selling Proposition (USP)</h4>
                  <p>
                    Our large network of IT Professionals working on diverse
                    platforms. A strong industry connection (a great support to
                    our students) Internship for every student Soft Skills
                    training for job readiness Support till placement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;


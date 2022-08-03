import React from "react";

import "./Team.css";
import saud from "../../team/saud-1.jpg";
import raffay from "../../team/rafay-1.jpg";
import adnan from "../../team/adnan.jpeg";

const Team = () => {
  return (
    <section id="trainer" className="team section-bg">
      <div className="container" data-aos="fade-up" />

      <div className="section-title">
        <h2>Trainers</h2>
        <p>Our Trainers are working professionals with real time experience.</p>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img src={saud} className="img-fluid" alt="" />
              
            </div>
            <div className="member-info">
              <h4>Abdul Rahman Sawood</h4>
              <span>Senior Developer</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="200">
            <div className="member-img">
              <img src={raffay} className="img-fluid" alt="" />
              
            </div>
            <div className="member-info">
              <h4>Syed Abdul Rafay</h4>
              <span>Senior Developer</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="300">
            <div className="member-img">
              <img src={adnan} className="img-fluid" alt="" />
              
            </div>
            <div className="member-info">
              <h4>Adnan Syed</h4>
              <span>Senior Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

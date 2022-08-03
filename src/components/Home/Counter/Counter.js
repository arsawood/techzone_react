import React from "react";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="four col-md-3">
          <div className="counter-box">
            <i className="fa fa-thumbs-o-up"></i>
            <span className="counter">5000</span>
            <p>Students placed in top MNC's</p>
          </div>
        </div>
        <div className="four col-md-3">
          <div className="counter-box">
            <i className="fa fa-group"></i>
            <span className="counter">15</span>
            <p>Courses</p>
          </div>
        </div>
        <div className="four col-md-3">
          <div className="counter-box">
            <i className="fa  fa-shopping-cart"></i>
            <span className="counter">24</span>
            <p>Hours Of Support</p>
          </div>
        </div>
        <div className="four col-md-3">
          <div className="counter-box">
            <i className="fa  fa-user"></i>
            <span className="counter">12</span>
            <p>Real Time Experieced Faculties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

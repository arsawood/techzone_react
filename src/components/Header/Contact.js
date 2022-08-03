import React from "react";

const Contact = () => {
  return (
    <>
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
                <h4 className="d-none d-lg-block">Contact Form</h4>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div style={{ margin: "20px" }}>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Name
            </label>
            <input type="name" className="form-control" />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>

          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>

          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12"></div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

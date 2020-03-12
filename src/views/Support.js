import React from "react";

const Support = () => {
  return (
    <div className="container">
      <form className="well span8" role="form">
        <div className="row">
          <div className="col-md-7">
            <div className="form-group">
              <h1>First Name</h1>
              <input
                className="form-control"
                placeholder="Your First Name"
                type="text"
              />
            </div>

            <div className="form-group">
              <h1>Last Name</h1>
              <input
                className="form-control"
                placeholder="Your Last Name"
                type="text"
              />
            </div>

            <div className="form-group">
              <h1>Email Address</h1>
              <input
                className="form-control"
                placeholder="Your email address"
                type="text"
              />
            </div>

            <div className="form-group">
              <h1>Subject</h1>
              <select className="form-control" id="subject" name="subject">
                <option selected value="na">
                  Choose One:
                </option>

                <option value="service">General Customer Service</option>

                <option value="suggestions">Suggestions</option>

                <option value="product">Product Support</option>
              </select>
            </div>
          </div>

          <div className="col-md-8">
            <h1>Message</h1>
            <textarea className="form-control" rows="10"></textarea>

            <button
              className="btn btn-primary pull-right voffset3"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Support;
// until line 50 is done

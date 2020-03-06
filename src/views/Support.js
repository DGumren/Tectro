import React from "react";
const Support = () => {
  return (
    <div class="container">
      <form class="well span8" role="form">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>First Name</label>
              <input
                class="form-control"
                placeholder="Your First Name"
                type="text"
              />
            </div>

            <div class="form-group">
              <label>Last Name</label>
              <input
                class="form-control"
                placeholder="Your Last Name"
                type="text"
              />
            </div>

            <div class="form-group">
              <label>Email Address</label>
              <input
                class="form-control"
                placeholder="Your email address"
                type="text"
              />
            </div>

            <div class="form-group">
              <label>Subject</label>
              <select class="form-control" id="subject" name="subject">
                <option selected value="na">
                  Choose One:
                </option>

                <option value="service">General Customer Service</option>

                <option value="suggestions">Suggestions</option>

                <option value="product">Product Support</option>
              </select>
            </div>
          </div>

          <div class="col-md-8">
            <label>Message</label>
            <textarea class="form-control" rows="10"></textarea>

            <button class="btn btn-primary pull-right voffset3" type="submit">
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

import React from "react";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div>
      <div class="card mr-3 ml-4 mb-4 m-4 d-flex justify-content-around">
        <img src={props.img} class="card-img-top" alt="This is an img" />
        <div class="card-body">
          <h5 class="Name">{props.name}</h5>
          <p class="card-text"> Price:</p>
          <div class="d-flex justify-content-between">
            <a class="btn btn-primary" href="...">
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;

Cards.propTypes = {
  img: PropTypes.string
};

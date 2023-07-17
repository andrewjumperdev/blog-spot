import React from "react";

const SingleCard = ({width}) => {

  return (
    <div className="card" style={{width:`${width}rem`}}>
      <img src="./header-img.jpg"  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default SingleCard;

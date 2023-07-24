import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, width }) => {
  return (
    <div className="card m-3 mx-auto" style={{ width: `${width}rem` }}>
      <div className="row d-flex flex-column flex-wrap">
        <div className="col">
          <img src={data.img} className="img-fluid" alt="Front Page" />
        </div>
        <div className="col">
          <div className="card-body">
            <p>
              <strong>{data.subject}</strong>
            </p>
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text collapse">{data.content}</p>
            <Link to={`/blog-post/${data.id}`}>leer mas</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

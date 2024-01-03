import React from 'react';
import PropTypes from 'prop-types';
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
            <h5 className="card-title">{data.title}</h5>
            <Link to={`/blog-post/${data.id}`}>leer mas</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  width: PropTypes.number.isRequired,
};


export default Card;

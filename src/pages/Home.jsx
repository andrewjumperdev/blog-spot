import React from "react";
import CardMedia from "../components/CardMedia";
import SingleCard from "../components/SingleCard";
import postTrip from "../data";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <CardMedia data={postTrip} width={80} />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col card-group">
            <SingleCard data={postTrip} width={28} />
            <SingleCard data={postTrip} width={28} />
            <SingleCard data={postTrip} width={28} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

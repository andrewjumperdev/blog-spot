import React from "react";
import CardMedia from "../components/CardMedia";
import posts from "../data";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between align-content-start flex-wrap">
            {posts.map((item) => (
              <CardMedia key={item.id} data={item} width={18} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

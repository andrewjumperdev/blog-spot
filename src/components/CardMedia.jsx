import React from "react";

const LastCardUpload = ({ data, width }) => {
  console.log(data);
  return (
    <div className="card mb-3" style={{width:`${width}rem`}} >
      <div class="row g-0">
        <div class="col-4">
          <img src="./header-img.jpg" className="img-fluid" alt="..." />
        </div>
        <div class="col-8">
          <div class="card-body">
            <p>
              <strong>Front-End </strong>. 1 Hour Ago
            </p>
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.content}</p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastCardUpload;

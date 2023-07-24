import React from "react";
import postTrip from "../data";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const postItem = postTrip.find((item) => item.id == id);

  console.log(id);

  return (
    <article className="container">
      <div className="row">
        <div className="col">
          <h1>{postItem.title}</h1>
          <p className="fw-light fst-italic">
            {postItem.date} by {postItem.author}
          </p>
          <h4>Introducción</h4>
          <p>{postItem.intro}</p>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {postItem.articles.map((item) => (
                <li>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Conclusión</h4>
            <p>{postItem.conclusion}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

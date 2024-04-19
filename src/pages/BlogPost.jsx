import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const BlogPost = () => {
  const { id } = useParams();
  const [postItem, setPostItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "posts");
        const snapshot = await getDocs(collectionRef);

        const firestoreData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const foundPost = firestoreData.find((item) => item.id === id);

        if (foundPost) {
          setPostItem(foundPost);
        } else {
          setError("Post not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
              {postItem.articles && Array.isArray(postItem.articles) ? (
                postItem.articles.map((item) => (
                  <li key={item.id}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </li>
                ))
              ) : (
                <p>No articles available</p>
              )}
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

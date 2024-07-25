import { useEffect, useState } from "react";
import CardMedia from "../components/CardMedia";
import Header from "../components/Header";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [data, setData] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "posts");
        const snapshot = await getDocs(collectionRef);

        const firestoreData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(firestoreData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header
              coverTitle={'Bienvenido al Blog de Desarrollo Web de Andrew Alfaro'}
              coverText={`¡Descubre el mundo del desarrollo web con Andrew Alfaro, un experto desarrollador Full-Stack con más de 3 años de experiencia! En este blog, te ofrecemos recursos valiosos y conocimientos profundos en desarrollo web, automatización de procesos y gestión de API.`}   
              coverImage={'https://i.ibb.co/f9Y44QR/desarrollo-web.png'}    
      />
      <div className="container">
        <div className="row">
          <h3 className="text-decoration-underline">Posts Recientes:</h3>
          <div className="d-flex justify-content-between align-content-start flex-wrap">            
            {data.map((item) => (
              <CardMedia key={item.id} data={item} width={18} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

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
              coverTitle={'Descubre un Mundo de Posibilidades: Desarrollo Web, Viajes y Fitness'}
              coverText={`Explora los rincones del desarrollo web, sumérgete en fascinantes 
                          relatos de viajes y desafía tus habilidades con nuestros ejercicios
                           prácticos. Aquí encontrarás guías, consejos y contenido valioso 
                           para inspirarte y aprender.`}   
              coverImage={''}    
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

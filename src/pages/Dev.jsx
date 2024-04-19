import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import Header from "../components/Header";
import CardMedia from "../components/CardMedia";

const DevPage = () => {
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
        coverTitle={'Tips, Tutoriales y Ejercicios: Desarrollo Web'}
        coverText={`Aca encontraras un conjunto de recursos diseñados para proporcionar orientación, 
                    instrucción y práctica en el ámbito del desarrollo web, 
                    abordando temas diversos como HTML, CSS, JavaScript, frameworks 
                    y tecnologías relacionadas.`}   
        coverImage={''}                  
      />
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between align-content-start flex-wrap">
          {data.map((item) => (              
              item.intro && <CardMedia key={item.id} data={item} width={18} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default DevPage;
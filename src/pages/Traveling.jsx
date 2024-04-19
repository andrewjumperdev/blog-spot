import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const Traveling = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "trips");
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

  const openModal = (index) => {
    setCurrentSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  return (
    <div className="container">
      <div className="row masonry-container">
        <div className="masonry-grid p-5">
          {data.length > 0 && data.map((item, index) => (
            <div className="masonry-grid-item" key={item.id}>
              <img
                className="img-fluid hover-shadow cursor"
                src={item.img}
                alt={item.title}
                onClick={() => openModal(index)}
              />
              <p className="caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
  
      {modalOpen && (
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <div className="mySlides">
            <div className="numbertext">{currentSlide + 1} / {data.length}</div>
            <img src={data[currentSlide]?.img} style={{ width: "100%" }} />
          </div>
          <a className="prev" onClick={prevSlide}>&#10094;</a>
          <a className="next" onClick={nextSlide}>&#10095;</a>
          <div className="caption-container">
            <p id="caption">{data[currentSlide]?.caption}</p>
          </div>
        </Modal>
      )}
    </div>
  );  
};

export default Traveling;

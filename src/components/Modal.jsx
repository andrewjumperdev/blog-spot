const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>&times;</span>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;

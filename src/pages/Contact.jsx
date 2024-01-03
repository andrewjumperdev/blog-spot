import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    try {
      // Guarda el mensaje en Firestore
      const docRef = await addDoc(collection(db, "messages"), {
        email,
        reason,
        description,
      });

      // Mensaje exitoso
      setSuccessMessage("Mensaje enviado con éxito. ¡Gracias!");

      // Limpia los campos después de enviar
      setEmail("");
      setReason("");
      setDescription("");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error.message);
      setErrorMessage("Error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto p-4 border rounded">
          <h2>Contacto</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">
                Motivo
              </label>
              <input
                type="text"
                className="form-control"
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Necesito poner en marcha un proyecto, me gustaría recibir una clase, etc..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Describa detalladamente lo que necesita y me pondré en contacto
                con usted
              </label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
              ></textarea>
            </div>
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Enviar <i className="bi bi-send"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
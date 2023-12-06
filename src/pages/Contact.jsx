import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto p-4 border rounded">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Motivo
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Necesito poner en marcha un proyecto, me gustaría recibir una clase, etc..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Describa detalladamente lo que necesita y me pondré en contacto
              con usted
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary">
            Enviar <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

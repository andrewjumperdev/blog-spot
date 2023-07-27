import React from "react";

const About = () => {
  return (
    <div className="container "> 
      <div className="row mb-5 align-items-center">
        <div className="col-md-12 col-lg-6 px-5 d-flex justify-content-center">
          <img
            src="./Foto_Andrew.png"
            className="rounded-5 w-75"
            alt="Profile"
          />
        </div>
        <div className="col-md-12 col-lg-6">
          <p className="mt-5">
            <span>¡Hola! Soy Andrew</span> un apasionado del mundo de la
            tecnología y el desarrollo. Mi trayectoria comenzó cuando niño me
            atrajo mucho todo lo que tiene que ver con computadoras, luego más
            tarde estudié y obtuve mi certificación CCNA, lo que me brindó una
            sólida base en redes y telecomunicaciones. Sin embargo, mi interés y
            curiosidad por la programación me llevaron a explorar el apasionante
            mundo del desarrollo web. <br />
            Desde entonces, me he sumergido en el stack MERN (MongoDB,
            Express.js, React.js y Node.js), y me he convertido en un
            desarrollador experimentado en la creación de aplicaciones web
            modernas y eficientes. A través de JavaScript, he logrado construir
            interfaces interactivas y dinámicas que ofrecen una experiencia de
            usuario excepcional. <br />
            Además, mi versatilidad en el desarrollo se extiende al lenguaje
            Python, lo que me ha permitido abordar proyectos desde diferentes
            perspectivas y resolver problemas de manera innovadora. <br />
            A lo largo de mi trayectoria, también he adquirido conocimientos
            sólidos en bases de datos relacionales y SQL, incluyendo MySQL y SQL
            Server. Esto me ha permitido diseñar y optimizar estructuras de
            datos, realizar consultas complejas y asegurar una gestión eficiente
            de la información en proyectos diversos. <br />
            La pasión por compartir mis conocimientos y ayudar a otros a crecer
            en el mundo del desarrollo me ha llevado a crear este blog. Mi
            objetivo es ofrecer tutoriales, guías y consejos prácticos para que
            otros entusiastas de la programación puedan adentrarse en el mundo
            del desarrollo. Espero que este espacio sea de mucho agrado y que
            juntos podamos seguir aprendiendo y creciendo en esta emocionante
            industria tecnológica. <br />
            ¡Bienvenidos a este viaje de conocimiento y desarrollo!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col border-top border-buttom p-4 text-center">
          <i className="bi bi-check-circle"></i>
          <p>
            Si buscas mejorar la experiencia de usuario, crear aplicaciones
            eficientes y destacar en el mundo digital, no dudes en contactarme.
            Con habilidades sólidas en el stack MERN, experiencia en JavaScript
            y Python, estoy listo para colaborar en proyectos ambiciosos y crear
            soluciones innovadoras.<br/> ¡Contáctame ahora y llevemos tus ideas al
            siguiente nivel!
          </p>
          <a href="/contact" className="btn btn-primary">
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

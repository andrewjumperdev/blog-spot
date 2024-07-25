import React from "react";


const About = () => {
  return (
    <div className="container">
      <div className="row mx-sm-2 mb-5 align-items-start">
        <div className="col">
        <div className="jumbotron">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                src="./Foto_Andrew.png"
                className="rounded-5 w-100 float-start me-4"
                alt="Profile"
              />
            </div>
            <div className="col">
            <h1 className="display-4">Biografía de Andrew Alfaro</h1>
            <p className="lead">¡Bienvenidos a mi mundo! Soy Andrew Alfaro, nací el 3 de noviembre de 1994 en Costa Rica y actualmente resido en Francia. Mi vida ha sido un fascinante viaje marcado por la determinación, el aprendizaje continuo y una pasión ardiente por el desarrollo web, el emprendimiento y las disciplinas físicas.</p>

            <h2>Infancia y Formación</h2>
            <p>Mi infancia se tejió en la encantadora zona de Tres Ríos, Cartago. Mis primeros pasos académicos los di en la Escuela Central de Tres Ríos y continué mi educación hasta el 3er ciclo en el Colegio Mario Quirós Sasso. Mi bachillerato lo obtuve por madurez en el MEP. Mi interés por la lengua inglesa me llevó al Instituto Nacional de Aprendizaje en Costa Rica, donde me sumergí en el estudio del idioma. Posteriormente, tomé el rumbo de la informática, obteniendo una formación en CCNA.</p>

            <h2>Desarrollo Web y Migración a Francia</h2>
            <p>Mi camino en el desarrollo web inició de forma empírica, explorando las complejidades del código. Con conocimientos sólidos, decidí migrar a Francia en busca de nuevas oportunidades. En OpenClassroom, completé una formación integral en desarrollo web full stack, consolidando mi expertise.</p>

            <h2>Emprendimiento y Experiencia Profesional</h2>
            <p>Ingresé al mundo del emprendimiento con Aquafun, un proyecto dedicado a eventos acuáticos y actividades recreativas para el turismo. Mi papel abarcó desde la organización y marketing hasta el desarrollo web y estrategias comerciales.</p>
          </div>
            </div>
            <div className="row">
              <div className="col">
              <h2>Proyectos Destacados</h2>
            <ul>
              <li>En Bobochic, aumenté las ventas con un robot de monitoreo y análisis de productos en MarketPlaces.</li>
              <li>Fundé Aquafun, desarrollando una API para gestionar la base de datos desde diversas aplicaciones.</li>
              <li>En Wanhao France, implementé soluciones para agilizar procesos y versioné archivos para un dispositivo Raspberry Pi.</li>
            </ul>

            <h2>Vida Personal</h2>
            <p>
              Fuera del ámbito profesional, me sumerjo apasionadamente en el mundo del deporte, una pasión que ha estado presente en mi vida desde la infancia. Desde mis primeros días jugando al fútbol hasta mis actuales compromisos con disciplinas tan diversas como las artes marciales mixtas (MMA), el gimnasio y el Parkour, he tejido una conexión profunda con el movimiento y la actividad física.
              <br />
              Mi dedicación al MMA, un viaje que ya abarca 15 años, ha sido una fuente constante de desafíos y logros. No solo es una disciplina que practico rigurosamente, sino que también la considero una forma de arte que fusiona la fuerza, la estrategia y la resistencia. En mi trayectoria, he explorado diversos estilos de combate, refinando mi técnica y adoptando un enfoque integral hacia el acondicionamiento físico.
              <br />
              Además, mi compromiso con el gimnasio no se limita simplemente a levantar pesas. Como amante del movimiento funcional, diseño rutinas y planes de ejercicios que no solo fortalecen el cuerpo, sino que también promueven la flexibilidad y la resistencia. El Powerlifting es una de mis disciplinas actuales, donde busco superar mis límites y alcanzar nuevas metas constantemente.
              <br />
              El Parkour, esa fascinante disciplina que adopté a la edad de 14 años, ha sido una parte integral de mi vida. Desde entrenar con amigos en mi ciudad hasta aliarnos en proyectos con municipalidades y asociaciones, hemos integrado esta pasión en la enseñanza de la educación física. Como instructor, he contribuido al desarrollo del Parkour en mi comunidad, participando activamente en proyectos educativos y fundando un gimnasio dedicado a esta disciplina.
              <br />
              En resumen, mi compromiso con el deporte no solo se limita a la competición y el entrenamiento personal. Lo veo como una oportunidad para explorar los límites del cuerpo y la mente, y también como una herramienta valiosa para enseñar y motivar a otros. ¡Cada experiencia en el ring, en el gimnasio y en los tejados urbanos ha dejado una huella indeleble en mi vida!
            </p>
              </div>
            </div>
           
            <div className="row border-top  d-flex justify-content-center">
              <div className="col-sm-12 border-top p-4">
            <h2>De que trata mi blog: </h2>
            <p>Es el espacio donde comparto mi conocimiento y perspectivas. ¡Acompáñame en este viaje donde la pasión, la tecnología y la determinación se entrelazan para formar mi historia! ¡Bienvenidos a mi mundo, bienvenido a mi Blog-Spot!</p>
              </div>
            </div>
          </div>
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
            soluciones innovadoras.<br /> ¡Contáctame ahora y llevemos tus ideas al
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

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>Bienvenida</h2>
          <p>La psicóloga XYZ te ofrece un espacio de escucha y apoyo para tu bienestar emocional.</p>
        </div>
      </section>

      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <p>Teléfono: +123 456 789</p>
        <p>Email: contacto@psicologa.com</p>
      </section>
    </div>
  );
};

export default App;

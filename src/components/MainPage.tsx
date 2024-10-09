// src/components/MainPage.tsx
import React from 'react';
import './MainPage.css'; // Asegúrate de crear este archivo para los estilos

const MainPage: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h2>Bienvenida a tu Espacio de Bienestar</h2>
        <p>
          La psicología es el arte de entender y acompañar tu viaje emocional. En este espacio, encontrarás un 
          refugio donde puedes ser tú mismo y explorar tus sentimientos. 
        </p>
        <p>
          Cada pensamiento es una puerta que se abre hacia el entendimiento. La salud emocional no es solo la 
          ausencia de problemas, sino la presencia de bienestar. Aquí, juntos, trabajaremos para que 
          encuentres la paz y la claridad que mereces.
        </p>
        <img 
          src={require('../assets/images/psicoIA.png')} // Ajusta la extensión del archivo si es necesario
          alt="Psicología y bienestar"
          className="main-image"
        />
      </div>
    </section>
  );
};

export default MainPage;

// src/components/Xxxxx.tsx
import React from 'react';

const Otros: React.FC = () => {
  return (
    <section id="otros" className="hero">
      <div className="hero-content">
        <h2>Otros</h2>
        <p>Aquí va la información relevante sobre otros.</p>
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
          src={require('../assets/images/psicoIA4.png')} // Ajusta la extensión del archivo si es necesario
          alt="Psicología y bienestar"
          className="main-image"
        />
      </div>
    </section>
  );
};

export default Otros;

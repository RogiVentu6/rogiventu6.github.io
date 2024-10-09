// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import Terapias from './components/Terapias';
import Evaluaciones from './components/Evaluaciones';
import Otros from './components/Otros';
import './App.css';

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('main');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'main':
        return <MainPage />;
      case 'terapias':
        return <Terapias />;
      case 'evaluaciones':
        return <Evaluaciones />;
      case 'otros':
        return <Otros />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <Contact /> {/* Contacto siempre visible */}
    </div>
  );
};

export default App;

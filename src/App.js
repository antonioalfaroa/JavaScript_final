import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Notes from './components/Notes';
import Weather from './components/Weather';
import Calendar from './components/Calendar'; 
import Maps from './components/Maps';
import calendarLogo from './calendarlogo.png';
import calculatorLogo from './calculator_logo.png';
import notesLogo from './noteslogo.png';
import weatherLogo from './weatherlogo.png';
import mapslogo from './mapslogo.png'

const App = () => {
  const [activeApp, setActiveApp] = useState(null);

  const openApp = (appId) => {
    setActiveApp(appId);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  return (
    <div className="container">
      <div className={`app-title ${activeApp ? 'hidden' : ''}`}>MULTIFUNCTIONAL APP</div> 
      {!activeApp && (
        <div className="widgets">
          <div className="widget" id="calendar" onClick={() => openApp('calendar')}>
            <img src={calendarLogo} alt="Calendar" />
          </div>
          <div className="widget" id="calculator" onClick={() => openApp('calculator')}>
            <img src={calculatorLogo} alt="Calculator" />
          </div>
          <div className="widget" id="notes" onClick={() => openApp('notes')}>
            <img src={notesLogo} alt="Notepad" />
          </div>
          <div className="widget" id="weather" onClick={() => openApp('weather')}>
            <img src={weatherLogo} alt="Weather" />
          </div>
          <div className="widget" id="maps" onClick={() => openApp('maps')}>
            <img src={mapslogo} alt="Maps" />
          </div>
        </div>
      )}
      {activeApp === 'calculator' && <Calculator closeApp={closeApp} />}
      {activeApp === 'notes' && <Notes closeApp={closeApp} />}
      {activeApp === 'weather' && <Weather closeApp={closeApp} />}
      {activeApp === 'calendar' && <Calendar closeApp={closeApp} />} 
      {activeApp === 'maps' && <Maps closeApp={closeApp} />}
    </div>
  );
};

export default App;

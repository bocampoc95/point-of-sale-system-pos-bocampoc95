import React, { useState, useEffect } from 'react';
import acces from '../../../public/Acess.svg';
const AccessibilityPanel = () => {
  // const [contrast, setContrast] = useState('');
  const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  // const [contrastButtonsVisible, setContrastButtonsVisible] = useState(false);
  const [voiceMessageVisible, setVoiceMessageVisible] = useState(false);

  useEffect(() => {
    // Load settings from localStorage on component mount
    // const storedContrast = localStorage.getItem('contrastSetting');
    const storedDyslexia = localStorage.getItem('dyslexiaSetting');
    const storedFontSize = localStorage.getItem('fontSize');

    // if (storedContrast && storedContrast !== 'none') setContrast(storedContrast);
    if (storedDyslexia === 'true') setDyslexiaFriendly(true);
    if (storedFontSize) setFontSize(parseFloat(storedFontSize));
  }, []);

  // useEffect(() => {
  //   // Update styles based on contrast setting
  //   document.documentElement.className = contrast || '';
  //   // applyImageContrast();
  // }, [contrast]);

  useEffect(() => {
    // Update font settings based on dyslexia-friendly mode
    if (dyslexiaFriendly) {
      document.body.style.fontFamily = "'OpenDyslexic', sans-serif";
      document.body.style.letterSpacing = '0.1em';
      document.body.style.wordSpacing = '0.15em';
      document.body.style.lineHeight = '1.6';
    } else {
      document.body.style.fontFamily = '';
      document.body.style.letterSpacing = '';
      document.body.style.wordSpacing = '';
      document.body.style.lineHeight = '';
    }
  }, [dyslexiaFriendly]);

  useEffect(() => {
    // Update font size globally
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // const applyImageContrast = () => {
  //   const images = document.querySelectorAll(
  //     "iframe, img:not(.entidades__link-img):not(.entidades__link-img:hover):not([src="+acces+"])"
  //   );
  //   images.forEach((img) => {
  //     if (contrast === 'contrast') img.style.filter = 'grayscale(0%)';
  //     else if (contrast.startsWith('contrast-')) img.style.filter = 'grayscale(100%)';
  //     else img.style.filter = 'none';
  //   });
  // };

  // const handleToggleContrast = (type) => {
  //   setContrast((prev) => (prev === type ? '' : type));
  //   localStorage.setItem('contrastSetting', type === '' ? 'none' : type);
  // };

  const handleToggleDyslexia = () => {
    setDyslexiaFriendly((prev) => {
      localStorage.setItem('dyslexiaSetting', !prev);
      return !prev;
    });
  };

  const handleZoomIn = () => {
    setFontSize((prev) => Math.min(prev + 1, 20));
    localStorage.setItem('fontSize', Math.min(fontSize + 1, 20));
  };

  const handleZoomOut = () => {
    setFontSize((prev) => Math.max(prev - 1, 13));
    localStorage.setItem('fontSize', Math.max(fontSize - 1, 13));
  };

  const handleRestoreAccessibility = () => {
    // setContrast('');
    setDyslexiaFriendly(false);
    setFontSize(16);
    localStorage.clear();
  };

  const handleVoiceMessage = () => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
      const message = new SpeechSynthesisUtterance(
        'Bienvenido. Este es un lector de pantalla diseñado para personas con discapacidad visual. Si estás en Windows, puedes activar el Narrador presionando Control más Windows más Enter. Usa las flechas para moverte entre secciones y enlaces.'
      );
      message.lang = 'es-ES';
      message.rate = 1;
      message.pitch = 1;
      window.speechSynthesis.speak(message);
    } else {
      console.log('El navegador no soporta la API de síntesis de voz.');
    }
  };

  return (
    <div>
      {/* // <!-- Button Accessibility --> */}
<div className="fixed bottom-3/4 right-0 w-[40px] h-[40px] flex items-center justify-center">

    {/* <div className="fixed bottom-[50%] right-[5%] z-50"> */}
    <div className="fixed bottom-3/4 right-0 w-[40px] h-[40px] flex items-center justify-center">
  <button
    className="w-[40px] h-[40px] rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 flex items-center justify-center"
    onClick={() => setButtonsVisible((prev) => !prev)}
    aria-label="Abrir panel de accesibilidad"
  >
    <img className="w-8 h-8" src={acces} alt="Accessibility Button" />
  </button>

  {buttonsVisible && (
    <div
      id="toggle-buttons"
      className="absolute top-12 right-0 w-64 p-4 bg-gray-700 text-white rounded-lg shadow-lg flex flex-col gap-4"
    >
      <button
        onClick={handleToggleDyslexia}
        className="bg-gray-600 hover:bg-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {dyslexiaFriendly ? 'Desactivar Dislexia' : 'Activar Dislexia'}
      </button>
      <button
        onClick={handleZoomIn}
        className="bg-gray-600 hover:bg-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Aumentar tamaño de fuente"
      >
        Aumentar Fuente
      </button>
      <button
        onClick={handleZoomOut}
        className="bg-gray-600 hover:bg-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Disminuir tamaño de fuente"
      >
        Disminuir Fuente
      </button>
      <button
        onClick={handleVoiceMessage}
        className="bg-gray-600 hover:bg-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Activar lector de voz"
      >
        Lector de Voz
      </button>
      <button
        onClick={handleRestoreAccessibility}
        className="bg-gray-600 hover:bg-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Restaurar configuración de accesibilidad"
      >
        Restaurar Configuración
      </button>
    </div>
  )}
</div>

  </div>
  {/* // <!-- Button Accessibility --> */}
      
    </div>
  );
};

export default AccessibilityPanel;



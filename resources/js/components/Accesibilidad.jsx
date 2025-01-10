import React, { useState } from 'react';
import acces from '../../../public/Acess.svg';


const Accesibilidad = () => {
  const [fontSize, setFontSize] = useState(16);

  const contraste = () => {
    const htmlElement = document.querySelector('html');
    const clase = 'html-constraste-activo';
    if (htmlElement.classList.contains(clase)) {
      htmlElement.classList.remove(clase);
    } else {
      htmlElement.classList.add(clase);
    }
  };

  const aumentarLetra = () => {
    if (fontSize >= 22) return;
    setFontSize((prevSize) => prevSize + 2);
    document.querySelector('body').style.fontSize = `${fontSize + 2}px`;
  };

  const reducirLetra = () => {
    if (fontSize <= 16) return;
    setFontSize((prevSize) => prevSize - 2);
    document.querySelector('body').style.fontSize = `${fontSize - 2}px`;
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-full hover:translate-x-0 bg-blue-900 rounded-l-lg overflow-hidden transition-all duration-300 h-12 hover:h-52">
      <div className="text-red">
        <div className="flex items-center px-4 py-2 border-b border-blue-800">
          <i className="fas fa-universal-access text-2xl mr-2">
                  <img class="w-8 h-8" src={acces} alt="Accessibility Button" />
          </i>
          <div class="fixed bottom-3/4 right-0 w-[40px] h-[40px] flex items-center justify-center">
    <div class="bg-red-600 w-full h-full rounded-full shadow-lg">
      <img class="w-8 h-8" src= {acces}  alt="Accessibility Button" />
    </div>
  </div>
          <span className="text-lg font-semibold">Accesibilidad</span>
        </div>
        <div className="flex flex-col">
          <button
            onClick={contraste}
            className="flex items-center px-4 py-2 hover:bg-blue-800 border-b border-blue-800"
          >
            <i className="fas fa-adjust text-2xl mr-2"></i>
            <span>Contraste</span>
          </button>
          <button
            onClick={aumentarLetra}
            className="flex items-center px-4 py-2 hover:bg-blue-800 border-b border-blue-800"
          >
            <img
              src={acces}
              alt="Aumentar letra"
              className="w-7 h-7 mr-2"
            />
            <span>Aumentar letra</span>
          </button>
          <button
            onClick={reducirLetra}
            className="flex items-center px-4 py-2 hover:bg-blue-800"
          >
            <img
              src={acces}
              alt="Reducir letra"
              className="w-7 h-7 mr-2"
            />
            <span>Reducir letra</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accesibilidad;

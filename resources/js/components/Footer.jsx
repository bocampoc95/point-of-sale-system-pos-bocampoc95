// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

function Footer(){ 
    return (
        // <!-- FOOTER -->
        <footer className="Foot  md:w-full  flex-col   md:inline-flex">
            <div className="Footer  h-full p-2 bg-[#eaf2fd] justify-center items-center  ">
              <div className="Frame1 p-[80.50px] justify-between items-center gap-4 md:flex mb-1">
                  <div className="Logotipo w-44 pl-[50px] py-[15.75px] justify-end items-center flex">
                    <img className="Logo w-[60px] h-[42px] rounded-full" src="https://via.placeholder.com/42x42" />
        
                    <div className="Texto w-[126px] self-stretch pr-2 justify-start p-2 ">
                      <div className="BocSoft w-[152px] h-[55px] text-center text-black text-base font-bold font-['Raleway'] leading-10">BOC SOFT</div>
                    </div>
        
                  </div>
                  <div className="PolTicaDePrivacidad w-[175px] self-stretch text-center text-[#464646] text-base font-medium font-['Raleway']">Política de privacidad</div>
                  <div className="NuestrasTiendas w-[175px] self-stretch text-center text-[#464646] text-base font-medium font-['Raleway']">Nuestras Tiendas</div>
                  <div className="QuieroSerFranquiciado w-[175px] self-stretch text-center text-[#464646] text-base font-medium font-['Raleway']">Quiero ser franquiciado</div>
                  <div className="QuienesSomos w-[175px] self-stretch text-center text-[#464646] text-base font-medium font-['Raleway']">Quienes somos</div>
              </div>
            </div>
            <div className="Rodap self-stretch p-8 bg-white justify-center items-center gap-2.5 md:inline-flex ">
              <div className="DesarrolladoPorBocSw2023 w-[260px] text-center text-[#464646] text-base font-medium font-['Raleway']">Desarrollado por BOC SW <br/>©2023</div>
            </div>
          </footer>
        //   <!-- FOOTER -->
    )
  }


export default Footer

// if (document.getElementById('footer')) {
//     const Index = ReactDOM.createRoot(document.getElementById("footer"));

//     Index.render(
//         <React.StrictMode>
//             <Footer/>
//         </React.StrictMode>
//     )
// }
// import PropTypes from 'prop-types'
import React  from 'react'
import { Link, useNavigate } from "react-router-dom"; 
import avatar from "/public/avatar.svg";
import { useAuth } from '../hooks/useAuth';
const navItems = [
  { name: "Home", path: "/", icon: "🏠" },
  // { name: "Products", path: "/products", icon: "ℹ️" },
  { name: "Products", path: "/products", icon: "🛒" },
  { name: "Clients", path: "/clients", icon: "💼" },
  { name: "Sales", path: "/sales", icon: "💰" },
  { name: "Reports", path: "/reports", icon: "📊" },
  // { name: "Reports", path: "/reports", icon: "📞" },
];
export function Navbar() {
  const data =useAuth();


    return (
        <div id="header" className="      bg-[#96bcf1] w-screen">
        <div className="    sm:w-full  flex items-center  justify-between p-1">
      <div className="sm:justify-end lg:justify-between">
      <nav className=" sm:flex gap-2 p-2 w-f ">
      
      <div className="rounded-md m-1  sm:flex  gap-4 justify-between bg-[#EAF2FD] " >
      <div className="rounded-md   text-center text-[#24292f] text-base  font-normal font-['Noto Sans'] leading-normal"> 
      
      {navItems.map((item, index) => (
          // <li key={index} className="nav-item ">
            <Link key={item.path}  to={item.path} className="rounded-md   nav-link  hover:bg-gray-700 hover:text-white gap-2 p-2">
              {item.icon && <span className="nav-icon">{item.icon}</span>}
              {item.name}
            </Link>
          
        ))}
</div>
       
  
      
      
      </div>
          </nav>
          </div>

          <div className="flex justify-center items-center gap-4 p-3">

            <button 
              onClick={data.logout} 
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
  {/* Nombre de usuario */}
  <div className="text-lg font-medium">{data.user}</div>

  {/* Avatar */}
  <div className="w-[80px] h-[80px] flex justify-center items-center">
    <img 
      className="rounded-full p-2" 
      src={avatar} 
      alt="Avatar"
    />
  </div>
</div>

      
      </div>


      </div>
    )
  }

export default Navbar


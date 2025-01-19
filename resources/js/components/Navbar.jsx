// import PropTypes from 'prop-types'
import React  from 'react'
import { Link } from "react-router-dom"; 
import avatar from "/public/avatar.svg";
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
          <div  alt="Avatar" className="DAvatars1   w-[80px] h-[80px]  top-[5px]  flex-col justify-center items-center inline-flex ">
            {/* <img className="Avatars3dAvatar1 rounded-full  p-4 " src="/public/avatar.svg" /> */}
            <img className="Avatars3dAvatar1 rounded-full  p-4 " src={avatar} />
          </div>
      </div>


      </div>
    )
  }

export default Navbar


import React  from 'react'
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LayouthAdmin from './layouts/LayouthProducts';
import LayouthPublic from './layouts/LayouthPublic';
import LayouthProducts from './layouts/LayouthProducts';
import LayouthClient from './layouts/LayouthClient';
import LayouthDashboards from './layouts/LayouthDashboards';
import LayouthSales from './layouts/LayouthSales';


const layoutItems = [
    { name: <LayouthPublic/>, path: "/", icon: "🏠" },
    { name: <LayouthProducts/>, path: "/products", icon: "ℹ️" },
    { name: <LayouthClient/>, path: "/clients", icon: "💼" },
    { name:<LayouthSales/>, path: "/sales", icon: "💼" },
    { name: <LayouthDashboards/>, path: "/reports", icon: "📞" },
  ];

export default function AppMain() {
    

  return (
    // <div>App laravel react  {fecha} </div>
    <div>
    {/* <LagouthAdmin/> */}
    <BrowserRouter>
            
            <Routes>
            {layoutItems.map((item, index) => (
            <Route key={item.path} path={item.path} element={ item.name}/>
            ))}


{/* 
                <Route path="/" element={ 
              
                        <LayouthPublic/>
                        
                    } 
                    />
                <Route path="/products" element={ 
                    <LayouthProducts/>       
                    } 
                /> */}
                


            </Routes>
        </BrowserRouter>
    
     </div>
  )
}


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        // <React.StrictMode>
            <AppMain/>
        // </React.StrictMode>
    )
}
import React  from 'react'
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import LayouthAdmin from './layouts/LayouthProducts';
// import LayouthPublic from './layouts/LayouthPublic';
// import LayouthProducts from './layouts/LayouthProducts';
// import LayouthClient from './layouts/LayouthClient';
// import LayouthDashboards from './layouts/LayouthDashboards';
// import LayouthSales from './layouts/LayouthSales';
import { PublicRoute } from './auth/PublicRoute';
// import { LoginScreen } from './components/Login';
import { PrivateRoute } from './auth/privateroute';
// import { AuthProvider } from './InitApp';
import { CartContext, CartProvider } from './context/CartContext';
import {AuthProvider} from './context/AuthContext';
import { LayouthPrivate } from './layouts/LayouthPrivate';


export default function AppMain() {
    

  return (
    // <div>App laravel react  {fecha} </div>
    <div>
    {/* <LagouthAdmin/> */}
    <BrowserRouter>
            

            <Routes>
            <Route path="/public" element={
                    <PublicRoute>
                        {/* <LoginScreen /> */}
                        Esto es un hijo
                    </PublicRoute>
                } 
                />
            {/* <Route path="/" element={  */}
                
             
                    {/* }  />             */}
            {/* {layoutItems.map((item, index) => (
            <Route key={item.path} path={item.path} element={ item.name}/>
            ))} */}


                <Route path="*" element={ 
              
                        // <LayouthPublic/>
                        // <CartContext.Provider value={{ cart: [
                            // {id:1,name:"arroz",img:'https://via.placeholder.com/71x71',price:10,unidad:10},{id:2,name:"Canela",image:'https://via.placeholder.com/71x71',price:100,unidad:4}
                        // ], setCart: () => {} ,clearCart: () => {setCart([])} }}>
                        // {/* <PrivateRoute> */}
                            // {/* <DashboardRoutes /> */}
                            <CartProvider>
                                <LayouthPrivate/>

                            </CartProvider>
            
                        // {/* </PrivateRoute> */}
                        
                    // {/* </CartContext.Provider> */}
                        
                    } 
                    />
                {/* <Route path="/products" element={  
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
        <React.StrictMode>
            <AuthProvider>

            <AppMain/>
            </AuthProvider>


            
         </React.StrictMode>
    )
}
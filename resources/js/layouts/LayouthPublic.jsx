import React from 'react'
import Navbar from '../components/Navbar'
import AccessibilityPanel from '../components/AccessibilityPanel'
import Footer from '../components/Footer'
import ProductGallery from '../components/ProductGallery'
export default function LayouthPublic() {
  const fecha = new Date();

  return (
    <div>
        <Navbar/>

<div>
  Public Login 
  ADMIN
  App laravel reac  {fecha.getFullYear()}
  <>
  {/* <img src="images/leche.jpg" alt="Leche">
  n */}


  {/* <img src="/storage/images/products/1.jpg" alt="Leche" /> */}


  </>


</div>
<AccessibilityPanel/>

<Footer/>

       
        </div>


  )
}



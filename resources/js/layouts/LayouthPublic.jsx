import React from 'react'
import NavbarPublic from '../components/NavbarPublic'
import AccessibilityPanel from '../components/AccessibilityPanel'
import Footer from '../components/Footer'
import Register from '../components/Register'
import Login from '../components/Login'
export default function LayouthPublic() {
  const fecha = new Date();

  return (
    <div>
        <NavbarPublic/>

<div>
  Public Login 
  ADMIN POS
  App laravel react  {fecha.getFullYear()}
  <>
  {/* <img src="images/leche.jpg" alt="Leche">
  n */}


  {/* <img src="/storage/images/products/1.jpg" alt="Leche" /> */}


  </>

  <div >
  <div className='flex flex-row gap-2 p-2 justify-center'>
  <div className='flex flex-col items-center '></div>
<Register></Register>

<Login></Login>
  </div>

</div>
<AccessibilityPanel/>
  </div>


<Footer/>

       
        </div>


  )
}



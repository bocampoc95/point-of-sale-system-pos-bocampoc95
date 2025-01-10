import React from 'react'
import Navbar from '../components/Navbar'
import AccessibilityPanel from '../components/AccessibilityPanel'
import Footer from '../components/Footer'

export default function LayouthPublic() {
  const fecha = new Date();

  return (
    <div>
        <Navbar/>

<div>
  Public Login 
  ADMIN
  App laravel reac  {fecha.getFullYear()}
</div>
<AccessibilityPanel/>
        <Footer/>
        </div>


  )
}



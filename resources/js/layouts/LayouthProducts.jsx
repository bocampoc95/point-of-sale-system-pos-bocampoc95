import React from 'react'

import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import AsideSale from '../components/AsideSale'
import AccessibilityPanel from '../components/AccessibilityPanel'
export default function LayouthProducts() {
  return (
    <div className="">
        <Navbar/>

        <div className='w-screen  md:flex items-center gap-2 '>
        <div className="flex flex-auto justify-between">
    <Products/>

</div>

<div className="flex flex-col h-full p-4 gap-1 space-y-1">
  <AsideSale/>
</div>
        </div>

<AccessibilityPanel/>
        <Footer/>
        </div>


  )
}



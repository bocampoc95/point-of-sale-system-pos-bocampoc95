import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sales from '../components/Sales'
import AccessibilityPanel from '../components/AccessibilityPanel'
import AsideSale from '../components/AsideSale'

function LayouthSales() {
  return (
    <div>
        <Navbar/>

        <div className='w-full  md:flex items-center gap-2 '>
        <div className="flex flex-auto justify-between">
    
    <Sales/>
</div>

<AccessibilityPanel/>

<div className="flex flex-col h-full p-4 gap-1 space-y-1">
  <AsideSale/>
</div>
        </div>
        <Footer/>
        </div>  )
}

export default LayouthSales
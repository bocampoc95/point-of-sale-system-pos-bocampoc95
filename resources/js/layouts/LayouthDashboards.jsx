import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AsideSale from '../components/AsideSale'
import Dashboard from '../components/Dashboard'
import AccessibilityPanel from '../components/AccessibilityPanel'

function LayouthDashboards() {
  return (
    <div>
        <Navbar/>
        <div className='w-screen  md:flex items-center gap-2 '>
        <div className="flex flex-auto justify-between">
    <h1>Reports</h1>
    <Dashboard></Dashboard>
</div>
<AccessibilityPanel/>

<div className="flex flex-col h-full p-4 gap-1 space-y-1">
  <AsideSale/>
</div>
        </div>
        <Footer/>
        </div>  )
}

export default LayouthDashboards
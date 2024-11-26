import React from 'react'
import EmployeeHeader from './EmployeeHeader'

function EmpHeroBanner() {
  return (
    <>

      <section className='herobanner'>
         {/* header */}
         <EmployeeHeader/>

        <div className='container'> 
        <div className='hero-content-box'>
               <div className='hero-content'>
                <h2 className='banner-heading'>Get Services Whenever  You Need Them</h2>
                <p className='banner-txt'>Find Local Service Professional Near You</p>
                <form className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="What services do you need?"
      />
      <button className="search-button">
      <span className="material-icons search-icon">search</span>
      </button>
    </form>

               </div>
         </div>
        </div>        
      </section>
    </>
  )
}

export default EmpHeroBanner

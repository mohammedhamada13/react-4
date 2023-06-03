import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Navs = () => {
  return (
    <div>
      
      <>
      
      <Link to="contact">Contacr</Link>
      </>
    <Outlet/>
    </div>
  )
}

export default Navs

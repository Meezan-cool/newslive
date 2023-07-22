import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
      <button><i className="fa-solid fa-bars"></i></button>
      {/* <h1>NewsLive</h1> */}
      <img src={require('./new1.webp') } alt="" /> 
      <button><i className="fa-solid fa-magnifying-glass"></i></button>
    </nav>
  )
}
export default Navbar
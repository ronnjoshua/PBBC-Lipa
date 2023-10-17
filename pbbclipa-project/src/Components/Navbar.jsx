import React, {useState} from 'react'
import menuIcon from "../assets/bars-solid.svg";


const Navbar = () => {
  const navBarMobile = ['Home', 'About us', 'Contact', 'Projects', 'FAQ', 'Get Involved']
  const navBarRef = []
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenuHandler = () => {
    if (isMenuOpen){
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
  };


  return (
    <nav className="flex justify-center h-[2rem] relative">
        <img
          src={menuIcon}
          className={`ml-auto mr-[0.5rem] h-[2rem] md:hidden ${isMenuOpen ? 'animate-spinMenuIcon'
          :setIsMenuOpen ? 'animate-spinMenuIcon2':''} `}
          onClick={openMenuHandler}
          
        />{isMenuOpen && <div className={`z-10 absolute right-0 top-8 animate-slideToLeft`}>
          <ul className='md:hidden text-white border-4 p-4 bg-yellow-700 space-y-5 text-[1.3rem] bg-opacity-[0.95]'>
            {navBarMobile.map((navList) => {return <li><a href={navBarRef}>{navList}</a></li>})}
          </ul>
        </div>}
        <ul className="md:flex md:space-x-10 hidden">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">About Us</a>
          </li>
          <li>
            <a href="/Contact/contact.html">Contact</a>
          </li>
          <li>Projects</li>
          <li>FAQ</li>
          <li>Get Involved</li>
        </ul>
      </nav>
  )
}

export default Navbar
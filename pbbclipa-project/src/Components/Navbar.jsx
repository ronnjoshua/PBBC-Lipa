import React from 'react'
import menuIcon from "../assets/bars-solid.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-center h-[2rem]">
        <img
          src={menuIcon}
          className="ml-auto mr-[0.5rem] h-[2rem] md:hidden"
        />
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
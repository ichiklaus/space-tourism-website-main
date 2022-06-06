import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NavList.css';

function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger">
        <div
          className="burger"
          style={{ transform: isOpen ? `rotate(45deg)` : `rotate(0)` }}
        ></div>
        <div
          className="burger"
          style={{
            transform: isOpen ? `translateX(100%)` : `translateX(0)`,
            opacity: isOpen ? 0 : 1,
          }}
        ></div>
        <div
          className="burger"
          style={{
            transform: isOpen ? `rotate(-45deg)` : `rotate(0)`,
          }}
        ></div>
      </div>
    </>
  );
}

export default function NavList() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav
      className={`${
        hamburgerOpen ? `transition-in bg-color-1` : `transition-out bg-color-1`
      } navlist`}
    >
      <ul
        className={`${
          hamburgerOpen ? 'visible' : 'hidden'
        } flex flex-row gap-x-3 padding-l-7`}
      >
        <li>
          <NavLink className="font-barlowCondensed nav-text text-white" to="/">
            {' '}
            <span id="home" className="f-400 text-upper flex flex-row gap-x-.5">
              Home
            </span>{' '}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="font-barlowCondensed nav-text text-white"
            to="destination"
          >
            {' '}
            <span
              id="destination"
              className="f-400 text-upper flex flex-row gap-x-.5"
            >
              Destination
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="font-barlowCondensed nav-text text-white"
            to="crew"
          >
            {' '}
            <span id="crew" className="f-400 text-upper flex flex-row gap-x-.5">
              Crew
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="font-barlowCondensed nav-text text-white"
            to="technology"
          >
            {' '}
            <span
              id="technology"
              className="f-400 text-upper flex flex-row gap-x-.5"
            >
              Technology
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="hamb" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </nav>
  );
}

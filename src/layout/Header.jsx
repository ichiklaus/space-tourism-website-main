import React from 'react';
import { motion } from 'framer-motion';

import NavList from '../components/NavList';

import logo from '../assets/shared/logo.svg'

function Header() {
  return (
    <header className="header">
      {/* <motion.div
      className=''
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{
        duration: 1,
        ease: 'backInOut',
        type: 'tween',
        stiffness: 200,
      }}
      > */}
      <img className='header__logo' src={logo} alt="logo" />
      <NavList />
      {/* </motion.div> */}
    </header>
  );
}

export default Header;

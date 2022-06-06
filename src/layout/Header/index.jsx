import React from 'react';
import { motion } from 'framer-motion';

import NavList from '../../components/NavList';
import './Header.css'

function Header() {
  return (
    <header>
      <motion.div
      className='header'
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
      >
      <NavList />
      </motion.div>
    </header>
  );
}

export default Header;

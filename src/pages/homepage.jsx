import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Homepage({ setLocation }) {
  const location = useLocation();
  useEffect(() => setLocation(location.pathname), [])
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{
          ease: 'easeOut',
          duration: 2,
        }}
      >
        <div className='homepage '>
          <div className='content'>
            <h1 className='flex flex-col flex-initial'>
              <span className="font-barlowCondensed f-100 text-upper text-28 mobile:text-16 text-slate ">
                So, you want to travel to
              </span>
              <span className="font-bellefair f-100 text-upper text-150 mobile:text-80 text-white">Space</span>
            </h1>
            <p className='font-bellefair f-100 text-p text-slate flex-initial'>
              Let’s face it; if you want to go to space, you might as well genuinely
              go to outer space and not hover kind of on the edge of it. Well sit
              back, and relax because we’ll give you a truly out of this world
              experience!
            </p>
          </div>
        <div className='button__container'>
          <motion.button
            className='explore__button'
            whileTap={{ scale: 0.9 }}
            whileHover={{
              boxShadow: '0 0 0 40px hsla(0, 0%, 59%, 0.5)',
              transition: {
                duration: 0.3,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 140,
              },
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              type: 'tween',
              stiffness: 100,
            }}
          >
            <span className="text-32 mobile:text-20 font-bellefair text-upper">Explore</span>
          </motion.button>
        </div>
    </div>
      </motion.div>
  );
}

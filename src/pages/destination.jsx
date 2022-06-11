import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

import destinationsWebp from '../assets/destination/*.webp';

function Destination({ setLocation, destinations }) {
  const [activeContent, setActiveContent] = useState('0');
  const location = useLocation();
  useEffect(() => {
    setLocation(location.pathname);
  }, []);

  return (
    <div className="container">
      <h1 className="font-barlowCondensed text-28 mobile:text-16 section-title">
        <span className="text-slate-2 f-700">01 </span>
        <span className="text-upper text-white f-400">
          Pick your destination
        </span>
      </h1>
      {/* Container for destination information */}
      <AnimatePresence exitBeforeEnter>
        <div id="" className="section-grid-container">
          {/* Start of Picture section */}
          <div className="section-picture">
            <motion.div
              className="section-image-fixed"
              key={activeContent}
              initial={{ opacity: 0, scale: 0.4 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              animate={{
                rotate: 45,
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
            >
              <motion.div
                animate={{ rotate: '360deg' }}
                transition={{ repeat: 'Infinity', duration: 60 }}
              >
                {Object.entries(destinationsWebp)
                  .filter(
                    ([imageName]) =>
                      imageName === destinations[activeContent].images.webp,
                  )
                  .map(([imageName, imageUrl]) => (
                    <img
                      src={imageUrl}
                      alt={destinations[activeContent].name}
                      className="section-image destination"
                    />
                  ))}
              </motion.div>
            </motion.div>
          </div>
          {/* END of picture */}
          {/* START Navigation and Content */}
          <div id="" className="section-content destination">
            <div className="buttons-container destination">
              {Object.entries(destinations).map(([key, value]) => (
                <Button
                  keys={key}
                  value={value.name}
                  style={`button button__destination
                  ${activeContent === key && 'active'}
                  barlowCondensed nav-text mobile:text-14 text-slate text-upper`}
                  setActiveContent={setActiveContent}
                />
              ))}
            </div>
            <div className="section-info destination margin-t-1">
              <h2 className="font-bellefair text-white text-100 mobile:text-56 text-upper f-400 margin-y-.5">
                {destinations[activeContent].name}
              </h2>
              <p className="font-barlow text-slate mobile:text-15 text-p">
                {destinations[activeContent].description}
              </p>
              <div className="destination-stats">
                <p className="text-upper flex flex-col">
                  <span className="text-slate font-barlowCondensed subheading-2">
                    avg. distance
                  </span>
                  <span className="text-white font-bellefair subheading-1">
                    {destinations[activeContent].distance}
                  </span>
                </p>
                <p className="text-upper flex flex-col">
                  <span className="text-slate font-barlowCondensed subheading-2">
                    est. travel time
                  </span>
                  <span className="text-white font-bellefair subheading-1">
                    {destinations[activeContent].travel}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* START Navigation and Content */}
        </div>
      </AnimatePresence>
      {/* Container for destination information */}
    </div>
  );
}

export default Destination;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

import crewImagesWebp from '../assets/crew/*.webp';

function Crew({ setLocation, crew }) {
  const [activeContent, setActiveContent] = useState('0');
  const location = useLocation();
  useEffect(() => setLocation(location.pathname), []);

  return (
    <div className="section__container-wrapper">
      <h1 className="font-barlowCondensed text-28 mobile:text-16 section__title">
        <span className="text-slate-2 f-700">02 </span>
        <span className="text-upper text-white f-400">Meet your crew</span>
      </h1>
      {/* Container for crew information */}
      <AnimatePresence exitBeforeEnter>
        <div className="section__content-wrapper">
          {/* Start of Content section */}
          <div className="section__content section__content--crew">
            <div className="section_info section__info--crew margin-t-1">
              <h2 className="font-bellefair f-400 text-upper flex flex-col gap-y-1.5">
                <span className="text-slate text-32 tablet:text-24 mobile:text-16">
                  {crew[activeContent].role}
                </span>
                <span className="text-white text-56 tablet:text-40 mobile:text-24">
                  {crew[activeContent].name}
                </span>
              </h2>
              <p className="section-bio margin-t-0 crew font-barlow text-slate text-p tablet:text-16 mobile:text-15">
                {crew[activeContent].bio}
              </p>
            </div>

            {/* START of Navigation */}
            <div className="buttons__container buttons__container--crew ">
              {Object.entries(crew).map(([key]) => (
                <Button
                  keys={key}
                  value={key.name}
                  style={`button button__crew 
                  ${activeContent === key && 'active'}
                  barlowCondensed nav-text mobile:text-14 text-slate text-upper`}
                  setActiveContent={setActiveContent}
                />
              ))}
            </div>
            {/* END of Navigation */}
          </div>
          {/* END of Content */}
          {/* START of picture section */}
          <div className="section__image-wrapper crew">
            <motion.div
              key={activeContent}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, type: "tween", stiffness: 100 }}
            >
              {Object.entries(crewImagesWebp)
                .filter(
                  ([imageName]) =>
                    imageName === crew[activeContent].images.webp,
                )
                .map(([imageName, imageUrl]) => (
                  <div className="section__image--relative crew">
                    <img
                      src={imageUrl}
                      alt={crew[activeContent].name}
                      className="section__image--crew"
                    />
                  </div>
                ))}
            </motion.div>
          </div>
          {/* END of picture section */}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Crew;

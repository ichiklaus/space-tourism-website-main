import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

import technologyImages from '../assets/technology/*.jpg';

function Technology({ setLocation, technology }) {
  const [activeContent, setActiveContent] = useState('0');
  const location = useLocation();
  useEffect(() => setLocation(location.pathname), []);

  let portraitImagesArr = [];
  let landscapeImagesArr = [];

  Object.entries(technologyImages)
    .filter(
      ([imageName]) => imageName === technology[activeContent].images.portrait,
    )
    .map(([name, url]) => (portraitImagesArr = [name, url]));

  Object.entries(technologyImages)
    .filter(
      ([imageName]) => imageName === technology[activeContent].images.landscape,
    )
    .map(([name, url]) => (landscapeImagesArr = [name, url]));

  return (
    <div className="section__container-wrapper">
      <h1 className="font-barlowCondensed text-upper text-28 mobile:text-16 section__title">
        <span className="text-slate-2 f-700">03 </span>
        <span className="text-white f-400">space launch 101</span>
      </h1>
      {/* Container for technology information */}
      <AnimatePresence exitBeforeEnter>
        <div className="section__content-wrapper">
          {/* Start of Content section */}
          <div className="section__content section__content--technology">
            {/* Start of Navigation section */}
            <div className="buttons__container buttons__container--technology">
              {Object.entries(technology).map(([key]) => (
                // console.log(typeof Number(key))
                <Button
                  keys={key}
                  value={Number(key) + 1}
                  style={`button ${activeContent === key && 'active'} button__technology text-32`}
                  setActiveContent={setActiveContent}
                />
              ))}
            </div>
            {/* Start of Info section */}
            <div className="section__info section__info--technology margin-t-1">
              <h2 className="f-400 text-upper flex flex-col">
                <span className="font-barlowCondensed nav-text text-slate margin-b-1">
                  the terminology
                </span>
                <span className="font-bellefair text-56 text-white">
                  {technology[activeContent].name}
                  {/* {console.log(technology[activeContent].name)} */}
                </span>
              </h2>
              <p className="section-info-description technology font-barlow text-slate text-p">
                {technology[activeContent].description}
              </p>
            </div>
          </div>

          <div className="section__image-wrapper technology">
            <motion.div
              key={activeContent}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, type: "tween", stiffness: 100 }}
            >
              <div className="section__image--relative ">
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet={portraitImagesArr[1]}
                  />
                  <img
                    src={landscapeImagesArr[1]}
                    alt={technology[activeContent].name}
                    className="section__image--technology"
                  />
                </picture>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Technology;

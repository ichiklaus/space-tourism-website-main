import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Homepage, Destination, Crew, Technology } from '../pages';

function Main({ data: { destinations, crew, technology } }) {
  const [location, setLocation] = useState('');
  const BACKGROUND = document.body.classList;
  const THEME_NAMES = ['home', 'destination', 'crew', 'technology'];

  useEffect(() => {
    if (location === '/') {
      BACKGROUND.add('home');
      THEME_NAMES.filter((item) => item !== 'home').map((item) =>
        BACKGROUND.remove(item),
      );
    } else if (location === '/destination') {
      BACKGROUND.add('destination');
      THEME_NAMES.filter((item) => item !== 'destination').map((item) =>
        BACKGROUND.remove(item),
      );
    } else if (location === '/crew') {
      BACKGROUND.add('crew');
      THEME_NAMES.filter((item) => item !== 'crew').map((item) =>
        BACKGROUND.remove(item),
      );
    } else if (location === '/technology') {
      BACKGROUND.add('technology');
      THEME_NAMES.filter((item) => item !== 'technology').map((item) =>
        BACKGROUND.remove(item),
      );
    }
  });

  return (
    <AnimatePresence>
      <main>
        <Routes>
          <Route path="/" element={<Homepage setLocation={setLocation} />} />
          <Route
            path="/destination"
            element={
              <Destination
                setLocation={setLocation}
                destinations={destinations}
              />
            }
          />
          <Route
            path="/crew"
            element={<Crew setLocation={setLocation} crew={crew} />}
          />
          <Route
            path="/technology"
            element={
              <Technology setLocation={setLocation} technology={technology} />
            }
          />
        </Routes>
      </main>
    </AnimatePresence>
  );
}

export default Main;

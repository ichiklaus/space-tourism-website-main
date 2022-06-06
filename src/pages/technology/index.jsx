import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Technology({ setLocation }) {
  const location = useLocation();
  useEffect(() => setLocation(location.pathname), []);
  return (
    <h1 className='text-white'>Technology</h1>
  );
}

export default Technology;
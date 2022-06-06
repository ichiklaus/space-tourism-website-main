import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Crew({ setLocation }) {
  const location = useLocation();
  useEffect(() => setLocation(location.pathname), []);
  return (
    <h1 className='text-white'>Crew</h1>
  );
}

export default Crew;
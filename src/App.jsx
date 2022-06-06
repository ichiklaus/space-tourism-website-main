import React from 'react';

import { Header, Main } from './layout';
import data from './assets/data.json';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;

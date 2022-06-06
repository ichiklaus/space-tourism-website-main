import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import "normalize.css";
import "./css/global.css";

const app = document.getElementById("root");
const root = createRoot(app);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
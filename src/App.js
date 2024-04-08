import React from 'react';

import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routeindex from './route/Index';


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routeindex />
          </BrowserRouter>
      </div>
  );
}

export default App;
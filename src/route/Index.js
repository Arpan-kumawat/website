import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home';
import Aboutme from '../Components/Aboutme';
import SecondSection from '../Components/SecondSection';
import Work from '../Components/Work';
import Graphic from '../projects/Graphic';
import DD from '../projects/DD';
import DDLoader from '../projects/DDLoader';

export default function Routeindex() {
  return (
    <Routes>
 
    <Route exact path="/" element={<Home />} />
    <Route exact path="/aboutme" element={<Aboutme  />} />
    <Route exact path="/work" element={<Work  />} />
    <Route exact path="/graphic" element={<Graphic/>} />
    <Route exact path="/dd" element={<DD/>} />
    <Route exact path="/loader" element={<DDLoader/>} />
    <Route exact path="/3" element={<SecondSection />} />

  </Routes>
  )
}

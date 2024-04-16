import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home';
import Aboutme from '../Components/Aboutme';
import SecondSection from '../Components/SecondSection';
import Work from '../Components/Work';
import Graphic from '../projects/Graphic';
import DD from '../projects/DD';
import DDLoader from '../projects/DDLoader';
import DanPatra from '../projects/DanPatra';
import Palette from '../projects/Palette';
import Lincout from '../projects/Lincout';
import FirstSection from '../Components/FirstSection';
import Msme from '../projects/Msme';
import BookCover from '../projects/BookCover';
import Jenga from '../projects/Jenga';
import Kitchen from '../projects/Kitchen';

export default function Routeindex() {
  return (
    <Routes>
 
    <Route exact path="/" element={<Home />} />
    <Route exact path="/3" element={<Aboutme  />} />
    <Route exact path="/aboutme" element={<FirstSection  />} />
    <Route exact path="/work" element={<Work  />} />
    <Route exact path="/graphic" element={<Graphic/>} />
    <Route exact path="/jenga" element={<Jenga/>} />
    <Route exact path="/dd" element={<DD/>} />
    <Route exact path="/loader" element={<DDLoader/>} />
    <Route exact path="/palate" element={<Palette/>} />
    <Route exact path="/danPatra" element={<DanPatra/>} />
    <Route exact path="/Lincout" element={<Lincout/>} />
    <Route exact path="/msme" element={<Msme/>} />
    <Route exact path="/kitchen" element={<Kitchen/>} />
    <Route exact path="/book-cover" element={<BookCover/>} />
    <Route exact path="/2" element={<SecondSection />} />

  </Routes>
  )
}

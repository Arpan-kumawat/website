/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './styles.css'; 
import porject1 from "../assets/Dana.png";

export default function SecondSection() {
  const [isHovered, setIsHovered] = useState(false);

  const title ="Arpan is best"
  return (
   <>
  <div className="image-container">
            <div className="text" style={{color:"red"}}>Your Text</div>
            <img src={porject1} alt="Image" className="image" />
        </div>
   </>
  )
}

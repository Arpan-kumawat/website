// import logo from '../assets/Logo.png';
import logo1 from "../assets/store_logo.png";
import img1 from "../assets/img1.png";
import img4 from "../assets/img4.png";
import "../App.css";
import React, { useState } from "react";
// import Header from "../Common/Header";
import Typewriter from "typewriter-effect";
import { Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function FirstSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("click");
  };

  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);
    console.log("click");
  };
  return (
    <div className="App">

      <header className="App-header">
        {/* {showPopup1 ? (
          <>
            <div className="project1">
              <img
                src={logo1}
                alt="YourImage"
                className="moving-image-roject1"
                style={{ width: "7%" }}
              />
         
            </div>
          </>
        ) : (
          ""
        )} */}
        <div className="image-container">
          <img
            src={img1}
            alt="YourImage"
            // className="rotate-image"
            style={{ width: "15%" }}
            onMouseEnter={togglePopup}
            onMouseLeave={togglePopup}
          />

          <img
            src={img4}
            alt="YourImage"
            className="moving-image"
            style={{ width: "7%", marginLeft: "0.8rem" }}
            onMouseEnter={togglePopup1}
            onMouseLeave={togglePopup1}
          />


        </div>


<Grid style={{marginTop:"5rem"}}>
<Typography style={{color:"black"}}>
        <Typewriter onInit={(typewriter) => { typewriter.typeString("asdfasdf asdf asdf asd ").start(); }}
                        />
  
      </Typography>

</Grid>
<KeyboardArrowDownIcon style={{color:"black",position:"absolute",bottom:"3rem"}} />




        {showPopup1 ? (
          <>
            <div className="project1">
              <img
                src={logo1}
                alt="YourImage"
                className="moving-image-roject1"
                // class="bouncing-image" 
                style={{ width: "10%",position:"absolute" }}
              />
       
            </div>
          </>
        ) : (
          ""
        )}

        {/* <div    onMouseEnter={togglePopup}
         onMouseLeave={togglePopup} >

   
        <img src={logo}
     
        className="App-logo" alt="logo" />     </div> */}
        {/* {showPopup ? (<>

      
 
<img src={logo1} alt="Popup" />

</>
):""} */}

      </header>

 
      {/* <div className="image-gallery">
      <div
        className="main-image"
        onMouseEnter={togglePopup}
        onMouseLeave={togglePopup}
      >
        <img src={logo1} alt="Main" />
      </div> */}
    </div>
  );
}

export default FirstSection;

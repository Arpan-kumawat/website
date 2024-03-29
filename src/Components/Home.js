import React, { useState, useEffect } from "react";
import logo1 from "../assets/store_logo.png";
import img1 from "../assets/img1.png";
import img4 from "../assets/img4.png";
import "../App.css";
import { Button, Grid, Typography, Divider, Paper } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import sec21 from "../assets/sec21.png";
import sec22 from "../assets/sec22.png";
import sec23 from "../assets/sec23.png";
import logo from "../assets/logo.png";
import behance from "../assets/behance.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import heart from "../assets/Heart.png";
import heartRed from "../assets/HeartRed.png";
import mail from "../assets/Icon.png";
import Mail from "../assets/MailIcon.png";
import icon from "../assets/newIcon.png";
import newIcon from "../assets/new.png";
import Istuti from "../assets/iconnew.png";
import logo2 from "../assets/tri.png";

import porject1 from "../assets/Dana.png";
import project2 from "../assets/MSME.png";




export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [heartColor, setHeartColor] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("click");
  };

  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);
    console.log("click");
  };

  const heartChange = () => {
    setHeartColor(!heartColor);
    console.log("heartColor");
  };

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("asdf");
    };
  }, []);

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
           position: "absolute",
            width: "100%",
            background: "transparent",
            height: "10vh",
          }}
        >
          <Grid
            container
            style={{ padding: "1rem" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Grid container xs={12} sm={12} md={7} lg={7}>
              <img alt="logo" src={logo} width="80px" height="70px" />
            </Grid>

            <Grid xs={12} sm={12} md={5} lg={5} style={{ display: "flex" }}>
              <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    borderRight: "1px solid black",
                  }}
                  xs={7}
                  sm={7}
                  md={7}
                  lg={7}
                >
                  <Button
                    style={{
                      color: scrolling ? "white" : "black",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    About me
                  </Button>
                  <Button
                    style={{
                      color: scrolling ? "white" : "black",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    Work
                  </Button>
                  <Button
                    style={{
                      color: scrolling ? "white" : "black",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    Resume
                  </Button>
                </Grid>

                <Grid
                  container
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: "1.5rem",
                  }}
                >
                  <img
                    alt="linkedin"
                    src={linkedin}
                    width="25px"
                    height="25px"
                  />
                  <img alt="Be" src={behance} width="25px" height="25px" />
                  <img alt="instagram" src={insta} width="30px" height="30px" />

                  <img alt="mail" src={Mail} width="20px" height="20px" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <section class="main" id="section1">
          <div className="App-header">
            {showPopup1 ? (
              <>
                <div className="project1">
                  <img
                    src={logo1}
                    alt="YourImage"
                    className="moving-image-roject1"
                    style={{ width: "7%" }}
                  />
                  {/* <p          className="moving-image-roject1"> 
          Ohh
        </p> */}
                </div>
              </>
            ) : (
              ""
            )}
            <div className="image-container">
              <img
                src={logo2}
                alt="YourImage"
                // className="rotate-image"
                style={{ width: "16%" }}
                onMouseEnter={togglePopup}
                onMouseLeave={togglePopup}
              />

              <img
                src={Istuti}
                alt="YourImage"
                className="moving-image"
                style={{ width: "7%", marginLeft: "0.5rem" }}
                onMouseEnter={togglePopup1}
                onMouseLeave={togglePopup1}
              />
            </div>
            <Grid container justifyContent="center" class="fadeIn">
              <Grid
                style={{ marginTop: "3rem", padding: "1rem" }}
                xs={12}
                sm={12}
                md={6}
                lg={6}
              >
                <Typography style={{ color: "black", fontWeight: 500 }}>
                  {/* <Typewriter onInit={(typewriter) => { typewriter.typeString("asdfasdf asdf asdf asd ").start(); }}
                  /> */}
                  Welcome to my creative journey!
                </Typography>
                <Typography
                  style={{ color: "black", marginTop: "1rem", fontWeight: 500 }}
                >
                  I am a passionate UI/UX designer currently embarking on a
                  transformative educational experience at NID, Ahmedabad. With
                  a passion for creating intuitive and engaging user
                  experiences, I craft solutions to solve real world design
                  challenges
                </Typography>
                <a href="#section2">
                  <KeyboardArrowDownIcon
                    style={{
                      color: "black",
                      position: "absolute",
                      bottom: "6rem",
                    }}
                  />
                </a>
              </Grid>
            </Grid>

            {showPopup1 ? (
              <>
                <div className="project1">
                  <img
                    src={logo1}
                    alt="YourImage"
                    class="bouncing-image"
                    style={{ width: "7%" }}
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
          </div>
        </section>

        <div class="main2" id="section2">
          <Grid container style={{ paddingTop: "3rem" }}>
            <Box
              sx={{
                width: "100%",
                typography: "body1",
                justifyContent: "center",
              }}
            >
              <TabContext value={value}>
                <Box sx={{ borderColor: "divider", justifyContent: "center" }}>
                  <TabList
                    onChange={handleChange}
                
                    style={{ justifyContent: "center" }}
                  >
                    <Tab label="UI/UX Case Studies" value="1" />
                    <Tab label="Visual Design" value="2" />
                    <Tab label="Print Making" value="3" />
                    <Tab label="Illustrations" value="4" />
                  </TabList>
                </Box>

                <TabPanel value="1">
<Grid style={{marginBottom:"5rem"}}>



                  <Grid
                   container 
                   xs={12} sm={12} md={12} lg={12}
                    style={{
          
            marginTop:"5rem"
                    }}
                  >
                    <Grid
                    item
                       xs={12} sm={12} md={6} lg={6}
                      style={{
                        // minWidth: "25rem",
                        // minHight: "20rem",
                        // margin: "1rem",
                        display: "flex",
                        justifyContent:"center"
                      }}
                    >
                      <Grid>
              
                          <Typography
                        variant="h5"
                        style={{
                          color: "white",
                          margin: "1rem",
                          fontWeight: 500,
                          textAlign: "start",
                        }}
                      >
                        DaanPatra
                      </Typography>
                      <p
                        variant="h6"
                        style={{
                          color: "white",
                          margin: "1rem",
                          textAlign: "left",
                          marginTop: "0rem",
                          fontWeight: 300,
                        }}
                      >
                        Context and Information Systems
                        <br />
                        UX Design | UI Design | 8 Weeks
                      </p>
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop:"3rem"
                            // maxWidth: "400px",
                            // maxHeight: "400px",
                            // minHeight: "400px",
                            // minWidth: "400px",
                          }}
                          src={project2}
                          alt="img"
                        />
                      </Grid>
                    
                    </Grid>


                    <Grid
                    item
                        xs={12} sm={12} md={6} lg={6}
                      style={{
                        // minWidth: "25rem",
                        // minHight: "20rem",
                        // margin: "1rem",
                        display: "flex",
                        justifyContent:"center"
                      }}
                    >
                      <Grid>
              
                          <Typography
                        variant="h5"
                        style={{
                          color: "white",
                          margin: "1rem",
                          fontWeight: 500,
                          textAlign: "start",
                        }}
                      >
                        DaanPatra
                      </Typography>
                      <p
                        variant="h6"
                        style={{
                          color: "white",
                          margin: "1rem",
                          textAlign: "left",
                          marginTop: "0rem",
                          fontWeight: 300,
                        }}
                      >
                        Context and Information Systems
                        <br />
                        UX Design | UI Design | 8 Weeks
                      </p>
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop:"3rem"
                            // maxWidth: "400px",
                            // maxHeight: "400px",
                            // minHeight: "330px",
                            // minWidth: "330px",
                          }}
                          src={porject1}
                          alt="img"
                        />
                      </Grid>
                    
                    </Grid>


                  </Grid>

                  <Grid
                   container 
                   xs={12} sm={12} md={12} lg={12}
                    style={{
          
            marginTop:"5rem"
                    }}
                  >
                    <Grid
                    item
                       xs={12} sm={12} md={6} lg={6}
                      style={{
                        // minWidth: "25rem",
                        // minHight: "20rem",
                        // margin: "1rem",
                        display: "flex",
                        justifyContent:"center"
                      }}
                    >
                      <div>
              
                          <Typography
                        variant="h5"
                        style={{
                          color: "white",
                          margin: "1rem",
                          fontWeight: 500,
                          textAlign: "start",
                        }}
                      >
                        DaanPatra
                      </Typography>
                      <p
                        variant="h6"
                        style={{
                          color: "white",
                          margin: "1rem",
                          textAlign: "left",
                          marginTop: "0rem",
                          fontWeight: 300,
                        }}
                      >
                        Context and Information Systems
                        <br />
                        UX Design | UI Design | 8 Weeks
                      </p>
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop:"3rem"
                            // maxWidth: "400px",
                            // maxHeight: "400px",
                            // minHeight: "400px",
                            // minWidth: "400px",
                          }}
                          src={project2}
                          alt="img"
                        />
                      </div>
                    
                    </Grid>


                    <Grid
                    item
                        xs={12} sm={12} md={6} lg={6}
                      style={{
                        // minWidth: "25rem",
                        // minHight: "20rem",
                        // margin: "1rem",
                        display: "flex",
                        justifyContent:"center"
                      }}
                    >
                      <div>
              
                          <Typography
                        variant="h5"
                        style={{
                          color: "white",
                          margin: "1rem",
                          fontWeight: 500,
                          textAlign: "start",
                        }}
                      >
                        DaanPatra
                      </Typography>
                      <p
                        variant="h6"
                        style={{
                          color: "white",
                          margin: "1rem",
                          textAlign: "left",
                          marginTop: "0rem",
                          fontWeight: 300,
                        }}
                      >
                        Context and Information Systems
                        <br />
                        UX Design | UI Design | 8 Weeks
                      </p>
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop:"3rem"
                            // maxWidth: "400px",
                            // maxHeight: "400px",
                            // minHeight: "330px",
                            // minWidth: "330px",
                          }}
                          src={porject1}
                          alt="img"
                        />
                      </div>
                    
                    </Grid>


                  </Grid>

                  </Grid>
                </TabPanel>

                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item Three</TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </div>

        <section class="main" id="section3" style={{ height: "23vh" }}>
          <Grid
            style={{
              marginTop: "2rem",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                fontWeight: 400,
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              Made with
              <img
                alt="heart"
                src={heartColor ? heartRed : heart}
                width="20px"
                height="20px"
                style={{ padding: "0rem 0.5rem" }}
                onMouseEnter={heartChange}
                onMouseLeave={heartChange}
              />
              by Istuti
            </Typography>

            <Typography
              style={{
                fontSize: "1.2rem",
                margin: "1rem",
                color: "black",
                fontWeight: 400,
              }}
            >
              Copyright 2024 Istuti - All Rights Reserved
            </Typography>

            <Divider style={{ margin: "1rem", color: "black" }}></Divider>

            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <img alt="Be" src={behance} width="30px" height="30px" />
              <img
                alt="instagram"
                src={insta}
                width="30px"
                height="30px"
                style={{ padding: "0rem 1rem" }}
              />
              <img alt="linkedin" src={linkedin} width="30px" height="30px" />
              <img
                alt="gmail"
                src={mail}
                width="25px"
                height="20px"
                style={{ padding: "0rem 1rem" }}
              />
            </Grid>
          </Grid>
        </section>
      </div>
    </>
  );
}

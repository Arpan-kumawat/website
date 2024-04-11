import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import logo from "../assets/logo.png";
import behance from "../assets/behance.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedinBlack.png";
// import heart from "../assets/Heart.png";
// import heartRed from "../assets/HeartRed.png";
// import mail from "../assets/Icon.png";
import Mail from "../assets/MailIcon.png";
import Istuti from "../assets/iconnew.png";
import logo2 from "../assets/tri.png";

import porject1 from "../assets/Dana.png";
import project2 from "../assets/MSME.png";
import Palate from "../assets/palate.png";
import ddLoader from "../assets/ddLoader.png";

import next from "../assets/right.png";
import circle from "../assets/circle.png";

import dd from "../assets/dd.png";
import graphic from "../assets/Graphic.png";

// import { styled } from "@mui/material/styles";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);

  // const [isLOGOHovered, setIsLOGOHovered] = useState(false);

  const navigate = useNavigate();
  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("click");
  };

  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);

    console.log("click");
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
            width: "100%",
            background: "transparent",
            height: "10vh",
          }}
        >
          <Grid class="HomeMenu"
            container
            // style={{ padding: "1rem" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            {/* <Grid container xs={12} sm={12} md={7} lg={7}>
              <img
                alt="logo"
                src={logo}
                width="80px"
                height="70px"
                onMouseEnter={() => setIsLOGOHovered(true)}
                onMouseLeave={() => setIsLOGOHovered(false)}
              />
              <div
                style={{
                  padding: "1rem",
                  maxWidth: "304px",
                  fontSize: "15px",
                  display: isLOGOHovered ? "flex" : "none",
                  fontFamily: "LATO",
                  background: "#EDEDED",
                  position: "absolute",
                  top: "2%",
                  borderRadius: "1rem",
                  left: "5%",
                  justifyContent: "center",
                }}
              >
                <p style={{ textAlign: "left" }}>
                  This monogram intricately weaves together Devanagari and Latin
                  characters to symbolize the deep connection between me and my
                  family. <br /> <br />
                  Placing the surname initial at the forefront emphasizes the
                  significance of my family in shaping my identity, reminding me
                  of my roots and values.
                </p>
              </div>
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
                    onClick={() => {
                      navigate("/aboutme");
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
                    onClick={() => {
                      navigate("/work");
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
                    height="24px"
                  />
                  <img alt="Be" src={behance} width="25px" height="25px" />
                  <img alt="instagram" src={insta} width="30px" height="30px" />

                  <img alt="mail" src={Mail} width="20px" height="20px" />
                </Grid>
              </Grid>
            </Grid> */}
            <Header page={"home"}/>
          </Grid>

          <Grid class="HomeMenuMobile" xs={12} sm={12} md={12} lg={12}>
            <div style={{ padding: "1rem" }}>
              <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid container xs={7} sm={7} md={7} lg={7}>
                  <Tooltip title="Istuti Tripathi" placement="bottom-end">
                    <img alt="logo" src={logo} width="70px" height="60px" />
                  </Tooltip>
                </Grid>

                <Grid
                  container
                  xs={5}
                  sm={5}
                  md={5}
                  lg={5}
                  justifyContent="space-around"
                  style={{
                    display: "flex",
                    alignItems: "center",
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

              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
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
                  onClick={() => {
                    navigate("/aboutme");
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
                  onClick={() => {
                    navigate("/work");
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
            </div>
          </Grid>
        </div>




        <section class="main" id="section1">
          <div className="App-header">
            {showPopup1 && (
              <>
                <img
                  src={porject1}
                  alt="YourImage"
                  class="bouncing-image"
                  style={{
                    width: "10%",
                    position: "absolute",
                    zIndex: "1",
                    top: "23%",
                    left: "50%",
                    transform: "rotate(-15deg)",
                  }}
                />
              </>
            )}

            {showPopup1 && (
              <>
                <img
                  src={project2}
                  alt="YourImage"
                  class="bouncing-image"
                  style={{
                    width: "10%",
                    position: "absolute",
                    zIndex: "1",
                    top: "23%",
                    left: "38%",
                  }}
                />
              </>
            )}
            {showPopup1 && (
              <>
                <img
                  src={project2}
                  alt="YourImage"
                  class="bouncing-image"
                  style={{
                    width: "10%",
                    position: "absolute",
                    zIndex: "1",
                    top: "45%",
                    left: "35%",
                    transform: "rotate(-15deg)",
                  }}
                />
              </>
            )}
            {showPopup1 && (
              <>
                <img
                  src={project2}
                  alt="YourImage"
                  class="bouncing-image"
                  style={{
                    width: "10%",
                    position: "absolute",
                    zIndex: "1",
                    top: "45%",
                    left: "50%",
                    transform: "rotate(-15deg)",
                  }}
                />
              </>
            )}
            {/* {true && (
              <>
                <img
                  src={project2}
                  alt="YourImage"
                  // class="bouncing-image"

                  style={{
                    width: "10%",
                    position: "absolute",
                    zIndex: "1",
                    top: "35%",
                    left: "60%",
                    transform: "rotate(-15deg)",
                  }}
                />
              </>
            )} */}
            {/* {true && (
              <>
                <img
                  src={project2}
                  alt="YourImage"
                  // class="bouncing-image"

                  style={{
                    width: "10%",
                    position: "absolute",
                    zIndex: "1",
                    top: "35%",
                    left: "30%",
                    transform: "rotate(-15deg)",
                  }}
                />
              </>
            )} */}
            <div className="image-container">
              <img
                src={logo2}
                alt="YourImage"
                className="moving-image1"
                style={{ width: "13%" }}
                onMouseEnter={togglePopup}
                onMouseLeave={togglePopup}
              />

              <img
                src={Istuti}
                alt="YourImage"
                className="moving-image"
                style={{ width: "5.8%", marginLeft: "0.5rem" }}
                // onMouseEnter={togglePopup1}
                // onMouseLeave={togglePopup1}
              />
            </div>
            <Grid container justifyContent="center" class="fadeIn">
              <Grid
                style={{ marginTop: "3rem", padding: "2rem" }}
                xs={12}
                sm={12}
                md={6}
                lg={6}
              >
                <Typography style={{ color: "black", fontWeight: 500 }}>
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
                      bottom: "7rem",
                    }}
                  />
                </a>
              </Grid>
            </Grid>

            {/* {showPopup1 ? (
              <>
                <div className="project1">
                  <img
                    src={project2}
                    alt="YourImage"
                    class="bouncing-image"
                    style={{ width: "20%" }}
                  />
                </div>
              </>
            ) : (
              ""
            )} */}

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
          <Grid container style={{ paddingTop: "5rem" }}>
            <div class="SecondSection">
              <Box
                sx={{
                  width: "100%",
                  typography: "body1",
                  justifyContent: "center",
                }}
              >
                <TabContext value={value}>
                  <Box
                    sx={{ borderColor: "divider", justifyContent: "center" }}
                  >
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
                    <Grid style={{ marginBottom: "5rem" }}>
                      <Grid
                        container
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{
                          marginTop: "5rem",
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          style={{
                            // minWidth: "25rem",
                            // minHight: "20rem",
                            // margin: "1rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div class="zoom">
                            <Typography
                              variant="h5"
                              style={{
                                // color: "white",
                                margin: "1rem",
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              DaanPatra 1
                            </Typography>
                            <p
                              variant="h7"
                              style={{
                                // color: "white",
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
                            <div
                              style={{ position: "relative", display: "flex" }}
                              class="zoom"
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  marginTop: "3rem",
                                  // maxWidth: "400px",
                                  // maxHeight: "400px",
                                  // minHeight: "400px",
                                  // minWidth: "400px",
                                }}
                                src={project2}
                                alt="img"
                              />
                               <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                            </div>
                          </div>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          style={{
                            // minWidth: "25rem",
                            // minHight: "20rem",
                            // margin: "1rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div class="zoom">
                            <Typography
                              variant="h5"
                              style={{
                                // color: "white",
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
                                // color: "white",
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
                            <div
                              style={{ position: "relative", display: "flex" }}
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  marginTop: "3rem",
                                  // maxWidth: "400px",
                                  // maxHeight: "400px",
                                  // minHeight: "330px",
                                  // minWidth: "330px",
                                }}
                                src={porject1}
                                alt="img"
                              />
                                <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{
                          marginTop: "5rem",
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          style={{
                            // minWidth: "25rem",
                            // minHight: "20rem",
                            // margin: "1rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div class="zoom">
                            <Typography
                              variant="h5"
                              style={{
                                // color: "white",
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
                                // color: "white",
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
                            <div
                              style={{ position: "relative", display: "flex" }}
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  marginTop: "3rem",
                                  // maxWidth: "400px",
                                  // maxHeight: "400px",
                                  // minHeight: "400px",
                                  // minWidth: "400px",
                                }}
                                src={project2}
                                alt="img"
                              />
                                <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                            </div>
                          </div>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          style={{
                            // minWidth: "25rem",
                            // minHight: "20rem",
                            // margin: "1rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div class="zoom">
                            <Typography
                              variant="h5"
                              style={{
                                // color: "white",
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
                                // color: "white",
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
                            <div
                              style={{ position: "relative", display: "flex" }}
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  marginTop: "3rem",
                                  // maxWidth: "400px",
                                  // maxHeight: "400px",
                                  // minHeight: "330px",
                                  // minWidth: "330px",
                                }}
                                src={porject1}
                                alt="img"
                              />
                               <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TabPanel>

                  <TabPanel value="2">
                    <Grid style={{ marginBottom: "5rem" }}>
                      <Grid
                        container
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{
                          marginTop: "5rem",
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          style={{
                            // minWidth: "25rem",
                            // minHight: "20rem",
                            // margin: "1rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            class="zoom"
                            onClick={() => {
                              navigate("/dd");
                            }}
                          >
                            <Typography
                              variant="h5"
                              style={{
                                // color: "white",
                                margin: "1rem",
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              DD Free Dish
                            </Typography>
                            <p
                              variant="h7"
                              style={{
                                // color: "white",
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
                            <div
                              style={{ position: "relative", display: "flex" }}
                              class="zoom"
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  marginTop: "3rem",
                                  // maxWidth: "400px",
                                  // maxHeight: "400px",
                                  // minHeight: "400px",
                                  // minWidth: "400px",
                                }}
                                src={dd}
                                alt="img"
                              />
                               <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                            </div>
                          </div>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          style={{
                            // minWidth: "25rem",
                            // minHight: "20rem",
                            // margin: "1rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            class="zoom"
                            onClick={() => {
                              navigate("/loader");
                            }}
                          >
                            <Typography
                              variant="h5"
                              style={{
                                // color: "white",
                                margin: "1rem",
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              DD Free Dish Loader
                            </Typography>
                            <p
                              variant="h6"
                              style={{
                                // color: "white",
                                margin: "1rem",
                                textAlign: "left",
                                marginTop: "0rem",
                                fontWeight: 300,
                              }}
                            >
                              Strategies for visual communication
                              <br />
                              Strategy Design | UX Design | 12 Weeks
                            </p>
                            <div
                              style={{ position: "relative", display: "flex" }}
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  marginTop: "3rem",
                                  // maxWidth: "400px",
                                  // maxHeight: "400px",
                                  // minHeight: "330px",
                                  // minWidth: "330px",
                                }}
                                src={ddLoader}
                                alt="img"
                              />
                              <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{
                          marginTop: "5rem",
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          style={{
                            // minWidth: "25rem",
                            // minHight: "20rem",
                            // margin: "1rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            class="zoom"
                            onClick={() => {
                              navigate("/palate");
                            }}
                          >
                            <Typography
                              variant="h5"
                              style={{
                                // color: "white",
                                margin: "1rem",
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              Palate
                            </Typography>
                            <p
                              variant="h6"
                              style={{
                                // color: "white",
                                margin: "1rem",
                                textAlign: "left",
                                marginTop: "0rem",
                                fontWeight: 300,
                              }}
                            >
                              Publication Design
                              <br />1 Week
                            </p>
                            <div
                              style={{ position: "relative", display: "flex" }}
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  marginTop: "3rem",
                                  // maxWidth: "400px",
                                  // maxHeight: "400px",
                                  // minHeight: "400px",
                                  // minWidth: "400px",
                                }}
                                src={Palate}
                                alt="img"
                              />
                                <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                            </div>
                          </div>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          style={{
                            // minWidth: "25rem",
                            // minHight: "20rem",
                            // margin: "1rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            class="zoom"
                            onClick={() => {
                              navigate("/graphic");
                            }}
                          >
                            <Typography
                              variant="h5"
                              style={{
                                // color: "white",
                                margin: "1rem",
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              Instructional Graphic
                            </Typography>
                            <p
                              variant="h6"
                              style={{
                                // color: "white",
                                margin: "1rem",
                                textAlign: "left",
                                marginTop: "0rem",
                                fontWeight: 300,
                              }}
                            >
                              Strategies for visual communication
                              <br />
                              Strategy Design | UX Design | 12 Weeks
                            </p>
                            <div
                              style={{ position: "relative", display: "flex" }}
                            >
                              <img
                                style={{
                                  borderRadius: "20px",
                                  marginTop: "3rem",
                                  // maxWidth: "400px",
                                  // maxHeight: "400px",
                                  // minHeight: "330px",
                                  // minWidth: "330px",
                                }}
                                src={graphic}
                                alt="img"
                              />
                                <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                  <TabPanel value="4">Item Three</TabPanel>
                </TabContext>
              </Box>
            </div>
            <div class="SecondSectionMobile">
              <Grid style={{ marginBottom: "5rem" }}>
                <Typography
                  variant="h4"
                  style={{ color: "#DDD50E", textDecoration: "underline" }}
                >
                  UI/UX Case Studies
                </Typography>
                <Grid
                  container
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    marginTop: "2rem",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{
                      // minWidth: "25rem",
                      // minHight: "20rem",
                      // margin: "1rem",
                      display: "flex",
                      justifyContent: "center",
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
                        DaanPatra 1
                      </Typography>
                      <p
                        variant="h7"
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
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop: "1rem",
                            width: "90%",
                          }}
                          src={project2}
                          alt="img"
                        />
                          <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                      </div>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{
                      // minWidth: "25rem",
                      // minHight: "20rem",
                      // margin: "1rem",
                      display: "flex",
                      justifyContent: "center",
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
                        DaanPatra 1
                      </Typography>
                      <p
                        variant="h7"
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
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop: "1rem",
                            width: "90%",
                          }}
                          src={project2}
                          alt="img"
                        />
                         <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                      </div>
                    </div>
                  </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{
                      // minWidth: "25rem",
                      // minHight: "20rem",
                      // margin: "1rem",
                      display: "flex",
                      justifyContent: "center",
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
                        DaanPatra 1
                      </Typography>
                      <p
                        variant="h7"
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
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop: "1rem",
                            width: "90%",
                          }}
                          src={project2}
                          alt="img"
                        />
                         <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                      </div>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{
                      // minWidth: "25rem",
                      // minHight: "20rem",
                      // margin: "1rem",
                      display: "flex",
                      justifyContent: "center",
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
                        DaanPatra 1
                      </Typography>
                      <p
                        variant="h7"
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
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop: "1rem",
                            width: "90%",
                          }}
                          src={project2}
                          alt="img"
                        />
                          <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid style={{ marginBottom: "5rem" }}>
                <Typography
                  variant="h4"
                  style={{ color: "#DDD50E", textDecoration: "underline" }}
                >
                  Visual Design
                </Typography>
                <Grid
                  container
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    marginTop: "2rem",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{
                      // minWidth: "25rem",
                      // minHight: "20rem",
                      // margin: "1rem",
                      display: "flex",
                      justifyContent: "center",
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
                        DaanPatra 1
                      </Typography>
                      <p
                        variant="h7"
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
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop: "1rem",
                            width: "90%",
                          }}
                          src={project2}
                          alt="img"
                        />
                          <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                      </div>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{
                      // minWidth: "25rem",
                      // minHight: "20rem",
                      // margin: "1rem",
                      display: "flex",
                      justifyContent: "center",
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
                        DaanPatra 1
                      </Typography>
                      <p
                        variant="h7"
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
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop: "1rem",
                            width: "90%",
                          }}
                          src={project2}
                          alt="img"
                        />
                        <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                      </div>
                    </div>
                  </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{
                      // minWidth: "25rem",
                      // minHight: "20rem",
                      // margin: "1rem",
                      display: "flex",
                      justifyContent: "center",
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
                        DaanPatra 1
                      </Typography>
                      <p
                        variant="h7"
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
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop: "1rem",
                            width: "90%",
                          }}
                          src={project2}
                          alt="img"
                        />
                         <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                      </div>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{
                      // minWidth: "25rem",
                      // minHight: "20rem",
                      // margin: "1rem",
                      display: "flex",
                      justifyContent: "center",
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
                        DaanPatra 1
                      </Typography>
                      <p
                        variant="h7"
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
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            marginTop: "1rem",
                            width: "90%",
                          }}
                          src={project2}
                          alt="img"
                        />
                           <img
                                src={circle}
                                alt="img"
                                style={{
                                  width: "8%",
                                  position: "absolute",
                                  bottom: "15px",
                                  right: "15px",
                                }}
                              />
                                <img
                                src={next}
                                alt="img"
                                style={{
                                  width: "3%",
                                  position: "absolute",
                                  bottom: "29px",
                                  right: "28px",
                                }}
                              />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>

        <Footer />
        {/* <section class="main" id="section3" style={{ height: "27vh" }}>
          <Grid
            style={{
              marginTop: "5rem",
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
                marginBottom: "3rem",
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
        </section> */}
      </div>
    </>
  );
}

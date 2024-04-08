import React, { useState } from "react";
import "../App.css";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import logo from "../assets/img/logoWhite.png";
import behance from "../assets/img/BehanceWhite.png";
import insta from "../assets/img/InstagramWhite.png";
import linkedin from "../assets/img/LinkedinWhite.png";
import Mail from "../assets/img/mainWhite.png";
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import heart from "../assets/Heart.png";
import heartRed from "../assets/HeartRed.png";

import mail from "../assets/Icon.png";
import be from "../assets/behance.png";
import instagram from "../assets/instagram.png";
import linked from "../assets/linkedin.png";

import porject1 from "../assets/Dana.png";
import project2 from "../assets/MSME.png";

import dd from "../assets/dd.png";
import ddLoader from "../assets/ddLoader.png";
import graphic from "../assets/Graphic.png";

import next from "../assets/right.png";

export default function Work() {
  const navigate = useNavigate();

  const [value, setValue] = useState("1");

  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Drawer1=()=>{
return(
  <>
   <Drawer open={open} 
   
       onClose={()=>setOpen(false)}
  anchor={"right"} style={{minWidth:"70%"}}>
   
        <Grid style={{minWidth:"70%"}}> 
          <Typography>
            UI/UX
          </Typography>
        </Grid>



  </Drawer>
  </>
)

  }



  return (
    <>
      <div
        style={{ height: "100%", background: "black", position: "relative" }}
      >
        <div
          style={{
            width: "100%",
            background: "transparent",
            height: "10vh",
          }}
        >
          <Grid
          class="workHeader"
            container
            style={{ padding: "1rem" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Grid container xs={5} sm={5} md={5} lg={7}>
              <img
                alt="logo"
                src={logo}
                width="100px"
                height="55px"
                onClick={() => {
                  navigate("/");
                }}
              />
            </Grid>

            <Grid xs={7} sm={7} md={7} lg={5} style={{ display: "flex" }}>
              <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginRight:"0.5rem",
                   
                  }}
                  xs={7}
                  sm={7}
                  md={7}
                  lg={7}
                >
                  <Button
                    style={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "1rem",

                      fontWeight: 400,
                    }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <Typography class="headerMenu">Home</Typography>
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    <Typography class="headerMenu">About me</Typography>
                  </Button>

                  <Button
                    style={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    <Typography class="headerMenu">Work</Typography>
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    <Typography class="headerMenu">Resume</Typography>
                  </Button>
                </Grid>

                <div class="vl"></div>


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
                    width="24px"
                    height="23px"
                  />
                  <img alt="Be" src={behance} width="30px" height="22px" />

                  <img alt="instagram" src={insta} width="25px" height="25px" />

                  <img alt="mail" src={Mail} width="25px" height="22px" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
          class="workHeaderMobile"
            container
            style={{ padding: "1rem" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
  <Grid container xs={6} sm={6} md={6} lg={6}>
              <img
                alt="logo"
                src={logo}
                width="100px"
                height="55px"
                onClick={() => {
                  navigate("/");
                }}
              />
            </Grid>
            <Grid style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems:"center"
            }} xs={6} sm={6} md={6} lg={6}>
             
              <MenuIcon
              style={{color:"white",width:"30%",height:"80%"}}
               onClick={() => {
                setOpen(true)
              }}/>
            </Grid>


          </Grid>
          <Drawer1/>

        </div>

        <div class="main2" id="section2">
          <Grid container style={{ paddingTop: "3rem" }}>
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
                                src={next}
                                alt="img"
                                style={{
                                  width: "11%",
                                  position: "absolute",
                                  bottom: "10px",
                                  right: "25px",
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
                                src={next}
                                alt="img"
                                style={{
                                  width: "11%",
                                  position: "absolute",
                                  bottom: "10px",
                                  right: "25px",
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
                                src={next}
                                alt="img"
                                style={{
                                  width: "11%",
                                  position: "absolute",
                                  bottom: "10px",
                                  right: "25px",
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
                                src={next}
                                alt="img"
                                style={{
                                  width: "11%",
                                  position: "absolute",
                                  bottom: "10px",
                                  right: "25px",
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
                          <div class="zoom"
                              onClick={() => {
                                navigate("/dd");
                              }}>
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
                                src={next}
                                alt="img"
                                style={{
                                  width: "11%",
                                  position: "absolute",
                                  bottom: "10px",
                                  right: "25px",
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
                       <div class="zoom" 
                           onClick={() => {
                            navigate("/loader");
                          }}>
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
                                src={next}
                                alt="img"
                                style={{
                                  width: "11%",
                                  position: "absolute",
                                  bottom: "10px",
                                  right: "25px",
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
                                src={next}
                                alt="img"
                                style={{
                                  width: "11%",
                                  position: "absolute",
                                  bottom: "10px",
                                  right: "25px",
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
                               <div class="zoom"
                            onClick={() => {
                              navigate("/graphic");
                            }}>
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
                                src={next}
                                alt="img"
                                style={{
                                  width: "11%",
                                  position: "absolute",
                                  bottom: "10px",
                                  right: "25px",
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
                          src={next}
                          alt="img"
                          style={{
                            width: "11%",
                            position: "absolute",
                            bottom: "10px",
                            right: "25px",
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
                          src={next}
                          alt="img"
                          style={{
                            width: "11%",
                            position: "absolute",
                            bottom: "10px",
                            right: "25px",
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
                          src={next}
                          alt="img"
                          style={{
                            width: "11%",
                            position: "absolute",
                            bottom: "10px",
                            right: "25px",
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
                          src={next}
                          alt="img"
                          style={{
                            width: "11%",
                            position: "absolute",
                            bottom: "10px",
                            right: "25px",
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
                          src={next}
                          alt="img"
                          style={{
                            width: "11%",
                            position: "absolute",
                            bottom: "10px",
                            right: "25px",
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
                          src={next}
                          alt="img"
                          style={{
                            width: "11%",
                            position: "absolute",
                            bottom: "10px",
                            right: "25px",
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
                          src={next}
                          alt="img"
                          style={{
                            width: "11%",
                            position: "absolute",
                            bottom: "10px",
                            right: "25px",
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
                          src={next}
                          alt="img"
                          style={{
                            width: "11%",
                            position: "absolute",
                            bottom: "10px",
                            right: "25px",
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
      </div>
    </>
  );
}

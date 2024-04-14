import React, { useState } from "react";
import "../App.css";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Palate from "../assets/palate.png";

import porject1 from "../assets/Dana.png";
import project2 from "../assets/MSME.png";

import dd from "../assets/dd.png";
import ddLoader from "../assets/ddLoader.png";
import graphic from "../assets/Graphic.png";

import Linocut from "../assets/Linocut.png";

import next from "../assets/right.png";
import circle from "../assets/circle.png";
import Header from "../Common/Header";

export default function Work() {
  const navigate = useNavigate();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <Header page={"work"} />

        <div class="main2" id="section2">
          <Grid container style={{ paddingTop: "8rem" }}>
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
                          <div class="zoom"
                            onClick={() => {
                              navigate("/danPatra");
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
                              DaanPatra 
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
                                }}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value="3">
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
                              navigate("/lincout");
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
                            Linocut
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
                             Departmental Elective : What a Relief
                              <br />
                              1 Week
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
                                src={Linocut}
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
                                }}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TabPanel>
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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
                                  right: "28px"
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

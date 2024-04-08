import React from "react";
import "../App.css";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


import video from  "../assets/pdf/ddloader/loader.mp4"


import logo from "../assets/img/logoWhite.png";
import behance from "../assets/img/BehanceWhite.png";
import insta from "../assets/img/InstagramWhite.png";
import linkedin from "../assets/img/LinkedinWhite.png";
import Mail from "../assets/img/mainWhite.png";


export default function DDLoader() {
    const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          width: "100%",
          position: "fixed",
          height: "10vh",
          background: "black",
        }}
      >
        <Grid
          container
          style={{ padding: "0.5rem" }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Grid container xs={12} sm={12} md={7} lg={7}>
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

          <Grid xs={12} sm={12} md={5} lg={5} style={{ display: "flex" }}>
            <Grid container xs={12} sm={12} md={12} lg={12}>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderRight: "1px solid white",
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
                  width="22px"
                  height="23px"
                />
                <img alt="Be" src={behance} width="22px" height="22px" />
                <img alt="instagram" src={insta} width="22px" height="22px" />

                <img alt="mail" src={Mail} width="22px" height="22px" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "3rem" }}>

      <video width={"100%"} height={"100%"}  autoplay="autoplay" muted>
    <source src={video} type="video/mp4">
        </source>
</video>


  
      </div>
    </div>
  )
}

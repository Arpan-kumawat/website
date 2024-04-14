import React, { useState ,useEffect} from "react";
import { Button, Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/img/logoWhite.png";
import logo1 from "../assets/logo.png";


import behance from "../assets/headerLogo/behance.png";
import insta from "../assets/headerLogo/instagram.png";
import linkedin from "../assets/headerLogo/Linkedin.png";
import Mail from "../assets/headerLogo/Icon.png";

import linkedinBlack from "../assets/headerImages/Linkedin.png";
import behanceBlack from "../assets/headerImages/behance.png";
import instaBlack from "../assets/headerImages/instagram.png";
import MailBlack from "../assets/headerImages/Icon.png";

import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";

function Header(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [home, setHome] = useState(props?.page === "home");

  // const [about, setAbout] = useState(false);
  // const [work, setWork] = useState(false);
  const [isLOGOHovered, setIsLOGOHovered] = useState(false);


  const Drawer1 = () => {
    return (
      <>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          anchor={"right"}
          style={{ minWidth: "70%" }}
        >
          <Grid style={{ minWidth: "70%" }}>
            <Typography>UI/UX</Typography>
          </Grid>
        </Drawer>
      </>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        zIndex:1,
        height: "11vh",
        position: home?"absolute": "fixed",
      }}
    >
      <Grid
        class="workHeader"
        container
        style={{ background:home?"transparent":"black" }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Grid style={{    display: "flex",
    alignItems: "center"}} container xs={5} sm={5} md={5} lg={7}>
               <img
                alt="logo"
                src={home ? logo1:logo }
                width={home ?"80px":"85px"}
                height={home?"70px":"45px"}
                onMouseEnter={() => setIsLOGOHovered(true)}
                onMouseLeave={() => setIsLOGOHovered(false)}
                onClick={() => {
                  navigate("/");
                }}
              /> 
             
          <div
            style={{
              padding: "1rem",
              maxWidth: "304px",
              fontSize: "15px",
              display:  home? isLOGOHovered ? "flex" : "none":"none",
              fontFamily: "LATO",
              background: "#EDEDED",
              position: "absolute",
              top: "50px",
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
              significance of my family in shaping my identity, reminding me of
              my roots and values.
            </p>
          </div>
        </Grid>

        <Grid xs={7} sm={7} md={7} lg={5} style={{ display: "flex" }}>
          <Grid container xs={12} sm={12} md={12} lg={12} style={{display: "flex",
            justifyContent: "flex-end"}}>
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginRight: "0.5rem",
              }}
              xs={7}
              sm={7}
              md={7}
              lg={7}
            >

              <Button
              hidden={true}
                style={{
                  // display: home?"none":"flex",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <Typography
                  class="headerMenu"
                  style={{ color:"white" }}
                >
                  Home
                </Typography>
              </Button>

              <Button
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
                onClick={() => {
                  navigate("/aboutme");
                }}
              >
                <Typography
                  class="headerMenu"
                  style={{
                    color: home?"black": (props.page === "about") ? "#DDD50E" : "white",
                  }}
                >
                  About me
                </Typography>
              </Button>

              <Button
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
                onClick={() => {
                  navigate("/work");
                }}
              >
                <Typography
                  class="headerMenu"
                  style={{ color:home?"black":  (props.page === "work") ? "#DDD50E" : "white" }}
                >
                  Work
                </Typography>
              </Button>
              <Button
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
              >
                <Typography class="headerMenu"  style={{ color:home?"black": "white" }}>Resume</Typography>
              </Button>
            </Grid>

            <div class={ home?"vl1":"vl"}></div>

            <Grid
              container
              xs={4}
              sm={4}
              md={4}
              lg={4}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginLeft: "0.5rem",
              }}
            >
              
              <img
                alt="linkedin"
                src={home ? linkedinBlack :linkedin}
                width= {home ?"20px" :"18px"}
                height= {home ?"20px" :"18px"}
                style={{ marginTop: "-0.2rem", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/istuti-tripathi-336038181/"
                  )
                }
              />

              <img
                alt="Be"
                src={home? behanceBlack:behance}
                width= {home?"30px": "30px"}
                height={home ? "30px": "30px"}
                style={{ cursor: "pointer" , marginTop:"0rem"}}
                onClick={() =>
                  window.open("https://www.behance.net/istutitripath")
                }
              />

              <img
                alt="instagram"
                src={ home?instaBlack: insta}
                width= {home?"25px": "25px"}
                height={home ? "25px": "25px"}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.instagram.com/sketchy_beaver19/")
                }
              />

              <img
                alt="mail"
                src={home?MailBlack: Mail}
                width= {home?"20px": "20px"}
                height={home ? "15px": "15px"}
                style={{ cursor: "pointer" }}
                onClick={() => (window.location = "mailto:yourmail@domain.com")}
              />
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
        <Grid
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          xs={6}
          sm={6}
          md={6}
          lg={6}
        >
          <MenuIcon
            style={{ color: "white", width: "30%", height: "80%" }}
            onClick={() => {
              setOpen(true);
            }}
          />
        </Grid>
      </Grid>
      <Drawer1 />
    </div>
  );
}

export default Header;

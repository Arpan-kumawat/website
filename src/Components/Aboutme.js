import React, { useState } from "react";
import "../App.css";
import { Button, Grid, Typography,Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import logo from "../assets/img/logoWhite.png";
import behance from "../assets/img/BehanceWhite.png";
import insta from "../assets/img/InstagramWhite.png";
import linkedin from "../assets/img/LinkedinWhite.png";
import Mail from "../assets/img/mainWhite.png";
import heart from "../assets/Heart.png";
import heartRed from "../assets/HeartRed.png";

import mail from "../assets/Icon.png";
import be from "../assets/behance.png";
import instagram from "../assets/instagram.png";
import linked from "../assets/linkedin.png";

export default function Aboutme() {
  const [heartColor, setHeartColor] = useState(false);
  const [about, setAbout] = useState(true);
  const [background, setBackground] = useState(false);
  const [experience, setExperience] = useState(false);
  const [interest, setInterest] = useState(false);
  const navigate = useNavigate();

  const heartChange = () => {
    setHeartColor(!heartColor);
    console.log("heartColor");
  };


  


  return (
    <>
      <div
        style={{ height:  "100%", background: "black", position: "relative" }}
      >
        <div
          style={{
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
              <img alt="logo" src={logo} width="100px" height="55px"    onClick={() => {
                      navigate("/")
                    }} />
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
                      navigate("/")
                    }}
                  >
                    <Typography class="headerMenu">
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
                  >
                    <Typography class="headerMenu">
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
                  >
                      <Typography class="headerMenu">
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
                    <Typography class="headerMenu">
       Resume
                    </Typography>
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

        <div style={{ height: "100%" }}>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ padding: "3rem", paddingTop: "4rem"  ,paddingBottom:"5rem",justifyContent:"space-around"}}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
           
            >
      <div  
       class= {about?"zoomedImg":"zoomAbout"}     
>
              <img  style={{ width: "66%",height:"73%" , 
         }} src={img1} alt="img"  
              onClick={()=> setAbout(true)+setBackground(false)+setInterest(false)+setExperience(false) }  />
             {!about && <p style={{color:"white",margin:"5px",textAlign:"left",paddingLeft:"3rem"}}> About me</p>}
             </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
           
            >
                <div class= {background?"zoomedImg":"zoomAbout"}>
              <img  style={{ width: "66%",height:"73%" }} src={img2} alt="img" 
              onClick={()=> setAbout(false)+setBackground(true)+setInterest(false)+setExperience(false) }   />
                {!background && <p style={{color:"white",margin:"5px",textAlign:"left",paddingLeft:"3rem"}}>Background</p>}
                </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
           
            >
                  <div class= {interest?"zoomedImg":"zoomAbout"}>
              <img style={{ width: "66%",height:"73%" }} src={img4} alt="img" 
              onClick={()=> setAbout(false)+setBackground(false)+setInterest(true)+setExperience(false) }  />
              {!interest && <p style={{color:"white",margin:"5px",textAlign:"left",paddingLeft:"3rem"}}>Interest</p>}
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
           
            >
              <div class= {experience?"zoomedImg":"zoomAbout"}>

         
              <img  style={{ width: "66%",height:"73%" }} src={img3} alt="img"
             onClick={()=> setAbout(false)+setBackground(false)+setInterest(false)+setExperience(true) } />
                 {!experience && <p style={{color:"white",margin:"5px",textAlign:"left",paddingLeft:"3rem"}}>Experience</p>}
                 </div>
            </Grid>
          </Grid>

          {about && (
            <Grid
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ padding:"4rem",paddingTop:"0rem",paddingBottom:"10rem" }}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography style={{ color: "white", textAlign: "justify" }}>
                  Welcome to my creative journey!
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  Welcome to my creative journey! I am a passionate UI/UX
                  designer currently embarking on a transformative educational
                  experience at NID, Ahmedabad. With a passion for creating
                  intuitive and engaging user experiences, I craft solutions to
                  solve real world design challenges.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                    textAlign: "right",
                    fontSize: "5rem",
                    position: "absolute",
                    top: "75%",
                  }}
                >
                  About
                </Typography>
              </Grid>
            </Grid>
          )}

          {background && (
            <Grid
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ padding:"4rem" ,paddingTop:"0rem"}}
            >
              <Grid item xs={12} sm={12} md={6} lg={6} >
                <Typography style={{ color: "white", textAlign: "justify" }}>
                  Born in the bustling city of Kanpur and raised in different
                  parts of the country, my journey as a designer has been deeply
                  influenced by a multicultural upbringings.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  During my undergraduate studies, I delved into the world of
                  knitwear design. It was during this time that I first
                  witnessed the transformative power of design. However my will
                  to expand horizons and pushing boundaries, led me to pursue
                  master’s degree in graphic design.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  My unique background, in different part’s of the country has
                  installed in me a deep appreciation for diversity. It is here
                  that I find myself today, immersed in a world of creativity
                  and innovation, bridging the gap between aesthetics and
                  functionality.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                    textAlign: "right",
                    fontSize: "5rem",
                    position: "absolute",
                    top: "75%",
                  }}
                >
                  Background
                </Typography>
              </Grid>
            </Grid>
          )}

          {experience && (
            <Grid
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ padding:"4rem" ,paddingTop:"0rem"}}
            >
              <Grid item xs={12} sm={12} md={6} lg={6} style={{overflow:"scroll",height:"35vh"}}>
                <Typography style={{ color: "white", textAlign: "justify" }}>
                  It all started with needles and yarns as I dipped my toes into
                  the world of knitwear design. I embarked on my first adventure
                  into the world of design, crafting knitwear wonders for
                  “Madame”. But my hunger for innovation didn’t stop there and I
                  joined “Aleta, USA” as a fashion designer where I graced the
                  glamorous frames of big name celebrities
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  On the side, I delved into the digital domain freelancing as a
                  graphic designer, be it graffiti graphics or captivating
                  branding.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  Then NID, Ahmedabad beckoned - here I wore yet another hat as
                  a cultural coordinator, immersing myself in a whirl mind of
                  artistic expression and community engagement.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  Diving deeper my first UI/UX internship opened doors to world
                  of segmented displays and digital clusters for EV vehicles. In
                  my graduation project I crafted intuitive self ordering kiosks
                  that are now bringing convenience to the masses.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  From needles to pixels, from runways to digital highways, my
                  career has been a kaleidoscope of experiences. And guess what?
                  I’m just getting started.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                    textAlign: "right",
                    fontSize: "5rem",
                    position: "absolute",
                    top: "70%",
                  }}
                >
                  Experience
                </Typography>
              </Grid>
            </Grid>
          )}

          {interest && (
            <Grid
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ padding:"4rem" ,paddingTop:"0rem"}}
            >
              <Grid item xs={12} sm={12} md={6} lg={6} style={{overflow:"scroll",height:"35vh"}}>
                <Typography style={{ color: "white", textAlign: "justify" }}>
                  The wild wanderer with a passion for pixels, pencils and
                  picking up pieces each one a tangible reminder of the places
                  I’ve been and the experiences I’ve had. From kitschy trinklets
                  to vintage postcards my treasure trove knows no bounds.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  Flip through the pages of my journal, and you will find a
                  menagerie of characters or urban landscape brought to life.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  It’s not just about what I put on paper; it’s also about what
                  I see through the lens of my camera be it urban jungles,
                  tranquil landscapes or candid moments.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  Ah, Music! - the soundtrack to my adventures! whether it’s the
                  soulful strains of Hindustani melodies or the pulsating beats
                  of the streets, I’m always grooving to the rhythm of life.
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  So if you ever catch a glimpse of a quirky character with a
                  sketchbook in on hand, a camera in the other and a smile as
                  wide as the horizon, that’s probably me - the designer on a
                  perpetual adventure.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                    textAlign: "right",
                    fontSize: "5rem",
                    position: "absolute",
                    top: "70%",
                  }}
                >
                  Interest
                </Typography>
              </Grid>
            </Grid>
          )}
        </div>

      


      </div>
      <section class="main" id="section3" style={{ height: "27vh" }}>
          <Grid
            style={{
              marginTop: "4rem",
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
                marginBottom:"3rem"
              }}
            >
              <img alt="Be" src={be} width="30px" height="30px" />
              <img
                alt="instagram"
                src={instagram}
                width="30px"
                height="30px"
                style={{ padding: "0rem 1rem" }}
              />
              <img alt="linkedin" src={linked} width="30px" height="30px" />
              <img
                alt="gmail"
                src={mail}
                width="25px"
                height="20px"
                style={{ padding: "0rem 1.4rem" }}
              />
            </Grid>
          </Grid>
        </section>
    </>
  );
}

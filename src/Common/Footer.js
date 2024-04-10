import React,{useState} from 'react'
import { Grid, Typography,Divider } from "@mui/material";
import behance from "../assets/behance.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedinBlack.png";
import heart from "../assets/Heart.png";
import heartRed from "../assets/HeartRed.png";
import mail from "../assets/Icon.png";

export default function Footer() {

    const [heartColor, setHeartColor] = useState(false);


    
      const heartChange = () => {
        setHeartColor(!heartColor);
        console.log("heartColor");
      };


  return (
  <>
     <section class="main" id="section3" style={{ height: "27vh" }}>
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
              <img alt="Be" src={behance} width="30px" height="30px" 
                 style={{ cursor: "pointer" }}
                 onClick={() =>
                   window.open("https://www.behance.net/istutitripath")
                 }/>
              <img
                alt="instagram"
                src={insta}
                width="30px"
                height="30px"
                style={{ padding: "0rem 1rem" ,cursor: "pointer"}}
               
                onClick={() =>
                  window.open("https://www.instagram.com/sketchy_beaver19/")
                }
              />
              <img alt="linkedin" src={linkedin} width="30px" height="30px"  
                 style={{ cursor: "pointer" }}
                 onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/istuti-tripathi-336038181/"
                    )
                  }
              />
              <img
                alt="gmail"
                src={mail}
                width="25px"
                height="20px"
                style={{ padding: "0rem 1rem",cursor: "pointer"  }}
                onClick={() => (window.location = "mailto:yourmail@domain.com")}
              />
            </Grid>
          </Grid>
        </section>
  </>
  )
}

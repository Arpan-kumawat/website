import React, { useState ,useEffect} from "react";
import { Grid, Typography, Divider } from "@mui/material";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

import "./styles.css";

function FirstSection() {
  const [isHovered, setIsHovered] = useState(false);

  const [aboutHover, setAboutHover] = useState(false);

  const [about, setAbout] = useState(true);
  const [background, setBackground] = useState(false);
  const [experience, setExperience] = useState(false);
  const [interest, setInterest] = useState(false);

  useEffect(() => { 
    setTimeout(() => {
      setIsHovered(true)
    }, 3000);
    setTimeout(() => {
      setAboutHover(true)
    }, 3500);

}, []);



  
  return (
    <>
      <div style={{ height: "100%", background: "black" }}>
        <Header page={"about"} />

        <div>
          <div style={{ paddingTop: "10%" ,display: "flex", justifyContent: "space-evenly",flexDirection:"row-reverse"}}>
            {/* <img class="animatedImg1"
              style={{ width: "15%",  }}
              src={img4}  alt="img"
            /> */}
  <div 
  class= "animatedImg1"

  // class={experience ? "zoomedImg" : "zoomAbout2"}
    onMouseEnter={() =>   setAbout(false) +
      setBackground(false) +
      setInterest(false) +
      setExperience(true)
    }
    // onMouseLeave={() => setExperience(false)}
    >
 <img
  class="imgWidth"
  src={img3}
  alt="img"
  style={{
    transform: experience? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.3s ease', 
    opacity: isHovered ? experience ?1:0.6:1,
  }}
        // onClick={() =>
        //   setAbout(false) +
        //   setBackground(false) +
        //   setInterest(false) +
        //   setExperience(true)
        // }
      />
      {!experience && isHovered && (
        <p
          style={{
            color: "white",
            margin: "5px",
            textAlign: "left",
            paddingLeft: "4rem",
          }}
        >
          Experience
        </p>
      )}
    </div>

            {/* <img
             class="animatedImg2"
              style={{
                width: "15%",
              }}
              src={img3}
              alt="img"
            /> */}
          <div 
          // class={interest ? "zoomedImg" : "zoomAbout2"}
             class="animatedImg2"
               onMouseEnter={() =>      setAbout(false) +
                setBackground(false) +
                setInterest(true) +
                setExperience(false)}
              //  onMouseLeave={() => setInterest(false)}
               >
  
                <img
                  class="imgWidth"
                  src={img4}
                  alt="img"
                  style={{
                    transform: interest? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.3s ease', 
                    opacity: isHovered ? interest ?1:0.6:1,
                  }}
                  // onClick={() =>
                  //   setAbout(false) +
                  //   setBackground(false) +
                  //   setInterest(true) +
                  //   setExperience(false)
                  // }
                />
                {!interest && isHovered && (
                  <p
                    style={{
                      color: "white",
                      margin: "5px",
                      textAlign: "left",
                      paddingLeft: "4rem",
                    }}
                  >
                    Interest
                  </p>
                )}
              </div>
            {/* <img
                         class="animatedImg3"
              style={{
                width: "15%",
              }}
              src={img2}
              alt="img"
            /> */}
             <div 
              class="animatedImg3"
              // class={background ? "zoomedImg" : "zoomAbout2"}
        onMouseEnter={() =>      setAbout(false) +
          setBackground(true) +
          setInterest(false) +
          setExperience(false) }
        // onMouseLeave={() => setBackground(false)}
        >
      <img
             class="imgWidth"
        src={img2}
        alt="img"
        style={{
          transform: background && isHovered ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.3s ease', 
          opacity: isHovered ? background ?1:0.6:1,
        }}
        // onClick={() =>
        //   setAbout(false) +
        //   setBackground(true) +
        //   setInterest(false) +
        //   setExperience(false)
        // }
      />
      {!background && isHovered && (
        <p
          style={{
            color: "white",
            margin: "5px",
            textAlign: "left",
            paddingLeft: "4rem",
          }}
        >
          Background
        </p>
      )}
    </div>
            {/* <img
             class="animatedImg4"
              style={{ width: "15%",
               }}
              src={img1}
              alt="img"
            /> */}
              <div 
              // class={about ? "zoomedImg" : "zoomAbout2"}
                     class="animatedImg4"
           onMouseEnter={() =>     setAbout(true) +
            setBackground(false) +
            setInterest(false) +
            setExperience(false)}
          //  onMouseLeave={() => setIsHovered(false)}
           >

      <img
              class="imgWidth"
        src={img1}
        alt="img"
        style={{
          transform: about  && isHovered  ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.3s ease', 
          opacity: about ?1:0.6,
        }}
        // onClick={() =>
        //   setAbout(true) +
        //   setBackground(false) +
        //   setInterest(false) +
        //   setExperience(false)
        // }
      />
      {!about && isHovered && (
        <p
          style={{
            color: "white",
            margin: "5px",
            textAlign: "left",
            paddingLeft: "4rem",
          }}
        >
          About me
        </p>
      )}
    </div>
          </div>

<Typography class="animated-text" style={{color:"white",fontSize:"8rem",position:"absolute", left:"20%",top:"20%"}}>
Hello, I’M
</Typography>
<Typography class="animated-text" style={{color:"white",fontSize:"8rem",position:"absolute", left:"35%",top:"37%"}}>
ISTUTI
</Typography>
<Typography class="animated-text" style={{color:"white",fontSize:"8rem",position:"absolute", left:"35%",top:"55%"}}>
TRIPATHI
</Typography>

        </div>
        <div style={{ minHeight: !isHovered ?"100vh":"50vh" }}>

 <div>


{/* <Grid
  container
  xs={12}
  sm={12}
  md={12}
  lg={12}
  style={{
    padding: "3rem",
    paddingTop: "10rem",
    paddingBottom: "5rem",
    justifyContent: "space-around",
  }}
>
  <Grid item xs={12} sm={12} md={3} lg={3}>
  <div class={about ? "zoomedImg" : "zoomAbout2"}
           onMouseEnter={() =>     setAbout(true) +
            setBackground(false) +
            setInterest(false) +
            setExperience(false)}
          //  onMouseLeave={() => setIsHovered(false)}
           >

      <img
        style={{ width: "66%", height: "73%" }}
        src={img1}
        alt="img"
        // onClick={() =>
        //   setAbout(true) +
        //   setBackground(false) +
        //   setInterest(false) +
        //   setExperience(false)
        // }
      />
      {!about && (
        <p
          style={{
            color: "white",
            margin: "5px",
            textAlign: "left",
            paddingLeft: "3rem",
          }}
        >
          About me
        </p>
      )}
    </div>
  </Grid>

  <Grid item xs={12} sm={12} md={3} lg={3}>
  <div class={background ? "zoomedImg" : "zoomAbout2"}
        onMouseEnter={() =>      setAbout(false) +
          setBackground(true) +
          setInterest(false) +
          setExperience(false) }
        // onMouseLeave={() => setBackground(false)}
        >
      <img
        style={{ width: "66%", height: "73%" }}
        src={img2}
        alt="img"
        // onClick={() =>
        //   setAbout(false) +
        //   setBackground(true) +
        //   setInterest(false) +
        //   setExperience(false)
        // }
      />
      {!background && (
        <p
          style={{
            color: "white",
            margin: "5px",
            textAlign: "left",
            paddingLeft: "3rem",
          }}
        >
          Background
        </p>
      )}
    </div>
  </Grid>
  <Grid item xs={12} sm={12} md={3} lg={3}>
  <div class={interest ? "zoomedImg" : "zoomAbout2"}
     onMouseEnter={() =>      setAbout(false) +
      setBackground(false) +
      setInterest(true) +
      setExperience(false)}
    //  onMouseLeave={() => setInterest(false)}
     >

      <img
        style={{ width: "66%", height: "73%" }}
        src={img4}
        alt="img"
        // onClick={() =>
        //   setAbout(false) +
        //   setBackground(false) +
        //   setInterest(true) +
        //   setExperience(false)
        // }
      />
      {!interest && (
        <p
          style={{
            color: "white",
            margin: "5px",
            textAlign: "left",
            paddingLeft: "3rem",
          }}
        >
          Interest
        </p>
      )}
    </div>
  </Grid>
  <Grid item xs={12} sm={12} md={3} lg={3}>
  <div class={experience ? "zoomedImg" : "zoomAbout2"}
    onMouseEnter={() =>   setAbout(false) +
      setBackground(false) +
      setInterest(false) +
      setExperience(true)
    }
    // onMouseLeave={() => setExperience(false)}
    >
      <img
        style={{ width: "66%", height: "73%" }}
        src={img3}
        alt="img"
        // onClick={() =>
        //   setAbout(false) +
        //   setBackground(false) +
        //   setInterest(false) +
        //   setExperience(true)
        // }
      />
      {!experience && (
        <p
          style={{
            color: "white",
            margin: "5px",
            textAlign: "left",
            paddingLeft: "3rem",
          }}
        >
          Experience
        </p>
      )}
    </div>
  </Grid>
</Grid> */}


{about && isHovered &&  (

 <> 
 <div   
 
 class= "fadeInUp-animation">


  <Grid

    container
    xs={12}
    sm={12}
    md={12}
    lg={12}
    style={{
      padding: "4rem",
      paddingTop: "4rem",
      paddingBottom: "10rem",
    }}
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
  </div>
  </>
)} 

{background && isHovered  &&(

<div class= "fadeInUp-animation">

  <Grid

    container
    xs={12}
    sm={12}
    md={12}
    lg={12}
    style={{ padding: "4rem", paddingTop: "4rem" }}
  >
    <Grid item xs={12} sm={12} md={6} lg={6}>
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
</div>
 )}  

{experience && isHovered &&(

<div class= "fadeInUp-animation">
  <Grid
    container
    xs={12}
    sm={12}
    md={12}
    lg={12}
    style={{ padding: "4rem", paddingTop: "4rem" }}
  >
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      style={{ overflow: "scroll", height: "35vh" ,scrollbarWidth:"none"}}
    >
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
          top: "75%",
        }}
      >
        Experience
      </Typography>
    </Grid>
  </Grid>
  </div>
)}

{interest && isHovered &&(
  <div class= "fadeInUp-animation">
  <Grid
    container
    xs={12}
    sm={12}
    md={12}
    lg={12}
    style={{ padding: "4rem", paddingTop: "4rem" }}
  >
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      style={{ overflow: "scroll", height: "35vh" ,scrollbarWidth:"none"}}
    >
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
          top: "75%",
        }}
      >
        Interest
      </Typography>
    </Grid>
  </Grid>
  </div>
)}
</div> 

</div>
      </div>
      <Footer />
    </>
  );
}

export default FirstSection;

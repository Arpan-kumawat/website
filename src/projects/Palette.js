import React from "react";
import "../App.css";

import img1 from "../assets/pdf/palette/1.jpg";
import img2 from "../assets/pdf/palette/2.jpg";
import img3 from "../assets/pdf/palette/3.jpg";
import img4 from "../assets/pdf/palette/4.jpg";
import img5 from "../assets/pdf/palette/5.jpg";
import img6 from "../assets/pdf/palette/6.jpg";
import img7 from "../assets/pdf/palette/7.jpg";

import img8 from "../assets/pdf/palette/8.jpg";
import img9 from "../assets/pdf/palette/9.jpg";
import img10 from "../assets/pdf/palette/10.jpg";
import img11 from "../assets/pdf/palette/11.jpg";
import img12 from "../assets/pdf/palette/12.jpg";
import img13 from "../assets/pdf/palette/13.jpg";
import img14 from "../assets/pdf/palette/14.jpg";

import video from "../assets/pdf/palette/design.mp4";
import Header from "../Common/Header";

export default function Palette() {
  return (
    <>
      <div>
        <Header page={"work"} />

        <div style={{ paddingTop: "3rem" }}>
          <img
            alt="logo"
            src={img1}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img2}
            style={{ width: "100%", display: "block" }}
          />

          <img
            alt="logo"
            src={img3}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img4}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img5}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img6}
            style={{ width: "100%", display: "block" }}
          />

          <img
            alt="logo"
            src={img7}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img8}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img9}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img10}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img11}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img12}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img13}
            style={{ width: "100%", display: "block" }}
          />
          <img
            alt="logo"
            src={img14}
            style={{ width: "100%", display: "block" }}
          />
          <video width={"100%"} height={"100%"} autoplay="autoplay" muted>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </>
  );
}

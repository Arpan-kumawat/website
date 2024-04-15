import React from "react";
import "../App.css";

import img1 from "../assets/pdf/bookCover/1.jpg";
import img3 from "../assets/pdf/bookCover/3.jpg";
import img4 from "../assets/pdf/bookCover/4.jpg";
import img5 from "../assets/pdf/bookCover/5.jpg";
import img6 from "../assets/pdf/bookCover/6.jpg";
import img7 from "../assets/pdf/bookCover/7.jpg";

import img8 from "../assets/pdf/bookCover/8.jpg";
import img9 from "../assets/pdf/bookCover/9.jpg";

import img13 from "../assets/pdf/bookCover/13.jpg";

import img15 from "../assets/pdf/bookCover/15.jpg";
import img16 from "../assets/pdf/bookCover/16.jpg";
import img17 from "../assets/pdf/bookCover/17.jpg";



import Header from "../Common/Header";

export default function BookCover() {
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
        {/* <img
          alt="logo"
          src={img2}
          style={{ width: "100%", display: "block" }}
        /> */}

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
          src={img13}
          style={{ width: "100%", display: "block" }}
        />
        <img
          alt="logo"
          src={img15}
          style={{ width: "100%", display: "block" }}
        />
          <img
          alt="logo"
          src={img16}
          style={{ width: "100%", display: "block" }}
        />
          <img
          alt="logo"
          src={img17}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
  </>
  )
}

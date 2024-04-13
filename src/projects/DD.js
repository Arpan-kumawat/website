import React from "react";
import "../App.css";

import img1 from "../assets/pdf/ddfree/dd-01.png";

import img2 from "../assets/pdf/ddfree/dd-02.jpg";
import img3 from "../assets/pdf/ddfree/dd-03.jpg";
import img4 from "../assets/pdf/ddfree/dd-04.jpg";
import img5 from "../assets/pdf/ddfree/dd-05.jpg";
import img6 from "../assets/pdf/ddfree/dd-06.jpg";
import img7 from "../assets/pdf/ddfree/dd-07.jpg";

import img8 from "../assets/pdf/ddfree/dd-08.jpg";
import img9 from "../assets/pdf/ddfree/dd-09.jpg";
import img10 from "../assets/pdf/ddfree/dd-10.jpg";
import img11 from "../assets/pdf/ddfree/dd-11.jpg";

import Header from "../Common/Header";

export default function DD() {
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
        </div>
      </div>
    </>
  );
}

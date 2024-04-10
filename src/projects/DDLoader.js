import React from "react";
import "../App.css";

import video from "../assets/pdf/ddloader/loader.mp4";

import Header from "../Common/Header";

export default function DDLoader() {
  return (
    <div>
      <Header page={"work"} />
      <div style={{ paddingTop: "3rem" }}>
        <video width={"100%"} height={"100%"} autoplay="autoplay" muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

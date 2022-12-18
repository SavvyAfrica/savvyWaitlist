import React from "react";
import Frame1 from "../features/about/frame1/frame";
import Frame2 from "../features/about/frame2/frame";
import Landing from "../features/about/landing/landing";

function About() {
  return (
    <div className="w-full">
      <Landing />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default About;

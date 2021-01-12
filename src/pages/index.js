import React from "react";
import Lavender from "../assets/video/lavender.mp4";

const Features = () => {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        >
          <source src={Lavender} type="video/mp4" />
        </video>
        <h1>La Nomada</h1>
    </div>
  )
}

export default Features

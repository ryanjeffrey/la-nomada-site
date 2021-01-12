import React from "react";
import Lavender from "./components/video/lavender.mp4";
import "../css/App.css";

const Video = () => {
  return (
    <div className="container">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={Lavender}
        />

        <h1>La Nomada</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Video />
      </div>
    </div>
  )
}

export default App;

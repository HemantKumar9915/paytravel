import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Bsection.css";

function Bsection() {
  return (
    <div className="Bsection-container">
      <video src="/videos/v.mp4" autoPlay loop muted />
      <h1>ADEVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="Bsection-btns">
        <Button
          className="btn"
          buttonstyle="btn--outline"
          buttonsize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonstyle="btn--primary"
          buttonsize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
export default Bsection;

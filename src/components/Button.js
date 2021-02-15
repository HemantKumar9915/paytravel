import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn-medium", "btn-large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonsize,
  buttonstyle,
}) => {
  const checkButtonStyle = STYLES.includes(buttonstyle)
    ? buttonstyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

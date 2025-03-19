import React from "react";
import "../styles/components.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const withColour = (Component) => (props) => {
  return (
    <Component
      {...props}
      className={"mode-" + (mode === "light" ? "dark" : light)}
    />
  );
};

export default withColour;

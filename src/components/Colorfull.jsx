import React from "react";

const Colorfull = (props) => {
  console.log(props);
  const contetStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contetStyle}>{props.message}</p>;
};

export default Colorfull;

import React from "react";

function Marquee(props) {
  const message = props.match.params.text;
  return (
    <div>
      <marquee>{message}</marquee>
    </div>
  );
}

export default Marquee;

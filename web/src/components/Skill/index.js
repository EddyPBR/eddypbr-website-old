import React, { useEffect } from "react";

import "./styles.css";

const Skill = (props) => {
  const { value, name } = props;
  const deg = value * 3.6;

  useEffect(() => {
    rotateBorder(deg);
  }, [deg]);

  function rotateBorder(deg) {
    const border = document.getElementsByClassName("border")[0];
    console.log(deg);
    deg <= 180
      ? (border.style.backgroundImage =
          "linear-gradient(" +
          (90 + deg) +
          "deg, transparent 50%, #191238 50%),linear-gradient(90deg, #191238 50%, transparent 50%)")
      : (border.style.backgroundImage =
          "linear-gradient(" +
          (deg - 90) +
          "deg, transparent 50%, #FF005C 50%),linear-gradient(90deg, #191238 50%, transparent 50%)");
  }

  return (
    <div className="skill">
      <div className="border">
        <div className="circle">
          <span>{value}%</span>
        </div>
      </div>
      <b>{name}</b>
    </div>
  );
};

export default Skill;

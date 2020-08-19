import React, { useEffect } from "react";

import "./styles.css";

const Skill = (props) => {
  const { value, name } = props;

  useEffect(() => {
    rotateBorder(value);
  }, [value]);

  function rotateBorder() {
    const borders = [...document.getElementsByClassName("border")];
    borders.forEach((border) => {
      const value = border.getAttribute("value");
      const deg = value * 3.6;

      if (deg <= 180) {
        border.style.backgroundImage =
          "linear-gradient(" +
          (90 + deg) +
          "deg, transparent 50%, #191238 50%),linear-gradient(90deg, #191238 50%, transparent 50%)";
      } else {
        border.style.backgroundImage =
          "linear-gradient(" +
          (deg - 90) +
          "deg, transparent 50%, #FF005C 50%),linear-gradient(90deg, #191238 50%, transparent 50%)";
      }
    });
  }

  return (
    <div className="skill">
      <div className="border" value={value}>
        <div className="circle">
          <span>{value}%</span>
        </div>
      </div>
      <b>{name}</b>
    </div>
  );
};

export default Skill;

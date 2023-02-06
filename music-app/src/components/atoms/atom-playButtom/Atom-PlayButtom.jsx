import React from "react";
import "./atom-playButtom.css";
import Play from "../../../assets/img/icons/play.svg";

const PlayButtom = () => {
  return (
    <button className="playButtom">
      <img src={Play} className="imgPlay" alt="Play Buttom" />
    </button>
  );
};

export default PlayButtom;

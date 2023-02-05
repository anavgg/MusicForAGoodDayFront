import React from "react";
import "../atom-buttomPlay/atom-buttomPlay.css";
import Play from "../../../assets/img/icons/play.svg";

const PlayButtom = () => {
  return (
    <button className="buttomPlay">
      <img src={Play} className="imgPlay" alt="Buttom Play" />
    </button>
  );
};

export default PlayButtom;

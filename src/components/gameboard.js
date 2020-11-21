import React from "react";
import Game from "./game";

const GameBoard = () => {
  return (
    <div className="flex flex-col mt-16 justify-center">
      <div className="flex">
        <Game />
        <Game />
        <Game />
      </div>
      <div className="flex">
        <Game />
        <Game />
        <Game />
      </div>
      <div className="flex">
        <Game />
        <Game />
        <Game />
      </div>
    </div>
  );
};

export default GameBoard;

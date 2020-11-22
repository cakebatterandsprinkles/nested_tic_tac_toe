import React from "react";
import Game from "./game";

const GameBoard = () => {
  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-center">
        <Game />
        <Game />
        <Game />
      </div>
      <div className="flex justify-center">
        <Game />
        <Game />
        <Game />
      </div>
      <div className="flex justify-center">
        <Game />
        <Game />
        <Game />
      </div>
    </div>
  );
};

export default GameBoard;

import React from "react";
import Game from "./game";

const GameBoard = () => {
  const [nextPlayer, setNextPlayer] = React.useState("X");

  const onPlay = () => {
    setNextPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-center">
        <Game next={nextPlayer} onPlay={onPlay} />
        <Game next={nextPlayer} onPlay={onPlay} />
        <Game next={nextPlayer} onPlay={onPlay} />
      </div>
      <div className="flex justify-center">
        <Game next={nextPlayer} onPlay={onPlay} />
        <Game next={nextPlayer} onPlay={onPlay} />
        <Game next={nextPlayer} onPlay={onPlay} />
      </div>
      <div className="flex justify-center">
        <Game next={nextPlayer} onPlay={onPlay} />
        <Game next={nextPlayer} onPlay={onPlay} />
        <Game next={nextPlayer} onPlay={onPlay} />
      </div>
    </div>
  );
};

export default GameBoard;

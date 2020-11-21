import React from "react";

const Game = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));

  function renderSquare(i) {
    return (
      <button
        className="border border-white h-full w-full text-lg bold focus:outline-none focus:bg-pink-200 "
        onClick={() => selectSquare(i)}
      >
        {squares[i]}
      </button>
    );
  }

  function selectSquare(square) {
    return;
  }

  return (
    <div className="w-24 h-24 md:w-32 md:h-32 grid m-1 border border-white rounded-sm">
      <div className="flex bg-pink-100">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="flex bg-pink-100">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="flex bg-pink-100">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Game;

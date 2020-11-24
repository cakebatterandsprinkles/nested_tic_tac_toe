import React from "react";
import "../styles.css";

const Game = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));

  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);
  const status = calculateStatus(winner);

  function renderSquare(i) {
    return (
      <button
        className="title border border-white h-full w-full text-lg bold flex-1 focus:outline-none focus:bg-pink-200 "
        onClick={() => selectSquare(i)}
      >
        {squares[i]}
      </button>
    );
  }

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
  }

  function calculateNextValue(squares) {
    const xCount = squares.filter((item) => item === "X").length;
    const oCount = squares.filter((item) => item === "O").length;
    return xCount === oCount ? "X" : "O";
  }

  function calculateWinner(squares) {
    const winningPositionsArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let condition of winningPositionsArray) {
      const [a, b, c] = condition;
      if (
        squares[a] &&
        squares[b] &&
        squares[c] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function calculateStatus(winner) {
    return winner ? winner : null;
  }

  return winner ? (
    <div className="relative">
      <span className="title text-6xl text-black absolute absolute-center">
        {winner}
      </span>
      <div className="w-24 h-24 md:w-32 md:h-32 grid m-1 border border-white rounded-sm opacity-25">
        <div className="flex bg-gray-200">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="flex bg-gray-200">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="flex bg-gray-200">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-24 h-24 md:w-32 md:h-32 grid m-1 border border-white rounded-sm">
      <div className="flex bg-gray-200">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="flex bg-gray-200">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="flex bg-gray-200">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Game;

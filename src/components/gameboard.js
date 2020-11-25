import React from "react";
import Game from "./game";

const GameBoard = () => {
  const [nextPlayer, setNextPlayer] = React.useState("X");
  const [squares, setSquares] = React.useState(Array(9).fill(null));

  const winner = calculateWinner(squares);

  function updateSquare(position, winner) {
    const squaresCopy = [...squares];
    squaresCopy[position] = winner;
    setSquares(squaresCopy);
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

  const onPlay = () => {
    return winner
      ? console.log(`Winner is ${winner}!!!!!`)
      : setNextPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-center">
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={0}
        />
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={1}
        />
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={2}
        />
      </div>
      <div className="flex justify-center">
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={3}
        />
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={4}
        />
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={5}
        />
      </div>
      <div className="flex justify-center">
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={6}
        />
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={7}
        />
        <Game
          next={nextPlayer}
          onPlay={onPlay}
          biggerBoardUpdate={updateSquare}
          position={8}
        />
      </div>
    </div>
  );
};

export default GameBoard;

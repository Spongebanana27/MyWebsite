import { useState } from "react";
import "./TicTacToe.css";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsUp, setXIsUp] = useState(true);
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsUp ? "X" : "O");
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsUp ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setXIsUp(!xIsUp);
    setSquares(nextSquares);
  }

  function restart() {
    setSquares(Array(9).fill(null));
  }

  function calculateWinner(squares: Array<string>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        ></Square>
      </div>
      <button className="restart-button" onClick={restart}>
        RESTART
      </button>
    </>
  );
}

function Game() {
  return (
    <>
      <Board></Board>
    </>
  );
}

export default Game;

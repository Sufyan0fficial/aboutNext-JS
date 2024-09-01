"use client";

import { useState } from "react";

function Square({ value, onSquareClick, isWinningSquare }: any) {
  return (
    <button
      className={`w-[100px] h-[100px] flex justify-center items-center border border-white font-bold text-7xl bg-slate-400 hover:bg-slate-500 ${
        isWinningSquare ? "bg-yellow-400" : ""
      }`}
      onClick={onSquareClick}
      style={{ color: value === "X" ? "red" : "blue" }}
    >
      {value}
    </button>
  );
}

export default function MyApp() {
  const [whatNext, setwhatNext] = useState(true);
  const [squares, setsquares] = useState(Array(9).fill(null));

  function handleClick(i: any) {
    const squaresArray = squares.slice();
    if (squaresArray[i] || calculateWinner(squares)) {
      return;
    }
    if (whatNext) {
      squaresArray[i] = "X";
    } else {
      squaresArray[i] = "O";
    }

    setsquares(squaresArray);
    setwhatNext(!whatNext);
  }

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo?.winner;
  const winningLine = winnerInfo?.line;

  let status;
  let player;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    player = `Next Move: ${whatNext ? "X" : "O"}`;
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center relative bg-gradient-to-r from-slate-950 to-slate-900">
      <div className="absolute top-0 text-4xl font-extrabold">Tic-Tac-Toe</div>
      <div className="font-semibold text-xl">{player}</div>
      <div className="flex gap-8">
        <div className="flex flex-wrap w-[320px] h-[320px] justify-evenly content-evenly">
          {squares.map((square, i) => (
            <Square
              key={i}
              value={square}
              onSquareClick={() => handleClick(i)}
              isWinningSquare={winningLine?.includes(i)}
            />
          ))}
        </div>
        <div className=" flex justify-center items-center text-2xl lg:text-7xl font-black ">
          {status}
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares: any) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return { winner: squares[a], line: winningLines[i] };
    }
  }

  return null;
}

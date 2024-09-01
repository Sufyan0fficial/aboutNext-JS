"use client";

import { useState } from "react";

function Square({ value, onSquareClick }: any) {
  return (
    <button
      className="w-[100px] h-[100px] flex justify-center items-center border border-white font-bold text-7xl bg-slate-400 hover:bg-slate-500 "
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

  const winner = calculateWinner(squares);
  let status;
  let player;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    player = `Next Move : ${whatNext ? "X" : "O"}`;
  }
  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center relative bg-gradient-to-r from-slate-950 to-slate-900">
      <div className="absolute top-0 text-4xl font-extrabold">Tic-Tac-Toe</div>
      <div className="font-semibold text-xl">{player}</div>
      <div className="flex gap-8">
        <div className="flex flex-wrap w-[320px] h-[320px] justify-evenly content-evenly">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div className=" flex justify-center items-center text-6xl font-black ">
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
      return squares[a];
    }
  }

  return null;
}

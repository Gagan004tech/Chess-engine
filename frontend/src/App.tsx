import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import axios from "axios";

const chess = new Chess();

function App() {
  const [fen, setFen] = useState(chess.fen());
  const [bestMove, setBestMove] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const onDrop = async (sourceSquare: string, targetSquare: string) => {
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for simplicity
    });

    if (move === null) return false;
    setFen(chess.fen());
    setHistory(chess.history());

    // Send FEN to backend for analysis
    try {
      const res = await axios.post("http://localhost:5000/analyze", {
        fen: chess.fen(),
        depth: 15,
      });
      setBestMove(res.data.bestMove);
      setAnalysis(res.data.analysis);
    } catch (err) {
      setBestMove("Error analyzing move");
      setAnalysis(null);
    }

    return true;
  };

  const chessboardOptions = {
    position: fen,
    onPieceDrop: ({ sourceSquare, targetSquare }: { piece: any; sourceSquare: string; targetSquare: string | null }) => {
      if (targetSquare === null) return false;
      onDrop(sourceSquare, targetSquare);
      return true;
    },
    boardWidth: 400,
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", minHeight: "100vh", background: "#222" }}>
      <div style={{ margin: "auto", padding: 40 }}>
        <Chessboard options={chessboardOptions} />
        <div style={{ color: "#fff", marginTop: 20 }}>
          <h2>Move History</h2>
          <div>{history.join(", ")}</div>
          <h2>Engine Analysis</h2>
          <div>Best Move: {bestMove}</div>
          <div>Raw: {analysis}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

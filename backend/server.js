const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Simple chess move generator (basic implementation)
function generateBasicMove(fen) {
  // This is a simplified move generator
  // In a real implementation, you'd use a proper chess engine
  const moves = [
    'e2e4', 'd2d4', 'c2c4', 'g1f3', 'b1c3', 'f2f4', 'e2e3', 'd2d3',
    'g2g3', 'b2b3', 'c2c3', 'f2f3', 'h2h3', 'a2a3', 'g1h3', 'b1a3'
  ];
  
  return moves[Math.floor(Math.random() * moves.length)];
}

// Analyze a move
app.post('/analyze', (req, res) => {
  const { fen, depth } = req.body;
  
  // Simulate analysis delay
  setTimeout(() => {
    const bestMove = generateBasicMove(fen);
    const analysis = `info depth ${depth || 15} score cp 50 nodes 1000 time 100 pv ${bestMove}`;
    
    res.json({ 
      bestMove, 
      analysis,
      message: "Basic analysis (Stockfish not available)"
    });
  }, 500);
});

app.listen(port, () => {
  console.log(`Chess engine backend listening at http://localhost:${port}`);
  console.log('Note: Using basic move generation (Stockfish not available)');
}); 
# ♟️ Chess Engine with AI Analysis

A modern chess application built with React, Node.js, and chess.js that provides real-time move analysis and a beautiful user interface.

## ✨ Features

- **Interactive Chessboard**: Drag-and-drop piece movement with visual feedback
- **Move Validation**: Automatic validation of legal chess moves
- **Move History**: Track all moves made during the game
- **AI Analysis**: Real-time analysis of board positions
- **Modern UI**: Clean, responsive design with dark theme
- **Cross-platform**: Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **react-chessboard** for the chess interface
- **chess.js** for game logic and move validation
- **Axios** for API communication

### Backend
- **Node.js** with Express
- **CORS** for cross-origin requests
- **Basic chess analysis engine**

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chess-engine.git
   cd chess-engine
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Start the backend server**
   ```bash
   cd backend
   node server.js
   ```
   You should see: `Chess engine backend listening at http://localhost:5000`

4. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```
   The application will open at `http://localhost:3000`

## 🎮 How to Play

1. **Make a Move**: Click and drag pieces to make legal chess moves
2. **View Analysis**: After each move, the engine will analyze the position and suggest the best move
3. **Track History**: View your move history below the board
4. **Reset**: Refresh the page to start a new game

## 📁 Project Structure

```
chess-engine/
├── backend/
│   ├── server.js          # Express server with chess analysis
│   ├── package.json       # Backend dependencies
│   └── node_modules/
├── frontend/
│   ├── src/
│   │   ├── App.tsx        # Main React component
│   │   ├── index.tsx      # React entry point
│   │   └── index.css      # Global styles
│   ├── public/
│   │   └── index.html     # HTML template
│   ├── package.json       # Frontend dependencies
│   └── node_modules/
└── README.md              # This file
```

## 🔧 Configuration

### Backend Configuration
- **Port**: Default port is 5000 (configurable in `backend/server.js`)
- **Analysis Depth**: Default analysis depth is 15 (configurable in API calls)

### Frontend Configuration
- **Board Size**: Default board width is 400px (configurable in `frontend/src/App.tsx`)
- **Theme**: Dark theme with customizable colors

## 🚀 Deployment

### Backend Deployment
1. Deploy to platforms like Heroku, Railway, or Vercel
2. Update the frontend API endpoint to point to your deployed backend
3. Ensure CORS is properly configured for your domain

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or GitHub Pages
3. Update the API endpoint in the code to match your backend URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [react-chessboard](https://github.com/Clariity/react-chessboard) for the chess interface
- [chess.js](https://github.com/jhlywa/chess.js) for chess logic
- [Stockfish](https://stockfishchess.org/) for chess engine inspiration

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Chess Playing! ♟️** 
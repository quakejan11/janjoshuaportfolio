import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const initialLines = [
    "Welcome to Jan's portfolio.",
    "Type 'help' to see available commands."
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-zinc-900 flex flex-col">
            <Terminal initialLines={initialLines} />
          </div>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
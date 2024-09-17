import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import PastWinners from './components/PastWinners';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/pastWinners" element={<PastWinners />} />
      </Routes>
    </Router>
  );
}

export default App;

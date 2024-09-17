import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import PastWinners from './components/PastWinners';
import Wallets from './components/Wallets';
import Referral from './components/Referral';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/pastWinners" element={<PastWinners />} />
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/referral" element={<Referral />} />
      </Routes>
    </Router>
  );
}

export default App;

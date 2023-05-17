import './App.css';
import Home from './pages/home/Home';
import { Route, Routes } from "react-router-dom";
import ShortListedCandidate from './pages/shortlistedCandidate/ShortListedCandidate';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shortlist" element={<ShortListedCandidate/>} />
     </Routes>
    </div>
  );
}

export default App;

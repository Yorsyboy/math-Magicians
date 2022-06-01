import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './Pages/Home';
import Quotes from './Pages/Quotes';

function App() {
  return (
    <Router>
      <div id="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

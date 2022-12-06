import './App.css';
import Home from './components/pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/type" element={<Type />} />
          <Route path="/allDetails" element={<AllDetails />} />
          <Route path="/details" element={<Details />} /> */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;

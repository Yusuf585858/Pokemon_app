import './App.css';
import Home from './components/pages/home/Home';
import AllDetails from './components/pages/alldetails/AllDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TypeOG from './components/pages/type/TypeOG';
import Landing from './components/pages/landing/Landing';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/typeOG" element={<TypeOG />} />
          <Route path="/allDetails/:id" element={<AllDetails />} />
          {/* <Route path="/details" element={<Details />} /> */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;

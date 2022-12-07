import './App.css';
import Home from './components/pages/home/Home';
import AllDetails from './components/pages/alldetails/AllDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';



function App() {

  const [allPokemon, setallPokemon] = useState([]);
  const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10000');

  useEffect(() => {


    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((allPokemon1) => {
        setallPokemon(allPokemon1.results);
        console.log(allPokemon1.results);
      });


  }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home Poke={allPokemon} />} />
          {/* <Route path="/type" element={<Type />} /> */}
          <Route path="/allDetails" element={<AllDetails Poke={allPokemon} />} />
          {/* <Route path="/details" element={<Details />} /> */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;

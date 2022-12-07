//import 'Landig.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Landing() {
    const [allPokemon, setallPokemon] = useState([]);
    const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon/pikachu');
    const [search, setSearch] = useState('');


    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((allPokemon1) => {
                setallPokemon(allPokemon1);
                console.log(allPokemon1);
            });

    }, [api]);


    return (
        <main>
            <div>
                <h1>write the full name of the pokemon, the function is under construction </h1>
                <input onChange={(e) => setSearch(e.target.value)} placeholder="search"></input>
                <button onClick={() => { setApi(`https://pokeapi.co/api/v2/pokemon/${search}`); }}>Search</button>
                <Link to={'/home'}><button>Show all pokemons</button></Link>
            </div>
            <div>
                <img src={allPokemon?.sprites?.front_default} ></img>
                <p>{allPokemon?.id}</p>
                <h1>{allPokemon?.name}</h1>
            </div>
        </main>
    );



}

export default Landing;

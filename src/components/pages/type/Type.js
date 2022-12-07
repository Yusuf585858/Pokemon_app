import React, { useState, useEffect, } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Type() {

    const [pokemon, setPokemon] = useState([]);
    const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000');

    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((allPokemon1) => {
                setPokemon(allPokemon1.results);
                console.log(allPokemon1.results);
            });

    }, []);

    useEffect(() => {
        fetch(pokemon.url)
            .then((response) => {
                return response.json();
            })
            .then((selectUrl) => {
                setPokemon(selectUrl);
                console.log(selectUrl);
            });
    });


}


export default Type;
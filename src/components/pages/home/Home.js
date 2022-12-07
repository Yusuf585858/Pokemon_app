import './Home.css';
import React, { useState, useEffect } from 'react';
import PokeCard from '../../../components/pokemoncard/PokeCard';


function Home(props) {
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
        <main>
            <div>
                {
                    allPokemon.map((item, index) => {
                        return (
                            <PokeCard url={item.url} />
                        );
                    })
                }
            </div>
        </main>



    );




}

export default Home;


/*  const [allPokemon, setallPokemon] = useState([]);
   const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10000');

   useEffect(() => {


       fetch(api)
           .then((response) => {
               return response.json();
           })
           .then((allPokemon1) => {
               setallPokemon(allPokemon1);
               console.log(allPokemon1);
           });


   }, []); */

/* if (allPokemon === undefined) return; */






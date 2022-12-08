import './Home.css';
import React, { useState, useEffect } from 'react';
import PokeCard from '../../../components/pokemoncard/PokeCard';
import Logo from '../../../img/image 1.png';
import Balls from '../../../img/LogoMakr.png';
import Background from '../../../img/background-unsplash.jpeg';


function Home() {
    const [allPokemon, setallPokemon] = useState([]);
    const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000');

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
        <main className='mainHome'>
            <div className='imgAndCards'>
                <img className='imgHome' src={Logo} alt='Logo' />
                <img className='imgBalls' src={Balls} />
                <div className='cardsHome'>
                    {
                        allPokemon.map((item, index) => {
                            return (
                                <PokeCard key={index} url={item.url} />
                            );
                        })
                    }
                </div>
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






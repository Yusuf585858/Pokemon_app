import './Home.css';
import React, { useState, useEffect } from 'react';


function Home() {


    const [allPokemon, setallPokemon] = useState([]);
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


    }, []);

    /* if (allPokemon === undefined) return; */


    return (
        <main>
            <div>
                {
                    allPokemon.results.map((item, index) => {
                        return (
                            <div key={index} >
                                <h1>{item.name}</h1>
                                <p>{item.url}</p>
                            </div>
                        );
                    })
                }
            </div>
        </main>
    );


}

export default Home;
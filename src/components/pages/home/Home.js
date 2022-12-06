import './Home.css';
import React, { useState, useEffect } from 'react';


function Home() {

    const [api, setApi] = useState("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10000");
    const [pokemon1, setPokemon1] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((pokemon1) => {
                setPokemon1(pokemon1);
                console.log(pokemon1);
            });
    }, []);






    return (
        <main>
            <div>
                <div>
                    <input onChange={(e) => setInput(e.target.value)} placeholder="type in pokemon"></input>
                    <button onClick={() => { setApi(``); }}>Search</button>
                </div>
            </div>
        </main>
    );


}

export default Home;
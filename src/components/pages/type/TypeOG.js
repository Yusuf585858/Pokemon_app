import React, { useState, useEffect } from 'react';
import TypeCard from './TypeCard';



function TypeOG() {
    //console.log(array);
    const [allPokemon, setallPokemon] = useState([]);
    const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000');

    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((allPokemon1) => {
                setallPokemon(allPokemon1.results);
                //console.log(allPokemon1.results);
            });

    }, []);

    /* const bug = () => {

        copy.filter(item => {
            return item.types[0].type.name == "bug";
        });
        setallPokemon(allPokemon);
    }; */




    return (
        <main>
            <div>
                {/* <button onClick={bug} >BUG</button> */}
                {/*    <button onClick={dark} >DARK</button>
            <button onClick={dragon} >DRAGON</button>
            <button onClick={electric} >ELECTRIC</button>
            <button onClick={fairy} >FAIRY</button>
            <button onClick={fighting} >FIGHTING</button>
            <button onClick={fire} >FIRE</button>
            <button onClick={flying} >FLYING</button>
            <button onClick={ghost} >GHOST</button>
            <button onClick={grass} >GRASS</button>
            <button onClick={ground} >GROUND</button>
            <button onClick={ice} >ICE</button>
            <button onClick={normal} >NORMAL</button>
            <button onClick={plant} >PLANT</button>
            <button onClick={poison} >POISON</button>
            <button onClick={psychic} >PSYCHIC</button>
            <button onClick={rock} >ROCK</button>
            <button onClick={steel} >STEEL</button>
            <button onClick={water} >WATER</button>  */}
            </div>


            <div>
                {
                    allPokemon.map((item, index) => {

                        return (
                            <div key={index}>

                                <TypeCard key={index} url={item.url} />

                            </div>
                        );
                    })

                }
            </div>
        </main>



    );


}

export default TypeOG;
import React, { useState, useEffect } from 'react';

function TypeCard(props) {
    const array = [];
    const [pokemon, setPokemon] = useState();
    useEffect(() => {


        fetch(props.url)
            .then((response) => {
                return response.json();
            })
            .then((PokemonRes) => {
                setPokemon(PokemonRes);
                //console.log(PokemonRes);
                array.push(PokemonRes);
                console.log(array);
            });

    }, []);

    return (
        <div>
            {/*  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`} /> */}
            <div >
                <p>#{pokemon?.id}</p>
                <h1>{pokemon?.name}</h1>
                <div>
                    {/*    <p>{pokemon?.types[0].type.name}</p>
                    <p>{pokemon?.types[1].type.name}</p> */}
                </div>

            </div>

        </div>

    );

}

export default TypeCard;

import React, { useState, useEffect } from 'react';

function PokeCard(props) {

    const [pokemon, setPokemon] = useState();
    useEffect(() => {


        fetch(props.url)
            .then((response) => {
                return response.json();
            })
            .then((PokemonRes) => {
                setPokemon(PokemonRes);
                console.log(PokemonRes);
            });

    }, []);

    return (
        <div>
            <img src={pokemon?.sprites?.front_default} />
            <h1>{pokemon?.name}</h1>
            <p>{pokemon?.id}</p>
        </div>
    );

}

export default PokeCard;

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
            <img src={sprites.front_default} />
        </div>
    );

}

export default PokeCard;

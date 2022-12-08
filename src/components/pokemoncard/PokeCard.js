import './PokeCard.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AllDetails from '../pages/alldetails/AllDetails';

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
        <div className='pokeCardDiv'>
            <Link to={`/AllDetails/${pokemon?.id}`} state={props.url}><img className='pokeCardImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`} /></Link>
            <div className='pokeNameAndPokedex'>
                <p className='pokeCardP'>#{pokemon?.id}</p>
                <h1 className='pokecardHeading'>{pokemon?.name}</h1>
            </div>
            {/* <Link to={{ pathname: '/Type', search: `?url=${props.url}` }} state={props.url}><button>To Types</button></Link> */}
        </div>

    );

}

export default PokeCard;

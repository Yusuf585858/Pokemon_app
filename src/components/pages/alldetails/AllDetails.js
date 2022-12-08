import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./AllDetails.css";
import scheissBild from '../../../img/image 1.png';

function AllDetails(props) {

    const location = useLocation();
    console.log(location);
    const [pokemon, setPokemon] = useState();

    useEffect(() => {


        fetch(location.state)
            .then((response) => {
                return response.json();
            })
            .then((pokemonDet) => {
                setPokemon(pokemonDet);
                console.log(pokemonDet);
            });

    }, [location.state]);

    return (
        <section className='secStyle'>
            <img alt='' className='imgStyle' src={scheissBild} />
            <input className='inputStyle' placeholder='Search Pokemon'></input>
            <div className='scheissDiv'>
                <img alt='' className='pokeIMG' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`} />
            </div>
            <h1 className='indexStyle'>{"#00"}{pokemon?.id} {pokemon?.name}</h1>
            <div className='typesStyle'>
                <p>{pokemon?.types[0].type.name}</p>
                <p>{pokemon?.types[1].type.name}</p>
            </div>
        </section>
    );



}


export default AllDetails; 
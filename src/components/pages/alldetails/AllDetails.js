import { useParams, Link, useLocation } from 'react-router-dom';
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

    }, []);

    return (
        <section className='secStyle'>
            <img className='imgStyle' src={scheissBild} />
            <input className='inputStyle' placeholder='Search Pokemon'></input>
            <div className='scheissDiv'>
                <img className='pokeIMG' src={pokemon?.sprites?.front_default} />
            </div>
            <h1 className='indexStyle'>{pokemon?.name}</h1>

        </section>
    );



}


export default AllDetails; 
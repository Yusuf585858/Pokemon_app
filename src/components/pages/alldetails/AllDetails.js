import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AllDetails(props) {

    const params = useParams();
    const clickedPokemon = props.url[params.pokenummer];
    console.log(clickedPokemon);

    return (
        <section>
            <img src={clickedPokemon.sprites.front_default} alt={"asdf"} ></img>
            <h1>{clickedPokemon.id} {clickedPokemon.name}</h1>
        </section>
    );



}


export default AllDetails; 
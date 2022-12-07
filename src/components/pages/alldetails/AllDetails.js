import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


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



    //const { id } = useParams();
    //const clickedPokemon = props.[params.pokenummer];
    /*  console.log(id);
     console.log(props); */

    return (
        <section>
            {/*  <img src={clickedPokemon.sprites.front_default} alt={"asdf"} ></img>
            <h1>{clickedPokemon.id} {clickedPokemon.name}</h1> */}
        </section>
    );



}


export default AllDetails; 
/* import './Type.css';
import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Type(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const url = searchParams.get("url");

        const location = useLocation();
        console.log(location);
    const [pokemon, setPokemon] = useState();

    useEffect(() => {


        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((pokemonDet) => {
                setPokemon(pokemonDet);
                console.log(pokemonDet);
            });

    }, []); */



/*   const bug = () => {
      pokemon.filter(item => {
          return item.type == "bug";
      });
      setPokemon(pokemon);
  };
*/

/* return (
    <section>
        <div>
            <button onClick={bug} >BUG</button>
               <button onClick={dark} >DARK</button>
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
            <button onClick={water} >WATER</button> 
        </div>
        {
            pokemon.map((item, index) => {
                return (
                    <div key={index} >
                        <img src={item?.sprites?.front_default}></img>
                        <h1>{item?.name}</h1>

                    </div>
                );
            })
        }

    </section>
); 


}

*/


/* export default Type;  */
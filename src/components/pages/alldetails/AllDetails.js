/* import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AllDetails(props) {
    const [api, setApi] = useState(props.url);
    const [poki, setPoki] = useState([]);

    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((allPokemon2) => {
                setPoki(allPokemon2);
                console.log(allPokemon2);
            });


    }, []);

    return (
        <div>Test</div>
    );


}


export default AllDetails; */
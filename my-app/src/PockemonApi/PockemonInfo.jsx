import PockemonError from "./PockemonError";
import PokemonData from "./PockemonData";
import PokemonApi from './services/pokemon-api'
import { useEffect, useState } from "react";

const PockemonInfo = ({pockemonName}) => {
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('idle')


    useEffect(() => {
        if (!pockemonName) {
            return;
        }

        setStatus('pending');

            setTimeout(() => {
                PokemonApi.fetchPokemon(pockemonName)
                .then(pokemon => {
                    setPokemon(pokemon)
                    setStatus('resolved')
                }
                )
                .catch(error =>{
                    setError(error)
                    setStatus('rejected')
                })
            }, 1000)
    }, [pockemonName])

        if(status === 'idle'){
            return <p>Enter pockemon name</p>
        }

        if(status === 'pending'){
            return <p>Loading...</p>
        }

        if (status === 'rejected') {
            return <PockemonError message={error.message}/>
        }

        if (status === "resolved") {
            return <PokemonData pokemon={pokemon}/>
          }
}

export default PockemonInfo;
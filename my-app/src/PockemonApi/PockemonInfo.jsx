import { Component } from "react";
import PockemonError from "./PockemonError";
import PokemonData from "./PockemonData";
import PokemonApi from './services/pokemon-api'

class PockemonInfo extends Component {
    state = { 
        pokemon: null,
        error: null,
        status: 'idle'
     }
    
    componentDidUpdate(prevProps, prevState){
        const prevName = prevProps.pockemonName
        const nextName = this.props.pockemonName
        
        if(prevName !== nextName){
            this.setState({status: 'pending'})

            setTimeout(() => {
                PokemonApi.fetchPokemon(nextName)
                .then(pokemon => this.setState({pokemon, status: 'resolved'}))
                .catch(error => this.setState({error, status: 'rejected'}))
            }, 1000)
        }
    }

    render() { 

        const {pokemon, error, status} = this.state;

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
}
 
export default PockemonInfo;
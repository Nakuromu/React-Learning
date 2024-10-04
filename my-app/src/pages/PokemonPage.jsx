import { useState } from "react";
import PockemonForm from "../PockemonApi/PockemonForm";
import PockemonInfo from "../PockemonApi/PockemonInfo";
import { ToastContainer} from 'react-toastify';

const PokemonPage =() => {

    const [pockemonName,setPockemonName] = useState('')

    const handleFormSubmit = pockemonName => {
        setPockemonName(pockemonName)
    } 

    return (
        <>
            <PockemonForm onSubmit = {handleFormSubmit}/>
            <ToastContainer autoClose={3000}/>
            <PockemonInfo pockemonName={pockemonName}/>
        </>
    )
}

export default PokemonPage
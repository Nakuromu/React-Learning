import React, { useContext, useState } from "react"

const ContextPokemon = React.createContext()

export const useCustomContext = () => {
    return useContext(ContextPokemon)
}

export const Context = ({children}) => {
    const [pokemon, setPokemon] = useState(null)

    return (
        <ContextPokemon.Provider value={{
            pokemon: pokemon,
            setPokemon: setPokemon,
        }}>
            {children}
        </ContextPokemon.Provider>
    )
}

export default Context
export default function PokemonData({ pokemon }) {
  
    return (
      <div>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width="240"
        />
        <h2>{pokemon.name}</h2>
        <ul>
          {pokemon.stats.map((entry) => (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
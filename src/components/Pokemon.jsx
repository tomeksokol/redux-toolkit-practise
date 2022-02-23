import * as React from 'react';
import { useGetPokemonByNameQuery } from '../services/pokemon';



const Pokemon = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  return (
  <div>
     {error ? (
        <>oh, no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.spicies.name} />
        </>
      ) : null}
  </div>
  );
};

export default Pokemon;

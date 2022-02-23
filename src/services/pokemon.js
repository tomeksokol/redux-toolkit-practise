import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

const { useGetPokemonByNameQuery } = pokemonApi

export { pokemonApi, useGetPokemonByNameQuery }
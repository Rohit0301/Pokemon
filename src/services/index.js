import { useApolloClient } from "@/hooks";
import { FETCH_POKEMONS, FETCH_POKEMON_DETAILS, FETCH_POKEMON_EVOLUTIONS } from "@/queries/pokemon";
import { gql } from "@apollo/client";
export const fetchAllPokemons = async () => {
  const client = useApolloClient();
  const { data } = await client.query({
    query: gql`
      ${FETCH_POKEMONS}
    `,
    variables: { first: 20 },
  });
  return data;
};

export const fetchPokemonDetails = async ({ pokemon_name }) => {
  const client = useApolloClient();

  const { data } = await client.query({
    query: gql`
      ${FETCH_POKEMON_DETAILS}
    `,
    variables: { name: pokemon_name },
  });

  return data;
};

export const fetchPokemonEvolution = async({pokemon_name}) => {
  const client = useApolloClient();
  const { data } = await client.query({
    query: gql`
      ${FETCH_POKEMON_EVOLUTIONS}
    `,
    variables: { name: pokemon_name },
  });
  return data;
}

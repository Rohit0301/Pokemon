export const FETCH_POKEMONS = `query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      types
      image
    }
  }`;

export const FETCH_POKEMON_EVOLUTIONS = `query pokemon($name: String){
    pokemon(name: $name){
      id
      name
      evolutions{
        id
        number
        name
        types
        image
      }
    }
  }`;

export const FETCH_POKEMON_DETAILS = `query pokemon($name: String){
    pokemon(name: $name){
      id
      number
      name
      classification
      resistant
      weaknesses  
      types
      image
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
    }
  }`;

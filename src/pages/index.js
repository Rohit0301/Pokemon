import PokemonCard from "@/components/PokemonCard";
import styles from '@/styles/home.module.css'
import { fetchAllPokemons } from "@/services";

export async function getStaticProps() {
  const data = await fetchAllPokemons();
  return {
    props: {
      pokemons: data?.pokemons || null,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <div className={`flex items-center flex-wrap justify-center  ${styles.pokemonContainer}`}>
      {pokemons && pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

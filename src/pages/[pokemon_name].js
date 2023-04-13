import styles from "@/styles/pokemon_name.module.css";
import React from "react";
import RangeCard from "@/components/RangeCard";
import ChipCard from "@/components/ChipCard";
import EvolutionModal from "@/components/EvolutionModal";
import { fetchPokemonDetails } from "@/services";

export async function getServerSideProps(context) {
  const { pokemon_name } = context.query;
  const data = await fetchPokemonDetails({pokemon_name})
  return {
    props: {
      pokemon: data.pokemon,
    },
  };
}

export default function PokemonDetails({ pokemon }) {
  const {
    name,
    image,
    weight,
    height,
    number,
    classification,
    types,
    resistant,
    weaknesses,
  } = pokemon;
  return (
    <div className={styles.container}>
      <div className={styles.left_section}>
      <img src={image} alt={name} className={styles.img} />
        <h2 className={styles.number}>#{number}</h2>
        <h2 className={styles.name}>
          {name} <p className={styles.classify}>{classification}</p>
        </h2>

        <RangeCard type='Weight' min={weight.minimum} max={weight.maximum} />
        <RangeCard type='Height' min={height.minimum} max={height.maximum} />
        <EvolutionModal />
      </div>
      <div className={styles.right_section}>
        <ChipCard title='Types' data={types} />
        <ChipCard title='Resistance' data={resistant} />
        <ChipCard title='Weakness' data={weaknesses} />
      </div>
    
    </div>
  );
}

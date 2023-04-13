import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import PokemonCard from "../PokemonCard";
import { fetchPokemonEvolution } from "@/services";
export default function EvolutionModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { pokemon_name } = router.query;
  const [evolutions, setEvolutions] = useState();

  const handleClose = (e) => {
    if (e.target.id === "modal_content") return;
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };


  useEffect(() => {
    (async () => {
      const data = await fetchPokemonEvolution({pokemon_name})
      setEvolutions(data?.pokemon?.evolutions);
    })();
  }, [pokemon_name]);

  return (
    <>
      {evolutions && (
        <button onClick={handleOpen} className={styles.btn}>
          Evolution {pokemon_name}
        </button>
      )}
      <div
        className={styles.modal}
        onClick={handleClose}
        style={{ display: open ? "block" : "none" }}
      >
        <div className={styles.modal_content} id='modal_content'>
          <h3 className={styles.head}>
            <span className={styles.head_name}>{pokemon_name}</span> Evolutions
          </h3>

          <div
            className={`flex items-center flex-wrap justify-center  ${styles.pokemonContainer}`}
          >
            {evolutions &&
              evolutions.map((pokemon) => (
                <PokemonCard
                  pokemon={pokemon}
                  key={pokemon.id}
                  onClick={handleClose}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

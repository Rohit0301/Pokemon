import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
export default function PokemonCard({ pokemon, onClick }) {
  const { name, image, types, number } = pokemon;
  return (
    <Link
      href={`/${name}`}
      className={styles.card}
      onClick={onClick}
    >
      <h6 className={styles.number}>#{number}</h6>
      <Image
        className={styles.img}
        src={image}
        alt='pokemon img'
        width={100}
        height={100}
      />
      <p className={styles.name}>{name}</p>
      <div className={styles.chipContainer}>
        {types.map((type, idx) => (
          <Chip data={type} key={idx} />
        ))}
      </div>
    </Link>
  );
}

export const Chip = ({ data }) => {
  return <div className={styles.chip}>{data}</div>;
};

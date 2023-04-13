import React from "react";
import styles from "./styles.module.css";

export default function RangeCard({ type, min, max }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.type}>{type}</h3>
      <div className={styles.ranges}>
        <p className={styles.key}>
          Minimum: <span className={styles.value}>{min}</span>
        </p>
        <p className={styles.key}>
          Maximum: <span className={styles.value}>{max}</span>
        </p>
      </div>
    </div>
  );
}

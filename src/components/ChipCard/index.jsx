import React from "react";
import styles from "./styles.module.css";

export default function ChipCard({ title, data }) {
  return (
    <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.chipContainer}>
      {data?.map((item, idx) => (
        <Chip data={item} key={idx} title={title} />
      ))}
      </div>
    </div>
  );
}

export const Chip = ({ data, title }) => {
  return <div className={styles.chip} style={{ background: colorCode[title] }}>{data}</div>;
};


const colorCode = {
    'Types': '#0081C9',
    'Resistance': '#FFB100',
    'Weakness': '#E21818'
}
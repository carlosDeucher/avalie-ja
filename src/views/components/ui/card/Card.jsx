import React from "react";
import styles from "./cardStyles.module.scss";
export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

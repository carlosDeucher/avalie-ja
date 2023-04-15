import React from "react";
import styles from "./boxStyles.module.scss";

export default function Box({ children, style }) {
  return <div className={styles.box} style={style}>{children}</div>;
}

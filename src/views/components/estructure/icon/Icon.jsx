import Image from "next/image";
import React from "react";
import styles from "./iconStyles.module.scss";
import arrowLeft from "/public/left-arrow-circle.svg";
export default function Icon({ size }) {
  return (
    <div
      className={styles.icon_wrapper}
      style={{ height: "40px", width: "40px" }}
    >
      <Image src={arrowLeft} fill />
    </div>
  );
}

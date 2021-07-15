import React from "react";
import styles from "../styles/ColorCard.module.css";

export const ColorCard = ({ colorArray }) => {
  return (
    <div
      className={styles.colorCard}
      style={{
        backgroundColor: `rgb(${colorArray[0]}%,${colorArray[1]}%,${colorArray[2]}%)`,
      }}
    >
      <span>{`rgb(${colorArray[0]}%,${colorArray[1]}%,${colorArray[2]}%)`}</span>
    </div>
  );
};

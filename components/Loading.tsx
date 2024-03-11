import React from 'react';
import styles from "../styles/Home.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingcontainer}>
      <div className={styles.loadingspinner}></div>
    </div>
  );
};

export default Loading;

import React from "react";
import styles from "../../styles/reusable/_dim.module.scss";

interface Props {
  children: JSX.Element;
}

const Dim = ({ children }: Props) => {
  return (
    <div className={styles.dimWrapper}>
      Dim
      {children}
    </div>
  );
};

export default Dim;

import React from "react";
import styles from "../../styles/reusable/_dim.module.scss";

interface Props {
  children: JSX.Element;
}

// 모바일이나 태블릿일 경우 사용.
const Dim = ({ children }: Props) => {
  return (
    <div className={styles.dimWrapper}>
      Dim
      {children}
    </div>
  );
};

export default Dim;

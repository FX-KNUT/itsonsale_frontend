import React, { useState } from "react";
import styles from "../../../styles/main/sidebar/_searchForm.module.scss";

const SearchForm = () => {
  const [sales, setSales] = useState<string>("전체");
  const changeSales = (e) => {
    setSales(e.target.value);
  };
  return (
    <div className={styles.searchFormWrapper}>
      <div className={styles.searchFormLeft}>
        <select className={styles.sales} onChange={changeSales}>
          <option value="전체">
            전체
          </option>
          <option value="1+1">1+1</option>
          <option value="2+1">2+1</option>
        </select>
        <p>
          <span>{sales}</span>
          <i className="fa-solid fa-sort-down"></i>
        </p>
      </div>
      <div className={styles.searchFormFill}>
        <input
          className={styles.test}
          type="text"
          name="Product"
          placeholder=" "
        />
        <label className={styles.move} htmlFor="Product">
          Product
        </label>
      </div>

      <div className={styles.searchFormRight}>
        <button
          className={styles.searchSubmitButton}
          id="search-submit-button"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchForm;

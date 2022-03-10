import React from "react";
import styles from "../../../styles/main/sidebar/_searchForm.module.scss";

const SearchForm = () => {
  return (
    <div className={styles.searchFormWrapper}>
      <div className={styles.searchFormLeft}>
        <select className={styles.sales}>
          <option value="every" selected>
            전체
          </option>
          <option value="oPo">1+1</option>
          <option value="tPo">2+1</option>
        </select>
      </div>
      <div className={styles.searchFormFill}>
        <input className={styles.test} type="text" name="Product" placeholder=" " />
        <label className={styles.move} htmlFor="Product">Product</label>
      </div>

      <div className={styles.searchFormRight}>
        <input
          className={styles.searchSubmitButton}
          id="search-submit-button"
          type="submit"
        />
      </div>
    </div>
  );
};


export default SearchForm;

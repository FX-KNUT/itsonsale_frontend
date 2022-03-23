import styles from "../../styles/header/_searchForm.module.scss";

const SEARCH = <i className="fa-solid fa-magnifying-glass"></i>;

const SearchForm = () => {
  return (
    <div className={styles.searchFormWrapper}>
      <div className={styles.selectBrand}>
        <select name="" id="">
          <option value="">CU</option>
          <option value="">GS25</option>
          <option value="">EMART25</option>
          <option value="">7ELEVEN</option>
          <option value="">MINISTOP</option>
        </select>
      </div>
      <div className={styles.selectEvent}>
        <select name="" id="">
          <option value="">1+1</option>
          <option value="">2+1</option>
          <option value="">덤증정</option>
          <option value="">가격할인</option>
        </select>
      </div>
      <div className={styles.inputName}>
        <input type="text" />
        <div className={styles.searchBtn}>{SEARCH}</div>
      </div>
    </div>
  );
};

export default SearchForm;

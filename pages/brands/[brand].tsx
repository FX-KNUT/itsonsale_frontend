import { useRouter } from "next/router";
import styles from "../../styles/main/section/_productList.module.scss";

const ProductList = () => {
  const router = useRouter();
  const query = router.query.brand;
  return <section className={styles.productListWrapper}>{query}</section>;
};

export default ProductList;

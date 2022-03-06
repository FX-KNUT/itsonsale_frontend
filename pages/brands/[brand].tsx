import { useRouter } from "next/router";
import styles from "../../styles/main/section/_brandProductList.module.scss";

const BrandProductList = () => {
  const router = useRouter();
  const query = router.query.brand;
  return <section className={styles.productListWrapper}>{query}</section>;
};

export default BrandProductList;

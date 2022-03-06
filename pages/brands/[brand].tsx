import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetch from "../../components/main/section/fetch";
import FetchMore from "../../components/main/section/FetchMore";
import ProductList from "../../components/main/section/ProductList";
import styles from "../../styles/main/section/_brandProductList.module.scss";

interface ListProps {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
}

const BrandProductList = () => {
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<ListProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchProductList: ListProps[] = fetch(page);
      setList((prev) => [...prev, ...fetchProductList]);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [page]);

  const router = useRouter();
  const query = router.query.brand;
  return (
    <section className={styles.productListWrapper}>
      <span>{query}</span>
      <ProductList list={list} />
      <FetchMore loading={page != 0 && loading} setPage={setPage} />
    </section>
  );
};

export default BrandProductList;

import React, { useEffect, useState } from "react";
import styles from "../../../styles/main/section/_section.module.scss";
import Product from "../../reusable/Product";
import fetch from "./fetch";
import FetchMore from "./FetchMore";
import ProductList from "./ProductList";

interface ListProps {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
}

const Section = () => {
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

  return (
    <section className={styles.sectionWrapper}>
      <ProductList list={list} />
      <FetchMore loading={page != 0 && loading} setPage={setPage} />
    </section>
  );
};

export default Section;

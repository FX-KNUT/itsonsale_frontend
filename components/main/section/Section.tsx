import React, { useEffect, useState } from "react";
import styles from "../../../styles/main/section/_section.module.scss";
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
  // 한무 스크롤을 위해 선언한 state
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<ListProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    try {
      // 나중에 데이터를 받아온다면 이 부분을 수정해야됨.
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
      {/* FetchMore이 뷰포트에 보이면 setPage가 바뀌면서 데이터를 불러오는 형태 */}
      <FetchMore loading={page != 0 && loading} setPage={setPage} />
    </section>
  );
};

export default Section;

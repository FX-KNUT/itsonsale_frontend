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

// BrandBadge를 눌렀을 때 이 부분이 실행됨.
const BrandProductList = () => {
  // const [page, setPage] = useState<number>(0);
  // const [list, setList] = useState<ListProps[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setLoading(true);
  //   try {
  //     const fetchProductList: ListProps[] = fetch(page);
  //     setList((prev) => [...prev, ...fetchProductList]);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [page]);

  const list: ListProps[] = [
    {
      brand: "CU",
      event: "1+1",
      img: "http://bgf-cu.xcache.kinxcdn.com/product/5000159440349.jpg",
      name: "스니커즈",
      price: 123123,
    },
    {
      brand: "GS25",
      event: "1+1",
      img: "http://bgf-cu.xcache.kinxcdn.com/product/5000159440349.jpg",
      name: "스니커즈",
      price: 123123,
    },
    {
      brand: "Emart",
      event: "1+1",
      img: "http://bgf-cu.xcache.kinxcdn.com/product/5000159440349.jpg",
      name: "스니커즈",
      price: 123123,
    },
    {
      brand: "7Eleven",
      event: "1+1",
      img: "http://bgf-cu.xcache.kinxcdn.com/product/5000159440349.jpg",
      name: "스니커즈",
      price: 123123,
    },
    {
      brand: "MINISTOP",
      event: "1+1",
      img: "http://bgf-cu.xcache.kinxcdn.com/product/5000159440349.jpg",
      name: "스니커즈",
      price: 123123,
    },
  ];

  const router = useRouter();
  const query = router.query.brand;
  return (
    <section className={styles.productListWrapper}>
      <span>{query}</span>
      <ProductList list={list} />
      {/* <FetchMore loading={page != 0 && loading} setPage={setPage} /> */}
    </section>
  );
};

export default BrandProductList;

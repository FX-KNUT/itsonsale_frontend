import React from "react";
import Product from "../../reusable/Product";
import styles from "../../../styles/main/section/_productList.module.scss";

interface ListProps {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
}

// list를 받아서 Product형태로 보여줌
const ProductList = ({ list }: any) => {
  return (
    <div className={styles.productListWrapper}>
      {list.map((product: ListProps, idx: number) => {
        const { brand, event, img, name, price } = product;
        return (
          <Product
            key={idx}
            brand={brand}
            event={event}
            img={img}
            name={name}
            price={price}
          ></Product>
        );
      })}
    </div>
  );
};

export default ProductList;

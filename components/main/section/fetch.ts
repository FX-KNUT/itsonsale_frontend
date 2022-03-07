import { useState } from "react";

interface ListProps {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
}

const fetch = (page: number) => {
  let list: ListProps[] = [];
  // 20개만 뽑아냄(추후 변경 가능)
  for (let i = 0; i < 20; i++) {
    list.push({
      brand: "CU",
      event: "1+1",
      img: "http://bgf-cu.xcache.kinxcdn.com/product/5000159440349.jpg",
      name: "스니커즈",
      price: 123123,
    });
  }
  return list;
};

export default fetch;

/* brand: "CU",
        event: "1+1",
        img: "http://bgf-cu.xcache.kinxcdn.com/product/5000159440349.jpg",
        name: "스니커즈",
        price: "123123", */

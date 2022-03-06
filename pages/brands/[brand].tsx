import { useRouter } from "next/router";

const ProductList = () => {
  const router = useRouter();
  const query = router.query.brand;
  console.log(query);
  return <div>productList</div>;
};

export default ProductList;

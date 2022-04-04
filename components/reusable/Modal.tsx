import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/reusable/_modal.module.scss";
import ProductList from "../main/section/ProductList";

interface Props {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
  state: boolean;
}
const Modal = ({ brand, event, img, name, price, state }: Props) => {
  const portal =
    typeof window !== "undefined" &&
    (document.getElementById("potal") as HTMLElement);
  // const [showModal, isShowModal] = useState(false);
  const modalboolean = state;

  //이벤트 상품하고 모달을 연결.......
  return portal
    ? createPortal(
        <div
          className={styles.Modal}
          onClick={(modalboolean) => (prev) => !prev}
        ></div>,
        portal
      )
    : null;
};

export default Modal;

import { useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
}
const Modal = ({ brand, event, img, name, price }: Props) => {
  const portal =
    typeof window !== "undefined" &&
    (document.getElementById("potal") as HTMLElement);
  const [showModal, setShowModal] = useState(false);
  return portal
    ? createPortal(
        <div
          className="click"
          onClick={() => setShowModal((prev) => !prev)}
        ></div>,
        portal
      )
    : null;
};

export default Modal;

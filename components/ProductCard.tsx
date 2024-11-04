import styles from "./ProductCard.module.css";
import QuantitySelector from "@/components/QuantitySelector";
import Button from "@/components/Button";
import { CartItem, addToCart, getCart, formatAmount } from "@/lib/cart";
import { useState } from "react";

type ProductCardProps = {
  productId: number;
  name: string;
  price: number;
  setCart: (cart: CartItem[]) => void;
};

export default function ProductCard(props: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  /**
   * Handles the add to cart button click event.
   * Gets the selected quantity of items and updates the cart.
   */
  function addToCartHandler() {
    const item = {
      id: props.productId,
      name: props.name,
      unitPrice: props.price,
      quantity,
    };
    addToCart(item);
    props.setCart(getCart());
  }

  return (
    <div className={styles["product-card"]}>
      <h2>{props.name}</h2>
      <p>Unit price: {formatAmount(props.price)}</p>
      <QuantitySelector
        productId={props.productId}
        defaultValue={quantity}
        setQuantity={setQuantity}
      />
      <Button
        text="Add to cart"
        amount={quantity * props.price}
        clickHandler={() => addToCartHandler()}
      />
    </div>
  );
}

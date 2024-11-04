"use client";

import CartContext from "@/contexts/CartContext";
import { useContext } from "react";
import styles from "./Cart.module.css";
import { getCart, formatAmount, removeFromCart, CartItem } from "@/lib/cart";

export default function Cart(props: 
  { setCart: (cart: CartItem[]) => void }
) {
  const cart = useContext(CartContext);

  function handleRemoveFromCart(id: number, name: string) {
    if (window.confirm(`Are you sure you want to remove ${name} from cart?`)) {
      removeFromCart(id);
      props.setCart(getCart());
    }
  }

  return (
    <table className={styles["cart-items"]}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{formatAmount(item.unitPrice)}</td>
            <td>{item.quantity}</td>
            <td>{formatAmount(item.quantity * item.unitPrice)}</td>
            <td>
              <button
                className={styles["remove-from-cart-button"]}
                onClick={() => handleRemoveFromCart(item.id, item.name)}
              >
                ❌
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

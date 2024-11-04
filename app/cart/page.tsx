"use client";

import CartContext from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import { getCart, CartItem } from "@/lib/cart";
import Link from "next/link";
import styles from "../page.module.css";
import Cart from "@/components/Cart";

export default function Home() {
  const [cart, setCart] = useState([] as CartItem[]);

  useEffect(() => {
    setCart(getCart());
  }, [])

  return (
    <CartContext.Provider value={cart}>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Cart</h1>
          <Cart setCart={setCart} />
          <Link href="/" className={styles.link}>Return to shopping</Link>
        </main>
      </div>
    </CartContext.Provider>
  );
}

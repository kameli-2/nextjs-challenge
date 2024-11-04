"use client";

import { useState, useEffect } from "react";
import CartContext from "@/contexts/CartContext";
import Link from "next/link";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import { getCart, CartItem } from "@/lib/cart";

export default function Home() {
  const [cart, setCart] = useState([] as CartItem[]);

  useEffect(() => {
    setCart(getCart());
  }, [])

  return (
    <CartContext.Provider value={cart}>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Homepage</h1>
          <ProductCard productId={1} name="Kissapullo" price={2.5} setCart={setCart} />
          <Link href="/cart" className={styles.link}>
            Go to cart
          </Link>
          <Cart setCart={setCart} />
        </main>
      </div>
    </CartContext.Provider>
  );
}

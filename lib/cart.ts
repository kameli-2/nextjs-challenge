type CartItem = {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
};

/**
 * Adds an item to the cart. Uses localstorage for storing the cart.
 * When adding an existing item, increments its quantity instead of adding a new one.
 * @param item The item to add to the cart
 */
function addToCart(item: CartItem) {
  const cart = getCart();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  window.alert(
    `${item.name} (${item.quantity} pcs) was added to the cart.`
  );
}

/**
 * Removes an item from the cart using the product id.
 * @param id The product id
 */
function removeFromCart(id: number) {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

/**
 * Gets the cart items from the user's localStorage.
 * @returns The cart that is currently stored in the users localStorage, or an empty array if it's not found or invalid.
 */
function getCart(): CartItem[] {
  const cart = localStorage.getItem("cart");
  try {
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.log("There was an error when fetching cart", error);
  }
  return [];
}

/**
 * Formats a given number correctly: two decimals & with the euro sign.
 * @param amount The number that we want to format to a currency
 * @returns The formatted currency
 */
function formatAmount(amount: number) {
  return `${amount.toFixed(2).replace(".", ",")} €`;
}

export { addToCart, removeFromCart, getCart, formatAmount };
export type { CartItem }

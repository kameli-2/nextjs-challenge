import { createContext } from 'react';
import { CartItem } from '@/lib/cart'

const CartContext = createContext([] as CartItem[]);

export default CartContext;

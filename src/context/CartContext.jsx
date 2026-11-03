import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const StoreContext = createContext(null);

function readStoredArray(key, validate) {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value.filter(validate) : [];
  } catch {
    return [];
  }
}

function isValidCartItem(item) {
  return (
    item &&
    Number.isInteger(item.id) &&
    typeof item.name === 'string' &&
    typeof item.type === 'string' &&
    typeof item.image === 'string' &&
    Number.isFinite(item.price) &&
    Number.isFinite(item.qty) &&
    item.qty > 0
  );
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() =>
    readStoredArray('soyune-cart', isValidCartItem),
  );
  const [wishlist, setWishlist] = useState(() =>
    readStoredArray('soyune-wishlist', Number.isInteger),
  );

  useEffect(() => {
    try {
      window.localStorage.setItem('soyune-cart', JSON.stringify(cart));
    } catch {
      // The store remains usable when browser storage is unavailable or full.
    }
  }, [cart]);

  useEffect(() => {
    try {
      window.localStorage.setItem('soyune-wishlist', JSON.stringify(wishlist));
    } catch {
      // Wishlist changes remain available for the current session.
    }
  }, [wishlist]);

  const add = useCallback((product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing
        ? current.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          )
        : [...current, { ...product, qty: 1 }];
    });
  }, []);

  const remove = useCallback((id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, Math.floor(Number(quantity) || 1)) }
          : item,
      ),
    );
  }, []);

  const toggleWish = useCallback((id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id],
    );
  }, []);

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      add,
      remove,
      qty: updateQuantity,
      toggleWish,
      count: cart.reduce((sum, item) => sum + item.qty, 0),
      total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    }),
    [cart, wishlist, add, remove, updateQuantity, toggleWish],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState(carritoInicial);

  const carritoLength = carrito.length;

  const addToCart = (producto, cantidad) => {

    const itemAgregado = { ...producto, cantidad };

    const carritoActualizado = [...carrito];

    const enElCarrito = carrito.find((prod) => prod.id === itemAgregado.id);

    if (enElCarrito) {
      enElCarrito.cantidad += cantidad;
    } else {
      carritoActualizado.push(itemAgregado);
    }
    
    setCarrito(carritoActualizado);
  };

  const precioTotal = () => {
    return carrito
      .reduce(
        (total, producto) => total + producto.precio * producto.cantidad,
        0
      )
      .toLocaleString();
  };

  const vaciarCart = () => {
    carrito.forEach((producto) => {
      localStorage.setItem(`cantidad-${producto.id}`, 0)
    })
    setCarrito([]);
  };

  const cantidadTotal = () => {
    return carrito
      .reduce(
      (total , producto) => total + producto.cantidad, 0
    )
  }

  const borrarItem = (id) => {
    const eliminado = carrito.find(prod => prod.id === id);
    const carritoActualizado = carrito.filter((el) => el.id !== eliminado.id);

    setCarrito(carritoActualizado);

  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  return (
    <CartContext.Provider value={{
      carrito,
      addToCart,
      carritoLength,
      precioTotal,
      cantidadTotal,
      vaciarCart,
      borrarItem
    }}>
      {children}
    </CartContext.Provider>);
};

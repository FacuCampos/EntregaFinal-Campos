import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './checkoutContador.css'

const CheckoutContador = ({producto}) => {

  const { addToCart } = useContext(CartContext);

  const sumarUno = () => {
    localStorage.setItem(`cantidad-${producto.id}`, producto.cantidad +1)
      addToCart(producto, +1);
  }

  const restarUno = () => {
    localStorage.setItem(`cantidad-${producto.id}`, producto.cantidad -1)
    addToCart(producto, -1)
  }

  return (
    <div className='checkoutContador'>
      {
        producto.cantidad > 1 ?
        <button onClick={restarUno}>-</button>
        :
        <button disabled>-</button>
      }

      {
        producto.cantidad !== producto.stock ?
        <button onClick={sumarUno}>+</button>
        :
        <>
          <button disabled>+</button>
          <p className='redText'>Has alcanzado el máximo de este producto</p>
        </>
      }
    </div>
  )
}

export default CheckoutContador
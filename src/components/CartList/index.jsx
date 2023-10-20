import { useContext } from 'react';
import './cartList.css';
import { CartContext } from '../../context/CartContext';
import CartListItem from '../CartListItem';
import { EmojiFrown } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const CartList = () => {

    const { carrito , carritoLength } = useContext(CartContext)

  return (
    <div className='cartList'>
      
      {
        carritoLength == 0 ?
        <div className='cartVacio'>
          <h2>No tienes ningun producto en tu carrito <EmojiFrown/></h2>
          <Link to={'/tienda'}><p>Ir a la tienda</p></Link>
        </div> 
        :
        carrito.map((prod) => (
          <CartListItem prod={prod} key={prod.id}/>  
        ))
      } 
    </div>
  )
}

export default CartList
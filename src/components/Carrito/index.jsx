import { Basket3 } from 'react-bootstrap-icons'
import CartList from '../CartList'
import './carrito.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const Carrito = () => {

    const { vaciarCart , carritoLength , precioTotal } = useContext(CartContext); 

    const vaciar = () => {
      Swal.fire(
        {
          title: 'Eliminar carrito',
          text: '¿Seguro que desea borrar el carrito de compras? Esta acción no se puede revertir',
          icon: 'warning',
          confirmButtonText: 'Si, seguro',
          showCancelButton: true,
          cancelButtonText: 'Mejor no'
        }
      ).then((res) => {
        if (res.isConfirmed){
          vaciarCart();
        } 
      })
    }

    return (
        <div className='carritoContainer'>
            <h2 className='head2'>Carrito <Basket3 className='cartIcon' /></h2>
            <hr className='separador' />
            <CartList />
            {
                carritoLength !== 0 &&
                <div className='cartContainerPie'>
                    <h2 className='precioTotal'>Precio total: <span>${precioTotal()}</span></h2>
                    <button onClick={vaciar}>Vaciar carrito</button>
                </div>
            }
        </div>
    )
}

export default Carrito
import { XLg } from 'react-bootstrap-icons'
import { useContext } from 'react'
import { CheckoutContador } from '../../components'
import { CartContext } from '../../context/CartContext'
import './cartListItem.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const CartListItem = ({prod}) => {

  const { borrarItem } = useContext(CartContext);

  const eliminar = () => {

    Swal.fire({
      title: 'Borrar elemento',
      text: '¿Desea borrar todas las unidades de este elemento del carrito?',
      icon: 'question',
      iconColor: '#023859',
      confirmButtonText: 'Si',
      position: 'center',
      showCancelButton: true,
      cancelButtonText: 'No'
    }).then((res) => {
      res.isConfirmed && borrarItem(prod.id);
      localStorage.setItem(`cantidad-${prod.id}`, 0)
    })



  }

  return (
    <>
        <div className='cartListItem' key={prod.id}>

          <button onClick={eliminar} className='borrarItem'><XLg/></button>

          <img src={`/img/productos/${prod.img}`} alt={prod.alt} />

          <div className="cartItemInfo">
              <h3>{prod.nombre}</h3>
              <p>Precio unitario: <strong>${prod.precio.toLocaleString()}</strong></p>
              <p>Cantidad: <strong>{prod.cantidad}</strong></p>
              <CheckoutContador producto={prod}/>
              <Link to={`/tienda/producto/${prod.id}`} ><p>Ir al producto</p></Link>
              <p className='subtot'>
                <strong>Subtotal: <span >${(prod.precio*prod.cantidad).toLocaleString()}</span></strong>
              </p>
          </div>

        </div>
        <hr className='separador'/>
    </>
  )
}

export default CartListItem
import { Link } from 'react-router-dom'
import './agregadoToast.css'

const AgregadoToast = ({producto}) => {

  return (
    <Link to={'/checkout'} className='tostada'>
        <p>Producto agregado al carrito: <strong>{producto.nombre}</strong></p>
        <p>Cantidad: <strong>{producto.cantidad}</strong></p>
    </Link>
  )
}

export default AgregadoToast
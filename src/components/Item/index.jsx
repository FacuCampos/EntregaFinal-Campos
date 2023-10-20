import './item.css';
import { Link } from "react-router-dom";

const Item = ({producto}) => {

    const { id , nombre , img , precio , alt } = producto;

    return(
        <Link to={`/tienda/producto/${id}`} className='cardLink'>
            <img className='cardImg' src={`/img/productos/${ img }`} alt={ alt } />
            <div className='cardInfo'>
                <h2 className='cardTitulo'>{ nombre }</h2>
                <p className='cardPrecio'>$ { precio.toLocaleString() }</p>
                <p className='cardTexto'>Ver detalle</p>
            </div>
        </Link>
    )
}

export default Item
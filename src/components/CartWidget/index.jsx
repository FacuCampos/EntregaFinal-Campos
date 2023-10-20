import { NavLink } from 'react-router-dom';
import './cartWidget.css';
import { Basket3Fill } from 'react-bootstrap-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const cartWidget = () => {

    const { cantidadTotal , carritoLength } = useContext(CartContext);

    return (
        <NavLink to={'/checkout'} className='divCart'>
            <Basket3Fill className='cartIcon'/>
            {
                carritoLength != 0 && <span className='contador' id='cart-count'><strong>{ cantidadTotal() }</strong></span>
            }
        </NavLink>
    )
}

export default cartWidget;
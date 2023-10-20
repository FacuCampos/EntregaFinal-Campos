import './itemList.css';
import Item from '../Item';

const ItemList = (props) => {

    const catalogo = props.catalogo;
    const clase = props.clase;

    return(
        <div className='itemContenedor'>
            {
                (catalogo) &&

                <div className={clase}>
                    {
                        catalogo.map((producto) => <Item key={'prod'+producto.id} producto={producto}/>)
                    }
                </div>
            }
        </div>
    )
}

export default ItemList
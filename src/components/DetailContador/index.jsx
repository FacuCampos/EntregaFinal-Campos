import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCount } from "../../hooks";
import './detailContador.css';
import { useContext , useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { AgregadoToast } from '../../components'

const DetailContador = ({producto}) => {

    const {id , stock , nombre , img } = producto;

    const { addToCart , carrito } = useContext(CartContext);
    
    const { cantidad , setCantidad , agregar, decrementar } = useCount();

    const [cantidadPosible , setCantidadPosible ] = useState(stock);

    const cantidadEnCart = JSON.parse(localStorage.getItem(`cantidad-${id}`)) || 0;

    const agregarSeleccion = () => {
        
        new Promise(() => {
            addToCart( producto , cantidad);
            setCantidad(1)
            setCantidadPosible((cantidadPosible - producto.cantidad));
            localStorage.setItem(`cantidad-${id}`, JSON.stringify((cantidadEnCart + cantidad)))
        })
        .then(
            toast.success(<AgregadoToast producto={{nombre, cantidad}}/>,{
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            theme: "dark",
            position: 'bottom-right'
            })
        )
    }

    return(
        <div className="detailContador">
            <div className="detailContadorDiv">
                {
                    (stock <= cantidad + cantidadEnCart) && <p className="detailPAgotado">No puedes pedir mas de este articulo</p>
                }
                {
                    (stock == 0) && <p className="detailPAgotado">Este producto está agotado</p>
                }
                <div className="detailContadorSuperior">
                    {
                        cantidad > 1 ?
                        <button onClick={() => decrementar()}><p><strong>-</strong></p></button>:
                        <button disabled><p><strong>-</strong></p></button>
                    }
                    <p className="numeroContador">{cantidad}</p>
                    {
                        (stock <= cantidad + cantidadEnCart) ?
                        <button disabled><p><strong>+</strong></p></button>:
                        <button onClick={() => agregar()}><p><strong>+</strong></p></button>
                    }
                </div>
                <div className="detailContadorAgregar">
                    {
                        ((stock > 0) && (cantidadEnCart < stock) && (cantidad + cantidadEnCart <= stock)) ?
                        <button className="agregarAlCart" onClick={() => agregarSeleccion()}><p><strong>Agregar al carrito</strong></p></button>:
                        <button disabled className="agregarAlCart"><p><strong>Agregar al carrito</strong></p></button>
                    }
                </div>
            </div>
            <ToastContainer autoClose={3000}/>
        </div>
    )
}

export default DetailContador
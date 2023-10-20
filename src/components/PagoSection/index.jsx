import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext'
import { collection , addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import './pago.css'

const PagoSection = () => {

    const [ pedido , setPedido ] = useState({});

    const { register , handleSubmit } = useForm();

    const [ email , setEmail ] = useState("");

    const [ confirmacion , setConfirmacion ] = useState("")

    const { vaciarCart , carrito , precioTotal , carritoLength } = useContext(CartContext)

    const compra = (data) => {

        Swal.fire({
            title: 'Pagar',
            text: '¿Desea comprar los productos de carrito?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Pagar',
        })
        .then((res) => {
            if (res.isConfirmed){
                const pedido = {
                    cliente: data,
                    productos: carrito,
                    total: precioTotal()
                };
        
                const pedidosRef = collection( db , "pedidos" );
                addDoc( pedidosRef , pedido )
                .then((doc) => {

                    const productosPedidos = carrito.map((el) =>
                    {
                        return {
                            nombre: el.nombre,
                            cantidad: el.cantidad
                        }
                    })

                    setPedido({
                        id: doc.id,
                        productos: productosPedidos,
                        total: pedido.total
                    });

                    const formulario = document.getElementById('formularioPagar');
                    formulario.reset();
                })

                vaciarCart()
            }
        })

    }

    if (pedido.id){
        return (
            <div className='pagoCompletado'>
                <h2 className='head2'>Muchas gracias por su compra!</h2>
                    <div className='ticket'>
                        <p>Su número de pedido es:</p>
                        <p><strong>{pedido.id}</strong></p>
                        <h3 className='mt-4'>Productos:</h3>
                        <ul>
                            {
                                pedido.productos.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <p>{item.nombre}</p>
                                            <p><strong>Cantidad:</strong> {item.cantidad}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <p className='ticketTotal'>Total: <strong>${pedido.total.toLocaleString()}</strong></p>
                    </div>
            </div>
        )
    }

  return (
    <div className='pagarSeccion'>
        <h2 className='head2'>Pagar</h2>
        <hr />
        <form id='formularioPagar' className='checkoutForm' onSubmit={handleSubmit(compra)}>

            <div className='campo nombre'>
                <label htmlFor='inputNombre'>Nombre:</label>
                <input id='inputNombre' type="text" placeholder='Nombre' {...register("nombre")}/>
            </div>

            <div className='campo apellido'>
                <label htmlFor='inputApellido'>Apellido:</label>
                <input id='inputApellido' type="text" placeholder='Apellido' {...register("apellido")}/>
            </div>

            <div className='campo dni'>
                <label htmlFor='inputDNI'>DNI:</label>
                <input id='inputDNI' type="" placeholder='DNI' {...register("dni")}/>
            </div>

            <div className='campo tele'>
                <label htmlFor='inputTelefono'>Teléfono:</label>
                <input id='inputTelefono' type="tel" placeholder='Teléfono' {...register("telefono")}/>
            </div>

            <div className='campo email'>
                <label htmlFor='inputEmail'>Email:</label>
                <input id='inputEmail' type="email" placeholder='Email' {...register("email")} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='campo confEmail'>
                <label htmlFor='inputConfEmail'>Confirme su email:</label>
                <input id='inputConfEmail' type="email" placeholder='Confirme email' onChange={(e) => setConfirmacion(e.target.value)}/>
                {
                    confirmacion !== "" && confirmacion.toLowerCase() !== email.toLowerCase() &&
                    <p className='rojo'>Los correos no coinciden</p> 
                }
            </div>

            <hr className='separadorCheckout'/>

            <div className='campo tarj'>
                <label htmlFor='inputTarjeta'>Número de tarjeta:</label>
                <input id='inputTarjeta' type="text" placeholder='Ej. 1111-1111-1111-1111' {...register("tarjeta")}/>
            </div>

            <div className='campo vto'>
                <label htmlFor='inputVencimiento'>Vto.:</label>
                <input id='inputVencimiento' type="text" placeholder='Ej. 01/27' {...register("vencimiento")}/>
            </div>

            <div className='campo cod'>
                <label htmlFor='inputCodigo'>Cod.:</label>
                <input id='inputCodigo' type="text" placeholder='Ej. 100' {...register("codigo")}/>
            </div>

            <div className='btnBox'>
                <button type="reset">Cancelar</button>
                {
                    carritoLength !== 0 && confirmacion!== "" && confirmacion.toLowerCase() == email.toLowerCase()? 
                    <button type="submit">Comprar</button>:
                    <button disabled type="submit">Comprar</button>
                    
                }
            </div>
        </form>
    </div>
  )
}

export default PagoSection
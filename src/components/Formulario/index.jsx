import { useForm } from 'react-hook-form'
import './form.css'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';

const Formulario = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (datos) => {
        const mensajesRef = collection(db, "mensajes");
        addDoc( mensajesRef , datos )
        .then(
            Swal.fire({
                title: 'Mensaje enviado',
                text: `¡Muchas gracias por escribirnos!`,
                icon: 'success',
                confirmButtonText: 'OK',
            })
        )
        .then(()=>{
            const formulario = document.getElementById('formularioConsulta');
            formulario.reset();
        })
    }

    const vaciarCampos = () => {

    }

  return (
    <div className="formulario">

        <form id='formularioConsulta' onSubmit={handleSubmit(enviar)}>
            
            <div className='campo'>
                <label htmlFor='inputAsunto'>Asunto</label>
                <input id='inputAsunto' type="text" placeholder='Inserte el asunto' {...register("asunto")}/>
            </div>

            <div className='campo'>

                <label htmlFor='inputCorreo'>Correo</label>
                <input id='inputCorreo' type="email" placeholder='Inserte su correo electrónico' {...register("correo")}/>

            </div>

            <div>
                <label htmlFor='inputMensaje'>Mensaje</label>
                <textarea id='inputMensaje' cols="30" rows="10" className='w-100' placeholder='Redacte su mensaje' {...register("mensaje")}></textarea>
                
                <div className='formBotones'>
                    <button type="reset">Cancelar</button>
                    <button type="submit">Enviar</button>
                </div>

            </div>
        </form>
    </div>
  )
}

export default Formulario
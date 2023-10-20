import { SyncLoader } from "react-spinners"
import './cargando.css'

const Cargando = () => {
    return(
        <div className="divListaVacia">
            <h2>Cargando catálogo...</h2>
            <SyncLoader color={'#000'} size={10}/>
        </div>
    )
}

export default Cargando
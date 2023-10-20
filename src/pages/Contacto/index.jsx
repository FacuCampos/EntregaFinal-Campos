import { Formulario, InfoContacto } from "../../components";
import Layout from "../../components/Layout";
import './contacto.css'

const Contacto = () => {
    return(
        <Layout>
            <div className="contacto">
                <h1 className="titulo">¡Escríbenos!</h1>
                <hr />
                <div className="escribenos">
                    <Formulario />
                    <InfoContacto />
                </div>
            </div>
        </Layout>
    )
    
}

export default Contacto;
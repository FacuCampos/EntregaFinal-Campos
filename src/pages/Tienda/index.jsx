import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { collection , getDocs , query , where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Layout , ItemList , Cargando, Filtro } from "../../components";
import './tienda.css';

const Tienda = () => {

    const [catalogo, setCatalogo] = useState();
    const [titulo, setTitulo] = useState("Todos los productos");
    const [cargando, setCargando] = useState(true);

    const categoria = useParams().categoria;
    const resultadosBuscados = useParams().busqueda;

    useEffect(() => {
        setCargando(true)

        const productosRef = collection( db , "productos" );

        if (categoria) {
            const queryRef = query(productosRef, where("categoria" , "==" , categoria));

            getDocs(queryRef)
            .then((resp) => {
                setTimeout(() => {
                    setCatalogo(
                        resp.docs.map((doc) => {
                            return { id: doc.id , ...doc.data() }
                        })
                    )
                    setCargando(false)
                    setTitulo(categoria)
                }, 1000);

            })
        }
        else if (resultadosBuscados){

            getDocs(productosRef)
            .then((resp)=>{                
                setTimeout(() => {
                    const peticion = resp.docs.map((doc) => {
                        return { id:doc.id , ...doc.data()}
                    })
                    const resultados = peticion.filter((el) => {
                        if (el.nombre.toString().toLowerCase().includes(resultadosBuscados.toLowerCase())
                        || el.categoria.toString().toLowerCase().includes(resultadosBuscados.toLowerCase())
                        || el.empresa.toString().toLowerCase().includes(resultadosBuscados.toLowerCase())) {
                            return el;
                        };
                    })
                    setCatalogo(resultados)
                    setCargando(false)
                    setTitulo("Resultados de: " + resultadosBuscados)
                })
            })
        } 
        else{
            const queryRef = productosRef;

            getDocs(queryRef)
            .then((resp) => {
                setTimeout(() => {
                    setCatalogo(
                        resp.docs.map((doc) => {
                            return { id: doc.id , ...doc.data() }
                        })
                    )
                    setTitulo("Todos los productos")
                    setCargando(false)
                }, 1000);

            })
        }
    },[ categoria, resultadosBuscados ])

    return(
        <Layout>
            <div className="tienda">
                <Filtro />
                <div className="productosContenedor">
                    <h1 className="titulo">{titulo}</h1>
                    <hr />
                    <div className="productListContenedor">
                        {
                            cargando ? <Cargando /> : <ItemList catalogo={catalogo} clase="prodTienda"/>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Tienda;
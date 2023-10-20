import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout , Slider , ItemList, Cargando } from "../../components";
import './home.css';
import { collection , getDocs , query , where } from "firebase/firestore";
import { db } from "../../firebase/config";

const Home = () => {

    const [destacados, setDestacados] = useState();
    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        const productosRef = collection( db , "productos" );

        const queryRef = query(productosRef, where("destacado" , "==" , true));

        getDocs(queryRef)
            .then((resp) => {
                setDestacados(
                    resp.docs.map((doc) => {
                        return { id: doc.id , ...doc.data() }
                    })
                )
                setCargando(false)
            })
    }, []);

    return(
        <Layout>
            <Slider />
            <h1 className='titulo'>Productos destacados</h1>
            <div className='destacadosContenedor'>
                {
                    cargando ? <Cargando /> : <ItemList catalogo={destacados} clase="prodDestacados"/>
                }
                <hr />
                <Link to={'/tienda'} className="verTodos">Ver todos los productos</Link>
            </div>
        </Layout>
    )
    
}

export default Home;
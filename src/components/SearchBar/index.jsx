import { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { collection , getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import './searchBar.css'
import { Link } from "react-router-dom";


const SearchBar = () => {

    const [productos, setProductos] = useState([]);
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        
        const productosRef = collection( db , "productos" );
    
        getDocs(productosRef).then((resp)=>{
            
            const peticion = resp.docs.map((doc) => {
                return { id:doc.id , nombre:doc.data().nombre , img:doc.data().img, alt:doc.data().alt , categoria:doc.data().categoria , empresa:doc.data().empresa}
            })

            setProductos(peticion)
            setResultadosBusqueda(peticion)
        })
    }, [])

    const handleChange = (input) => {
        setBusqueda(input.target.value)
        const resultados = resultadosBusqueda.filter((el) => {
            if (el.nombre.toString().toLowerCase().includes(input.target.value.toLowerCase())
            || el.categoria.toString().toLowerCase().includes(input.target.value.toLowerCase())
            || el.empresa.toString().toLowerCase().includes(input.target.value.toLowerCase())) {
                return el;
            };
        })
        setProductos(resultados)
    }

    const vaciarBarra = () => {
        setBusqueda([])
    }

    return(
        <div className="busqueda">
            <form className="barraBusqueda" role="search">
                <input type="text" placeholder="Buscar artículo" value={busqueda} onChange={handleChange}/>
                <Link className="lupa" type="submit" to={`/tienda/resultados/${busqueda}`}>
                    <Search />
                </Link>
            </form>
            <div className="respuestaBusqueda">
                {
                    busqueda != "" && productos.map((producto) =>
                        <>
                            <Link to={`/tienda/producto/${producto.id}`} key={producto.id} className="searchLink" onClick={vaciarBarra}>
                                <img className="searchImg" src={`/img/productos/${ producto.img }`} alt={ producto.alt }></img>
                                <p className="searchTexto">{producto.nombre}</p>
                            </Link>
                            <hr />
                        </>
                    )
                }
            </div>
        </div>

    )
}

export default SearchBar
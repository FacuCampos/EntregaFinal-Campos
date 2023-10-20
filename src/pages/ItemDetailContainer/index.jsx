import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import {Layout , ItemDetail, Cargando} from "../../components";
import './itemDetailContainer.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    const id = useParams().idProducto;

    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(true);



    useEffect(() => {

        setCargando(true)

        const docRef = doc( db , "productos" , id );

        getDoc(docRef)
            .then((resp) => {
                setTimeout(() => {
                    setProducto( { ...resp.data() , id: resp.id } );
                    setCargando(false);
                }, 1000)
            })
    }, [id])

    return(
        <Layout>
            <div className="itemDetailContainer">
                {
                    cargando ? <Cargando /> : <ItemDetail {...producto}/>
                }
            </div>
        </Layout>
    )

}

export default ItemDetailContainer
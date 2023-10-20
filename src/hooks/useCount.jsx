import { useState } from "react"

const useCount = () => {

    const [cantidad, setCantidad] = useState(1);

    const agregar = () => setCantidad(cantidad + 1);
    const decrementar = () => setCantidad(cantidad - 1);

    return{cantidad, agregar, decrementar, setCantidad}
}

export default useCount
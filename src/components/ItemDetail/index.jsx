import { DetailContador } from '../../components'
import './itemDetail.css'

const ItemDetail = ({id, nombre , img , alt , precio , categoria , empresa, stock, descripcion}) => {

    const descripcionModificada = descripcion.replace(/\n/g, '<br>')

    return (
        <div className='detailContenedor'>
            <img src={`/img/productos/${img}`} alt={alt} className='detailImg'/>
            <DetailContador producto={{id, nombre, precio, img, alt, stock}}/>
            <div className='detailInfo'>
                <h1 className='detailTitulo'>{nombre}</h1>
                <hr />
                <h2 className='detailPrecio'>Precio: $ {precio.toLocaleString()}</h2>
                <p className='detailDescripcion' dangerouslySetInnerHTML={{__html:descripcionModificada}}/>
                <hr />
                <div className='detailEtiquetas'>
                    <p className='detailCategoria'><strong>Categoria: </strong><span>{categoria}</span></p>
                    <p className='detailEmpresa'><strong>Empresa: </strong><span>{empresa}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
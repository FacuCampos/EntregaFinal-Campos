import { NavLink} from "react-router-dom";
import './filtro.css'

const Filtro = () => {

    return(

        <div className="filtroContenedor">

            <div className="filtroFixed">

                <h2>Filtro</h2>
                <div className="filtro">
                    <li className="categoria">

                        <hr />

                        <div className="filtroLi todosLosP">
                            <NavLink to={'/tienda/'} className={'filtroLink'}>
                                <p>Todos los productos</p>
                            </NavLink>
                        </div>
                        
                        <hr />

                        <h3>Categorias</h3>
                        <ul>

                            <hr />

                            <li className="filtroLi">
                                <NavLink to={'/tienda/categoria/Juegos de mesa'} className={'filtroLink'}>
                                    <p>Juegos de mesa</p>
                                </NavLink>
                            </li>

                            <hr />

                            <li className="filtroLi">
                                <NavLink to={'/tienda/categoria/Juegos de rol'} className={'filtroLink'}>
                                    <p>Juegos de rol</p>
                                </NavLink>
                            </li>

                            <hr />

                            <li className="filtroLi">
                                <NavLink to={'/tienda/categoria/Cubos rubik'} className={'filtroLink'}>
                                    <p>Cubos rubik</p>
                                </NavLink>
                            </li>

                            <hr />

                            <li className="filtroLi">
                                <NavLink to={'/tienda/categoria/Dados'} className={'filtroLink'}>
                                    <p>Dados</p>
                                </NavLink>
                            </li>
                            
                            <hr />

                        </ul>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Filtro
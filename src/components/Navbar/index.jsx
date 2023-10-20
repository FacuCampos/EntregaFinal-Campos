import './navbar.css';
import { Link } from 'react-router-dom';
import { House, Shop, CupHot, Bag, ChevronDown, Dot} from 'react-bootstrap-icons';

const Navbar = () => {
    return (
        <nav className='navegador'>
            <div className='navList'>
                <Link to={'/'} className='navLink'>
                    <div className='navLinkDiv'>
                        <House className='navLinkIcon'/>
                        <p className='navLinkP'>
                            Inicio
                        </p>
                   </div>
                </Link>
                <hr className='verticalRule'/>
                <div className='tiendaDiv'>
                    <Link to={'/tienda'} className='navLink'>
                        <div className='navLinkDiv'>
                            <Bag className='navLinkIcon'/>
                            <p className='navLinkP'>
                                Tienda
                            </p>
                            <ChevronDown className='chevron' />
                        </div>
                    </Link>
                    <div className='dropdownContenedor'>
                        <div className='dropdown'>
                            <Link to={'/tienda/categoria/Juegos de mesa'} className='dropdownLink'>
                               <span>Juegos de mesa</span>
                               <Dot />
                            </Link>
                            <hr />
                            <Link to={'/tienda/categoria/Juegos de rol'} className='dropdownLink'>
                                <span>Juegos de rol</span>
                                <Dot />
                            </Link>
                            <hr />
                            <Link to={'/tienda/categoria/Cubos rubik'} className='dropdownLink'>
                                <span>Cubos Rubik</span>
                                <Dot />
                            </Link>
                            <hr />
                            <Link to={'/tienda/categoria/Dados'} className='dropdownLink'>
                                <span>Dados</span>
                                <Dot />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className='verticalRule'/>
                <Link to={'/contacto'} className='navLink'>
                    <div className='navLinkDiv'>
                        <CupHot className='navLinkIcon'/>
                        <p className='navLinkP'>
                            Contacto
                        </p>
                    </div>
                </Link>
                <hr className='verticalRule'/>
                <Link to={'/nosotros'} className='navLink'>
                    <div className='navLinkDiv'>
                        <Shop className='navLinkIcon'/>
                        <p className='navLinkP'>
                            Nosotros
                        </p>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
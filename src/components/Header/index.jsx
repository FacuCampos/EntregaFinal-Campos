import { Busqueda , CartWidget, Logo } from '../../components'
import './header.css'


const Header = () => {

    return(
        <header className="topContainer">
            <Logo />
            <Busqueda />
            <CartWidget/>
        </header>
    )
}

export default Header
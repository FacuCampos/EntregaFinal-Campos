import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <Link to={'/'} className='logoLink'><img className='logoNav' src='/img/marca/logo-expandido.svg' alt="logo de la marca"/></Link>
    )
}

export default Logo
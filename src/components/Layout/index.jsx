import { Navbar , Footer, Header} from '../../components'
import './layout.css'

const Layout = ({children})=> {
    return (
       <>
            <Header />
            <Navbar />
            <main className="mainClass">
                {children}
            </main>
            <Footer />
       </>
    )
}

export default Layout
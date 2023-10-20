import Layout from "../../components/Layout";
import './nosotros.css'

const Nosotros = () => {
    return(
        <Layout>
            <div className="nosotros">
                <h1 className="titulo">Quienes somos</h1>
                <hr />
                <section className="section-nosotros-1">
                    <div className="quienes-somos">
                        <p>Arkham Store es una empresa fundada por cuatro amigos emprendedores apasionados por los juegos de mesa y rol... no solo por los juegos como tal, sino también por los vínculos y relaciones que forman entre sus jugadores.Después de años de jugar y hacer amigos en este hobby, decidieron abandonar sus carreras profesionales para ayudar a hacer crecer esta industria en Argentina. Su objetivo inicial es ofrecer los mejores juegos con precios asequibles para que sean accesibles para todos, ya que saben que muchos de los buenos juegos son difíciles de conseguir debido a su importación o alto costo. La empresa planea agregar más productos a su catálogo y expandir su alcance para convertir su pasión en un hobby para todos.Aquí se buscará crear un espacio donde los amantes de este hobby puedan disfrutar, proponiendo ideas y participando en hacer crecer esta comunidad</p>
                        <div>
                            <img src="/img/local/nosotros.webp" alt="foto del local" className="foto-local"/>
                        </div>
                    </div>
                </section>
                <section className="section-nosotros-2">
                    <h2>¡Vení a conocernos!</h2>
                    <div>
                        <p>Av. García del Río 3268, C1429DEV CABA</p>
                        <iframe className="gmap" width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=Av.%20Garc%C3%ADa%20del%20R%C3%ADo%203268,%20C1429DEV%20CABA+(Arkham%20Store)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </section>
            </div>
        </Layout>
    )
    
}

export default Nosotros;
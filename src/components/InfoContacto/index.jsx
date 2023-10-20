import './infoContacto.css'

const InfoContacto = () => {
  return (
    <div className="info-contacto-box">
                        <div className="info-contacto">
                            <div className="email-contacto">
                                <h3 className='head3'>Emails de contacto:</h3>
                                <label>Información:</label>
                                <p>info@juegosarkham.com.ar</p>
                                <label>Sugerencias:</label>
                                <p>sugerencias@juegosarkham.com.ar</p>
                            </div>
                            <div  className="redes-contacto">
                                <h3 className='head3'>Redes sociales:</h3>
                                <div>
                                    <a href="http://facebook.com" target="_blank">
                                        <img src="/img/redes/fb-logo.png" alt="logo de facebook" />
                                        <p>facebook.com/juegosarkham</p>
                                    </a>
                                    <a href="http://twitter.com" target="_blank">
                                        <img src="/img/redes/tw-logo.png" alt="logo de twitter" />
                                        <p>twitter.com/juegosarkham</p>
                                    </a>
                                    <a href="https://instagram.com" target="_blank">
                                        <img src="/img/redes/ig-logo.png" alt="logo de instagram" />
                                        <p>instagram.com/juegosarkham</p>
                                    </a>
                                </div>
                            </div>
                            <div className="direccion">
                                <h3 className='head3'>Dirección</h3>
                                <p>Av. García del Río 3268, C1429DEV CABA</p>
                            </div>    
                        </div>
                    </div>
  )
}

export default InfoContacto
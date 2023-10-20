import { Carrito, Layout, PagoSection } from '../../components';
import './checkout.css'

const Checkout = () => {

  return (
    <Layout>
      <div className='checkout'>

        <h1 className='titulo'>Checkout</h1>
        <hr />

        <div className='checkoutMain'>

          <Carrito />

          <PagoSection />

        </div>
      </div>
    </Layout>
  )
}

export default Checkout
import './App.css';
import { CartProvider } from './context/CartContext';
import Navigation from './routes/Navigation';

const App = () => {

  return(
    <CartProvider>
      <Navigation />
    </CartProvider>
  );
}

export default App;

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css'

function Slider() {
  return (
    <Carousel interval={5000} wrap={true} className='carouselStyles'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"/img/carousel/RPG-carrousel.webp"}
          alt="Foto juego de rol"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"/img/carousel/Juegos-de-mesa.webp"}
          alt="Foto juegos de mesa"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"/img/carousel/cubos-rubik-carrousel.webp"}
          alt="Foto cubos rubik"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

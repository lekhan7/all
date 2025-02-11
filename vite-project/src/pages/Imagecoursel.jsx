import Carousel from 'react-bootstrap/Carousel';
import qu3 from "C:/Users/acer/Desktop/sporld web/qute 3.jpg"
import qu2 from "C:/Users/acer/Desktop/sporld web/qu 2.jpg"
import qu1 from "C:/Users/acer/Desktop/sporld web/qut 1.jpg"
import qu4 from "C:/Users/acer/Desktop/sporld web/qute 4.jpg"
function ImageCarousel(params) {
    

return(
<Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={qu1} />
        <Carousel.Caption>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={qu3} />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={qu2} />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={qu4} />
        <Carousel.Caption>
           </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );
    }


    export default ImageCarousel;
import Carousel from 'react-bootstrap/Carousel';
import qute3 from "../container/qute 3.jpg"
import qu2 from "../container/qu 2.jpg"
import qut1 from "../container/qut 1.jpg"
import qute4 from "../container/qute 4.jpg"
function ImageCarousel(params) {
    

return(
<Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={qut1} />
        <Carousel.Caption>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={qute3} />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={qu2} />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={qute4} />
        <Carousel.Caption>
           </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );
    }


    export default ImageCarousel;
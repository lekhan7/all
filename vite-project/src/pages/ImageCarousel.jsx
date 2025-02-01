import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import deletefile from 'C:/Users/acer/Desktop/secure share gov doc web/deletefile.jpg';
import safe from 'C:/Users/acer/Desktop/secure share gov doc web/safe.jpg';
import share from 'C:/Users/acer/Desktop/secure share gov doc web/share.jpg';
import upload from 'C:/Users/acer/Desktop/secure share gov doc web/upload.jpg';

const ImageCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={deletefile}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Delete</h3>
          <p>Delete ur uploaded document whene ever u needed</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={safe}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Safe</h3>
          <p>Safe ur doc </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={share}
          alt="Third slide"
        />
        <Carousel.Caption><br />
          <h3> Share</h3>
          <p>Share ur documents to ur friends family and through other medias
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={upload}
          alt="four slide"
        />
        <Carousel.Caption>
          <h3>Uplad</h3>
          <p>
          ?Upload ur document and keep safe 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
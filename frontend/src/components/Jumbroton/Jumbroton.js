import React from "react";
import { Carousel } from "react-bootstrap";
import './Jumbroton.css';

const Jumbroton = () => {
    return (
        <div>
            <h4 className="text-center mt-3">Welcome</h4>
            <h1 className="text-center">"HARMONY OF SUNDA"</h1>
            <p className="text-center">Educational website fo find out about Sundanese culture</p>

            <Carousel style={{ width: '90%', margin: 'auto' }}>
      <Carousel.Item interval={1000}>
        <img
            className="carousel-img d-block w-100"
            src="https://images.pexels.com/photos/713644/pexels-photo-713644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="first slide" 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
            className="carousel-img d-block w-100"
            src="https://images.pexels.com/photos/734102/pexels-photo-734102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="second slide" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="carousel-img d-block w-100"
            src="https://images.pexels.com/photos/634242/pexels-photo-634242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="third slide" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
    )
}

export default Jumbroton;
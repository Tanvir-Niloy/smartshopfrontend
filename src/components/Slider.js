import React from 'react';
import {Carousel} from 'react-bootstrap';
import slider1 from './slider1.png';
import slider2 from './slider2.png';
import slider3 from './slider3.png';


function Slider() {

    return (

        <div>
           <Carousel nextIcon="" nextLabel="" prevIcon="" indicators="">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 img-fluid"
      src={slider1}
      style={{height:'500px',width:"400px"}}
    />
  </Carousel.Item>
  <Carousel.Item interval={800}>
    <img
      className="d-block w-100 img-fluid"
      src={slider2}
      style={{height:'500px',width:"400px"}}
    />
  </Carousel.Item>
  <Carousel.Item interval={800} >
    <img
      className="d-block w-100 img-fluid"
      src={slider3}
      style={{height:'500px',width:"400px"}}
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slider

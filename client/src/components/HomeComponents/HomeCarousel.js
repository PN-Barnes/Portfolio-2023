import React from 'react';
import { Carousel } from 'react-bootstrap';
import inquirer from './../../assets/inquirer.png';
import generateMarkdown from './../../assets/generateMarkdownFunction.png';
import consolePrint from './../../assets/consolePrint.png';
import serverCode from './../../assets/serverCode.png';

const HomeCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className='d-block w-100'
          height='800px'
          src={consolePrint}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          height='800px'
          src={generateMarkdown}
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          height='800px'
          src={serverCode}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100  fluid'
          height='800px'
          src={inquirer}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;

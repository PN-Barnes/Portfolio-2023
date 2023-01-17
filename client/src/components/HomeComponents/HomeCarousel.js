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
          <h3>WorkPlace Generator</h3>
          <p>
            Curious about this project? Head towards my project page to checkout
            the full code!
          </p>
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
          <h3>ReadMe Creator</h3>
          <p>
            This project has become a staple of tools. Wish to see more? Head to
            the projects page for my source code to see how I did it.
          </p>
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
          <h3>Ecommerce App</h3>
          <p>
            Creating a server for my Ecommerce App. This was one of my biggest
            projects I have ever done. This is definitely something you should
            check out. Head over to my projects to check it out!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;

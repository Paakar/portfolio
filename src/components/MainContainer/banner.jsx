
import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner from '../../images/img_bg_1.jpg';
import Banner1 from '../../images/img_bg_2.jpg';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        direction: null
      };
    }
  
    handleSelect = (selectedIndex, e) => {
      /* alert(`selected=${selectedIndex}, direction=${e.direction}`); */
      this.setState({
        direction: e.direction
      });
    }
  
    render() {
      const { direction } = this.state;
  
      return (
        <Carousel
          direction={direction}
          onSelect={this.handleSelect}
          slide={true}
          interval={10000}
          pauseOnHover={false}
          /* bsClass={'hellow'} */
        >
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={Banner}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={Banner1}/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel;

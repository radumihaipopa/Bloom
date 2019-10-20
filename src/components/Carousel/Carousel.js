import React from 'react';
import ItemsCarousel from 'react-items-carousel';

import './Carousel.css';

class Carousel extends React.Component {
  constructor() {
    super()
    this.state = {
      activeItemIndex: 1
    }
  }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const { children } = this.props;

    return (
      <div className="carousel-container">
        <div className="carousel-content">
          <ItemsCarousel
            // Placeholder configurations
            enablePlaceholder
            numberOfPlaceholderItems={5}
            minimumPlaceholderTime={1000}
            placeholderItem={<div style={{ height: 200, background: '#ffffff' }}></div>}

            // Carousel configurations
            numberOfCards={4}
            gutter={12}
            showSlither={true}
            firstAndLastGutter={true}
            freeScrolling={false}

            // Active item configurations
            requestToChangeActive={this.changeActiveItem}
            activeItemIndex={this.state.activeItemIndex}
            activePosition={'center'}

            chevronWidth={20}
            rightChevron={<span className="chevron right"></span>}
            leftChevron={<span className="chevron left"></span>}
            outsideChevron={false}
          >
            {children}
          </ItemsCarousel>
        </div>
      </div>
    );
  }
}

export default Carousel;
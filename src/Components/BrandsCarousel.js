
import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, Container } from 'reactstrap';
import DAITOOLBRANDS from '../shared/Brands';


const Brands = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === DAITOOLBRANDS.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? DAITOOLBRANDS.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = DAITOOLBRANDS.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.alt} />
      </CarouselItem>
    );
  });

  return (
      <Container fluid>
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
    
        >
        <CarouselIndicators items={DAITOOLBRANDS} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    </Container>
  );
}

export default Brands;
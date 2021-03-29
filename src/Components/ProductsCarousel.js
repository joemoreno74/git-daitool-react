import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators,  Card, CardImg,
      CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import DAITOOLPRODUCTS from '../shared/Products';




const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === DAITOOLPRODUCTS.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? DAITOOLPRODUCTS.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = DAITOOLPRODUCTS.map((item) => {
    return (

      <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
            <Card className="card-style-products">
                <CardImg  src={item.src} alt={item.alt} />
                <CardBody className="card-body-product">
                  <CardTitle tag="h5">{item.product}</CardTitle>
                  <CardSubtitle tag="h6">{item.description}</CardSubtitle>
                  <br></br>
                  <CardText tag="h6">{item.cost}  </CardText>
                  <CardText tag="h6" className="originalCost">{item.originalCost}</CardText>
                </CardBody>
            </Card>
            
      </CarouselItem>

    );
  });

  return (

            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators items={DAITOOLPRODUCTS} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>

  );
}

export default Products;
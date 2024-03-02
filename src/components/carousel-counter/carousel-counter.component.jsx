import "./carousel-counter.styles.scss";
import Carousel from "../carousel/carousel.component";
import Counter from "../counter/counter.component";

const CarouselCounter = ({ images }) => {
  return (
    // <!-- CAROUSEL+COUNTER SECTION -->
    <section className='carouselcounter-section'>
      <Carousel images={images} />
      <Counter members={60} participants={200} projects={30} />
    </section>
  );
};

export default CarouselCounter;

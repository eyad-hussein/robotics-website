import "./carousel-counter.styles.scss";
import Carousel from "../../carousel/carousel.component";
import Counter from "./counter/counter.component";

const CarouselCounter = ({ images, metaData }) => {
  const { members, participants, projects } = metaData;

  return (
    // <!-- CAROUSEL+COUNTER SECTION -->
    <section className='carouselcounter-section'>
      <Carousel images={images} />
      <Counter
        members={members}
        participants={participants}
        projects={projects}
      />
    </section>
  );
};

export default CarouselCounter;

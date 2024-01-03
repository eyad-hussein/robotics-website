import './carousel-counter.styles.scss';
import Carousel from '../carousel/carousel.component';
import Counter from '../counter/counter.component';

const CarouselCounter = () => {

    return (
        // <!-- CAROUSEL+COUNTER SECTION -->
        <section class="carouselcounter-section">
            <Carousel />
            <Counter members={60} participants={200} projects={30}/>
        </section>
    );
}

export default CarouselCounter;
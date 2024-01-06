import "./carousel.styles.scss";
import CarouselItem from "../carousel-item/carousel-item.component";
import { useEffect } from "react";

const Carousel = ({ images }) => {
  useEffect(() => {
    const carouselContainer = document.getElementById("carousel");
    const slide = document.querySelector(".carousel__img-box");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    // index.html -- carousel functionality
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        carouselContainer.scrollLeft += slideWidth;
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        carouselContainer.scrollLeft -= slideWidth;
      });
    }
  }, []);

  return (
    // <!-- CAROUSEL -->
    <div class='carousel-container'>
      <div class='carousel' id='carousel'>
        {images &&
          images.map((image, index) => (
            <CarouselItem key={index} image={image.url} />
          ))}
        <button class='slide-arrow' id='slide-arrow-prev'>
          &#8249;
        </button>
        <button class='slide-arrow' id='slide-arrow-next'>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

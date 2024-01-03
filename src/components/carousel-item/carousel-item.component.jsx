import './carousel-item.styles.scss';

const CarouselItem = ({src, alt}) => {

    return (
        <div class="carousel__img-box">
            <img class="carousel__img" src={src} alt={alt} />
        </div>
    );
}

export default CarouselItem;
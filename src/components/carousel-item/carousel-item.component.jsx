import "./carousel-item.styles.scss";

const CarouselItem = ({ image }) => {
  console.log(image, "image");
  return (
    <div className='carousel__img-box'>
      <img className='carousel__img' src={image} alt='Carousel Item' />
    </div>
  );
};

export default CarouselItem;

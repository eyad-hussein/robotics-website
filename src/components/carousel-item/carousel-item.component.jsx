import "./carousel-item.styles.scss";

const CarouselItem = ({ image }) => {
  return (
    <div className='carousel__img-box'>
      <img className='carousel__img' src={image} alt={image.alt} />
    </div>
  );
};

export default CarouselItem;

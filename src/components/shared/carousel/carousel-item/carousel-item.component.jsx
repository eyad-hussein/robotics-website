import "./carousel-item.styles.scss";

const CarouselItem = ({ image }) => {
  const { url, alt } = image;
  return (
    <div className='carousel__img-box'>
      <img
        className='carousel__img'
        src={process.env.REACT_APP_PRE_LINK + url}
        alt={alt}
      />
    </div>
  );
};

export default CarouselItem;

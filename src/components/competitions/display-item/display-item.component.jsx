import "./display-item.styles.scss";

const DisplayItem = ({ title, content, number }) => {
  let displayItemClass = `display-item__side display-item__side--front display-item__side--front--${number}`;
  return (
    <div className='display-item'>
      <div className={displayItemClass}>
        <h1 className='display-item__heading'>{title}</h1>
      </div>

      <div className='display-item__side display-item__side--back'>
        <h1 className='display-item__heading'>{title}</h1>
        <p className='display-item__details text--small'>{content}</p>
        <div className='btn-group'>
          <a href='/' className='btn btn--red'>
            Participate Now!
          </a>
          <a className='btn btn--white' href='./workshops_handouts.html'>
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;

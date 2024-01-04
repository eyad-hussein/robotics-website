import "./display-item.styles.scss";

const DisplayItem = ({ title, content, number }) => {
  let displayItemClass = `display-item__side display-item__side--front display-item__side--front--${number}`;
  return (
    <div class='display-item'>
      <div class={displayItemClass}>
        <h1 class='display-item__heading'>{title}</h1>
      </div>

      <div class='display-item__side display-item__side--back'>
        <h1 class='display-item__heading'>{title}</h1>
        <p class='display-item__details text--small'>{content}</p>
        <div class='btn-group'>
          <a href='/' class='btn btn--red'>
            Participate Now!
          </a>
          <a class='btn btn--white' href='./workshops_handouts.html'>
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;

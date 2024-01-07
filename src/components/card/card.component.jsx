import "./card.styles.scss";
import { Button } from "../button/button.component";

const Card = ({ activeWorkshop }) => {
  const { id, title, description, date, location, duration } = activeWorkshop;
  return (
    <div className='card'>
      <div className='card__left'>
        <h2 className='card__heading u-margin-bottom-medium'>{title}</h2>
        <p className='card__text u-margin-bottom-medium'>{description}</p>
        <div className='btn-group'>
          <Button type='red' content='Paticipate Now!' to='#' />
          <Button
            type='white'
            content='Handouts'
            to={`/workshops/workshop_handouts/${id}`}
          />
        </div>
      </div>

      <div className='card__right'>
        <div className='card__content-box'>
          <h3 className='u-margin-bottom-xs'>Starts</h3>
          <p>{date}</p>
        </div>

        <div className='card__content-box'>
          <h3 className='u-margin-bottom-xs'>Location</h3>
          <p>{location}</p>
        </div>

        <div className='card__content-box'>
          <h3 className='u-margin-bottom-xs'>Duration</h3>
          <p>{duration} Weeks</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

import './card.styles.scss';
import { Button } from '../button/button.component';

const Card = ({id, title, content, date, location, duration}) => {

    const CardLeft = () => {
        return (
            <div class="card__left">
            <h2 class="card__heading u-margin-bottom-medium">{title}</h2>
            <p class="card__text u-margin-bottom-medium">
              {content}
            </p>
            <div class="btn-group">
              <Button type="red" content="Paticipate Now!" to="#"/>
              <Button type="white" content="Handouts" to={"/workshops/workshop_handouts/" + id}/>
            </div>
          </div>
        );
    };

    const CardRight = () => {
        return (
            <div class="card__right">
              <div class="card__content-box">
                <h3 class="u-margin-bottom-xs">Starts</h3>
                <p>{date}</p>
              </div>

              <div class="card__content-box">
                <h3 class="u-margin-bottom-xs">{location}</h3>
                <p>HQ</p>
              </div>

              <div class="card__content-box">
                <h3 class="u-margin-bottom-xs">Duration</h3>
                <p>{duration}</p>
              </div>
            </div>
        );
    };

    return (
        <div class="card">
            <CardLeft />
            <CardRight />
        </div>
    );
}

export default Card;
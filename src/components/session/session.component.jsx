import './session.styles.scss';
import { PlayButton } from '../button/button.component';

const Session = ({src, to}) => {
    return (
        <div class="session-card">
            <div class="session-card__img-box">
            <img src={src} alt="" class="session-card__img" />
            
            <PlayButton to={to}/>

            <h3 class="session-card__disc">Lorem Ipsum</h3>
            </div>
        </div>
    );
}

export default Session;
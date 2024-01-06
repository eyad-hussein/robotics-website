import "./session.styles.scss";
import { PlayButton } from "../button/button.component";

const Session = ({ src, to }) => {
  return (
    <div className='session-card'>
      <div className='session-card__img-box'>
        <img src={src} alt='' className='session-card__img' />

        <PlayButton to={to} />

        <h3 className='session-card__disc'>Lorem Ipsum</h3>
      </div>
    </div>
  );
};

export default Session;

import "./session.styles.scss";
import { PlayButton } from "../button/button.component";

const Session = ({ state }) => {
  const { session, sessionImage } = state;
  const src = sessionImage.url;
  const alt = sessionImage.alt;
  const title = session.title;
  return (
    <div className='session-card'>
      <div className='session-card__img-box'>
        <img src={src} alt='' className='session-card__img' />

        <PlayButton to='' />

        <h3 className='session-card__disc'>{title}</h3>
      </div>
    </div>
  );
};

export default Session;

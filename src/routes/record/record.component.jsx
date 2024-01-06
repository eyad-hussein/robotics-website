import "./record.styles.scss";
import Window from "../../components/window/window.component";
import { PlayButton } from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";

const Video = ({ thumbnail, alt, discription }) => {
  return (
    <div className='video'>
      <div className='project__img-box'>
        <img src={thumbnail} alt={alt} className='project__img' />
        <PlayButton to='' />
      </div>
      <p className='video__disc'>{discription}</p>
    </div>
  );
};

const RecordLeft = ({ title, discription }) => {
  return (
    <div className='column__left'>
      <div className='u-margin-bottom-medium'>
        <Window>
          <PlayButton to='' />
        </Window>
      </div>

      <h1 className='u-margin-bottom-medium helper-class--handouts'>{title}</h1>
      <p className='text--big'>{discription}</p>
      {/* <a href="./projects.html" class="btn--arrow">
                <span class="btn--arrow__left"><</span>
                </a> */}
      {/* button hereee */}
    </div>
  );
};

const RecordRight = () => {
  return (
    <div className='column__right'>
      <Video
        thumbnail={require("../../assets/imgs/project.jpg")}
        alt=''
        discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa metus'
      />
      <Video
        thumbnail={require("../../assets/imgs/project.jpg")}
        alt=''
        discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa metus'
      />
      <Video
        thumbnail={require("../../assets/imgs/project.jpg")}
        alt=''
        discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa metus'
      />
    </div>
  );
};

const Record = () => {
  return (
    <Fragment>
      <main className='main'>
        <div className='record-container'>
          <RecordLeft
            title='Title'
            discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt similique, non voluptatum sapiente tempore nam, voluptates error voluptatibus dolorem ipsa ex ratione! Sed ratione suscipit temporibus expedita? Itaque, ipsa.'
          />
          <RecordRight />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Record;

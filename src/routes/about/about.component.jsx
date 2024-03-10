import "./about.styles.scss";
import BigHero from "../../components/about/big-hero/big-hero.component";
import MeetOur from "../../components/about/meet-our/meet-our.component";
import Sponsors from "../../components/about/sponsors/sponsors.component";
import Footer from "../../components/shared/footer/footer.component";
import { Fragment } from "react";

const MainSection = () => {
  return (
    <section className='main-section'>
      {/* <!-- INTRO --> */}
      <div className='main-section__intro'>
        <h2 className='u-margin-bottom-medium'>Introduction</h2>

        <p className='main-section__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa
          metus, efficitur ut iaculis quis, sodales sed velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Donec massa metus, efficitur ut
          iaculis quis, sodales sed velit.
        </p>
      </div>

      {/* <!-- MISSION & VISION --> */}
      <div className='main-section__mission-vision'>
        {/* <!-- MISSION --> */}
        <div className='main-section__mission'>
          <h2 className='u-margin-bottom-medium'>Mission</h2>

          <p className='main-section__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa
            metus, efficitur ut iaculis quis, sodales sed velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec massa metus,
            efficitur ut iaculis quis, sodales sed velit.
          </p>
        </div>

        {/* <!-- VISION --> */}
        <div className='main-section__vision'>
          <h2 className='u-margin-bottom-medium'>Vision</h2>

          <p className='main-section__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa
            metus, efficitur ut iaculis quis, sodales sed velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec massa metus,
            efficitur ut iaculis quis, sodales sed velit.
          </p>
        </div>
      </div>
    </section>
  );
};

const BODY = [
  {
    src: require("../../assets/imgs/person.jpg"),
    title: "Eyad Magdy",
    disc: "Head of Engineering Faculty",
  },
  {
    src: require("../../assets/imgs/person.jpg"),
    title: "Eyad Magdy",
    disc: "Head of Engineering Faculty",
  },
  {
    src: require("../../assets/imgs/person.jpg"),
    title: "Eyad Magdy",
    disc: "Head of Engineering Faculty",
  },
  {
    src: require("../../assets/imgs/person.jpg"),
    title: "Eyad Magdy",
    disc: "Head of Engineering Faculty",
  },
  {
    src: require("../../assets/imgs/person.jpg"),
    title: "Eyad Magdy",
    disc: "Head of Engineering Faculty",
  },
  {
    src: require("../../assets/imgs/person.jpg"),
    title: "Eyad Magdy",
    disc: "Head of Engineering Faculty",
  },
];

const SPONSORS = [
  {
    src: require("../../assets/logos/sponsors/logo-google.png"),
    alt: "",
  },
  {
    src: require("../../assets/logos/sponsors/logo-hp.png"),
    alt: "",
  },
  {
    src: require("../../assets/logos/sponsors/logo-ibm.png"),
    alt: "",
  },
  {
    src: require("../../assets/logos/sponsors/logo-microsoft.png"),
    alt: "",
  },
  {
    src: require("../../assets/logos/sponsors/logo-vector-graphics.png"),
    alt: "",
  },
];

const About = () => {
  return (
    <Fragment>
      <main className='main'>
        <BigHero />
        <MainSection />

        <section className='advisors-section'>
          <h2>Meet Our Advisors</h2>
          <MeetOur body={BODY} />
        </section>

        <section className='board-section'>
          <h2>Meet Our Highboard</h2>
          <MeetOur body={BODY} />
        </section>

        <Sponsors sponsors={SPONSORS} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default About;

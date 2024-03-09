import "./big-hero.styles.scss";
import { ReactComponent as RoboticsSmallWhiteLogo } from "../../assets/logos/icon-white.svg";

const BigHero = () => {
  return (
    <section className='big-hero-section'>
      <h1 className='big-hero__slogan'>
        Manually <span>Controlled,</span> Better
        <span> Automated.</span>
      </h1>

      <RoboticsSmallWhiteLogo className='big-hero__img' />
    </section>
  );
};

export default BigHero;

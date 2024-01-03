import "./home.styles.scss";
import CarouselCounter from "../../components/carousel-counter/carousel-counter.component";
import Posts from "../../components/posts/posts.component";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <main className='main u-margin-bottom-big'>
        <CarouselCounter />
        <Posts />
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;

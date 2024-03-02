import "./home.styles.scss";
import CarouselCounter from "../../components/carousel-counter/carousel-counter.component";
import Posts from "../../components/posts/posts.component";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import HomePageService from "../../services/home_page_service";

const Home = () => {
  const [mainCarouselImages, setMainCarouselImages] = useState([]);

  useEffect(() => {
    setMainCarouselImages(HomePageService.getHomePageCarouselImages());
  }, [mainCarouselImages]);
  return (
    <Fragment>
      <main className='main u-margin-bottom-big'>
        {mainCarouselImages.length && (
          <CarouselCounter images={mainCarouselImages} />
        )}

        {/* {mainPostsImages.length && (
          <Posts state={{ posts: mainPosts, images: mainPostsImages }} />
        )} */}
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;

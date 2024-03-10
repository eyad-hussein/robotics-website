import "./home.styles.scss";
import HomePageService from "../../services/home_page_service";
import CarouselCounter from "../../components/home/carousel-counter/carousel-counter.component";
import Posts from "../../components/home/posts/posts.component";
// import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectError,
  selectLoading,
} from "../../store/models/shared/selectors/shared_selectors";
import { selectMainPosts } from "../../store/models/post/selectors/main_post_selector";
import { selectMainMetaData } from "../../store/models/meta-data/selectors/main_meta_data_selector";
import { selectMainCarouselImages } from "../../store/models/image/selectors/main_carousel_image";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(selectMainPosts);
  const { metaData } = useSelector(selectMainMetaData);
  const { mainImages } = useSelector(selectMainCarouselImages);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    // dispatch(HomePageService.getCarouselImages());
    dispatch(HomePageService.getMetaData());
    // dispatch(HomePageService.getMainPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // return <div>Error: {error}</div>;
  }

  return (
    <Fragment>
      <main className='main u-margin-bottom-big'>
        {metaData != undefined && mainImages != undefined && (
          <CarouselCounter metaData={metaData} images={mainImages} />
        )}

        {posts.length && <Posts posts={posts} />}
      </main>

      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;

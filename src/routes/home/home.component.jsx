import "./home.styles.scss";
import HomePageService from "../../services/home_page_service";
import CarouselCounter from "../../components/carousel-counter/carousel-counter.component";
import Posts from "../../components/posts/posts.component";
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

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(selectMainPosts);
  const { metaData } = useSelector(selectMainMetaData);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    // dispatch(HomePageService.getMainPosts());
    dispatch(HomePageService.getMetaData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Fragment>
      <main className='main u-margin-bottom-big'>
        {metaData != undefined && <CarouselCounter metaData={metaData} />}

        {posts.length && <Posts posts={posts} />}
      </main>

      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;

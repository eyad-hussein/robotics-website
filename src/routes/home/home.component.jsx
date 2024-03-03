import "./home.styles.scss";
import CarouselCounter from "../../components/carousel-counter/carousel-counter.component";
import Posts from "../../components/posts/posts.component";
// import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMainPosts } from "../../store/models/post/selectors/main_post_selector";
import { getMainPosts } from "../../store/models/post/actions/main_post_actions";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(selectMainPosts);

  useEffect(() => {
    // dispatch(getMainPosts());
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
        {/* <CarouselCounter /> */}

        {posts.length && <Posts posts={posts} />}
      </main>

      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;

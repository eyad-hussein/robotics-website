import { useDispatch, useSelector } from "react-redux";
import { getMainPosts } from "../store/models/post/actions/main_post_actions";

const TestComponent = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  // console.log(
  //   "https://s3.eu-central-1.amazonaws.com/robotics.ejust.edu.eg/" +
  //     posts[0].post.image.url
  // );
  return (
    <div>
      {process.env.REACT_APP_PRE_LINK}
      <h1>
        {/* <img
          src={
            "https://s3.eu-central-1.amazonaws.com/robotics.ejust.edu.eg/images/main-carousel-images/1/1.jpg"
          }
          alt=''
        /> */}

        {/* {posts.length &&
          posts.map((post) => (
            <img
              key={post.post_id}
              src={
                "https://s3.eu-central-1.amazonaws.com/robotics.ejust.edu.eg/" +
                post.post.image.url
              }
              width='100'
              height='100'
            />
          ))} */}
      </h1>

      <button onClick={() => dispatch(getMainPosts())}>HOLLA</button>
    </div>
  );
};

export default TestComponent;

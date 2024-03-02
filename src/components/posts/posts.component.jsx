import "./posts.styles.scss";
import Post from "../post/post.component";

const Posts = ({ state }) => {
  const { posts, images } = state;

  return (
    <section className='posts-section'>
      {posts.map((post, index) => (
        <Post state={{ post: post, image: images[index] }} />
      ))}
      {/* <Post src={require("../../assets/imgs/test1.jpg")} alt='' />
      <Post src={require("../../assets/imgs/test1.jpg")} alt='' />
      <Post src={require("../../assets/imgs/test1.jpg")} alt='' />
      <Post src={require("../../assets/imgs/test1.jpg")} alt='' /> */}
    </section>
  );
};

export default Posts;

import "./posts.styles.scss";
import Post from "../post/post.component";

const Posts = ({ posts }) => {
  return (
    <section className='posts-section'>
      {posts.map((post, index) => (
        <Post post={post} />
      ))}
      {/* <Post src={require("../../assets/imgs/test1.jpg")} alt='' />
      <Post src={require("../../assets/imgs/test1.jpg")} alt='' />
      <Post src={require("../../assets/imgs/test1.jpg")} alt='' />
      <Post src={require("../../assets/imgs/test1.jpg")} alt='' /> */}
    </section>
  );
};

export default Posts;

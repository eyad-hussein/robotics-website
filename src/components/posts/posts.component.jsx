import './posts.styles.scss';
import Post from '../post/post.component';

const Posts = () => {
    return (
        <section class="posts-section">
            <Post src={require("../../assets/imgs/test1.jpg")} alt=""/>
            <Post src={require("../../assets/imgs/test1.jpg")} alt=""/>
            <Post src={require("../../assets/imgs/test1.jpg")} alt=""/>
            <Post src={require("../../assets/imgs/test1.jpg")} alt=""/>
        </section>
    );
}

export default Posts;
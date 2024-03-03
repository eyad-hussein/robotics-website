import "./post.styles.scss";

const Post = ({ post }) => {
  const { title, content } = post.post;
  const { url, alt } = post.post.image;
  return (
    <div className='post'>
      <div className='post__img-box'>
        <img
          src={process.env.REACT_APP_PRE_LINK + url}
          alt={alt}
          className='post__img'
        />
      </div>

      <div className='post__text-container'>
        <h2 className='heading-secondary u-margin-bottom-small'>{title}</h2>

        <p className='text--small'>{content}</p>
      </div>
    </div>
  );
};

export default Post;

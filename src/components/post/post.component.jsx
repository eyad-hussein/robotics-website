import "./post.styles.scss";

const Post = ({ state }) => {
  const { post, image } = state;
  const { title, description } = post;
  const src = image.url;
  const alt = image.alt;
  return (
    <div className='post'>
      <div className='post__img-box'>
        <img src={src} alt={alt} className='post__img' />
      </div>

      <div className='post__text-container'>
        <h2 className='heading-secondary u-margin-bottom-small'>{title}</h2>

        <p className='text--small'>{description}</p>
      </div>
    </div>
  );
};

export default Post;

import "./post.styles.scss";

const Post = ({ src, alt }) => {
  return (
    <div className='post'>
      <div className='post__img-box'>
        <img src={src} alt={alt} className='post__img' />
      </div>

      <div className='post__text-container'>
        <h2 className='heading-secondary u-margin-bottom-small'>Lorem ipsum</h2>

        <p className='text--small'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
          consectetur exercitationem corrupti voluptate alias placeat,
          voluptates minus facilis autem accusamus. Perferendis alias natus
          maiores, cumque aperiam voluptates voluptas sapiente pariatur!
        </p>
      </div>
    </div>
  );
};

export default Post;

import './post.styles.scss';

const Post = ({src, alt}) => {
    return (
        <div class="post">
            <div class="post__img-box">
            <img src={src} alt={alt} class="post__img" />
            </div>

            <div class="post__text-container">
            <h2 class="heading-secondary u-margin-bottom-small">Lorem ipsum</h2>

            <p class="text--small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                consectetur exercitationem corrupti voluptate alias placeat,
                voluptates minus facilis autem accusamus. Perferendis alias natus
                maiores, cumque aperiam voluptates voluptas sapiente pariatur!
            </p>
            </div>
        </div>
    );
}

export default Post;
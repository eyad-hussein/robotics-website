import './project.styles.scss';

const Project = ({src, alt, title, content}) => {
    return (
        <div class="project">
            <div class="project__img-box">
                <img src={src} alt={alt} class="project__img" />
            </div>
            <div class="project__disc-box">
                <h3 class="project__heading u-margin-bottom-medium">
                {title}
                </h3>
                <p class="project__disc">
                {content}
                </p>
            </div>
        </div>
    );
}

export default Project;
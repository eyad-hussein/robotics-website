import "./project.styles.scss";

const Project = ({ state }) => {
  const { material, materialImage } = state;
  const { title, description } = material;
  const src = materialImage;

  return (
    <div className='project'>
      <div className='project__img-box'>
        <img src={src} alt='hi' className='project__img' />
      </div>
      <div className='project__disc-box'>
        <h3 className='project__heading u-margin-bottom-medium'>{title}</h3>
        <p className='project__disc'>{description}</p>
      </div>
    </div>
  );
};

export default Project;

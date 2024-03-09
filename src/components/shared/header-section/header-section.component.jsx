import "./header-section.styles.scss";

const HeaderSection = ({ title, content }) => {
  return (
    <header className='header-section'>
      <h1 className='u-margin-bottom-medium'>{title}</h1>
      <p>{content}</p>
    </header>
  );
};

export default HeaderSection;

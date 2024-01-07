import "./meet-our.styles.scss";

const Item = ({ src, title, disc }) => {
  return (
    <div className='grid-item'>
      <div className='grid-item__img-box'>
        <img src={src} alt='' className='grid-item__img' />
      </div>

      <h3 className='grid-item__name u-margin-bottom-small'>{title}</h3>
      <h4 className='grid-item__disc'>{disc}</h4>
    </div>
  );
};

const MeetOur = ({ body }) => {
  let items = [];

  for (let i = 0; i < body.length; i++) {
    let { src, title, disc } = body[i];

    items.push(<Item src={src} title={title} disc={disc} />);
  }

  return <div className='general-grid'>{items}</div>;
};

export default MeetOur;

import "./counter.styles.scss";

const Counter = ({ members, participants, projects }) => {
  return (
    <div className='counter'>
      <div className='counter__column'>
        <span className='counter__number'>{members}</span>
        <span className='counter__disc'>Members</span>
      </div>
      <div className='counter__column'>
        <span className='counter__number'>{participants}</span>
        <span className='counter__disc'>Participants</span>
      </div>
      <div className='counter__column'>
        <span className='counter__number'>{projects}</span>
        <span className='counter__disc'>Projects</span>
      </div>
    </div>
  );
};

export default Counter;

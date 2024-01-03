import './counter.styles.scss';

const Counter = ({members, participants, projects}) => {
    
    return (
        <div class="counter">
            <div class="counter__column">
                <span class="counter__number">{members}</span
                ><span class="counter__disc">Members</span>
            </div>
            <div class="counter__column">
                <span class="counter__number">{participants}</span
                ><span class="counter__disc">Participants</span>
            </div>
            <div class="counter__column">
                <span class="counter__number">{projects}</span
                ><span class="counter__disc">Projects</span>
            </div>  
        </div>
    );
}

export default Counter;
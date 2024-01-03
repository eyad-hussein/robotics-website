import './window.styles.scss';

const Window = ( { children } ) => {
    return (
        <div class="window">
            {
                children
            }
        </div>
    );
}

export default Window;
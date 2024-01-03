import './header-section.styles.scss';

const HeaderSection = ({title, content}) => {
    return (
        <header class="header-section">
            <h1 class="u-margin-bottom-medium">{title}</h1>
            <p>
                {content}
            </p>
        </header>
    );
}

export default HeaderSection;
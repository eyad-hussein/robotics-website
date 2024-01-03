import { Link } from 'react-router-dom';
import './nav_link.styles.scss';

const NavLink = ({route, content}) => {

    return (
        <Link to={route} class="nav__nav-link">{content}</Link>
    );
}

export default NavLink;
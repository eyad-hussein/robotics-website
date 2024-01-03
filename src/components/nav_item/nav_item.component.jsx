import './nav_item.styles.scss';
import NavLink from '../nav_link/nav_link.component';

const NavItem = ({route, content}) => {

    // let classContent;

    // if (active) {
    //     classContent = "nav__nav-item active--link";
    // } else {
    //     classContent = "nav__nav-item";
    // }

    return (
        <li class="nav__nav-item">
            <NavLink route={route} content={content}></NavLink>
        </li>
    );
}

export default NavItem;
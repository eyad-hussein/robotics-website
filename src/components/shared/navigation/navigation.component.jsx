import "./navigation.styles.scss";
import NavList from "./navigation_list/navigation_list.component";

const Navigation = () => {
  return (
    <nav className='nav'>
      <NavList></NavList>
    </nav>
  );
};

export default Navigation;

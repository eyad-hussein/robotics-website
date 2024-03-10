import "./header.styles.scss";
import Navigation from "../../components/shared/navigation/navigation.component";
import { ReactComponent as RoboticsBigLogo } from "../../assets/logos/robo-horizontal-white.svg";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
// import { useAuth } from "../../contexts/auth_context";
import TokenHandler from "../../services/token_handler";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  // const { logoutUser } = useAuth();

  const handleImageClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = async (option) => {
    if (option === "logout") {
      TokenHandler.removeToken("authToken");
      // logoutUser();
    }
    setDropdownVisible(false);
  };

  useEffect(() => {
    const navList = document.getElementById("nav-list");
    const resetLinks = () => {
      const navItems = navList.querySelectorAll(".nav__nav-item");
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active--link");
      }
    };
    let logo = document.getElementById("logo");
    logo.addEventListener("click", () => {
      resetLinks();
    });

    return () => {
      logo.removeEventListener("click", resetLinks);
    };
  }, []);

  return (
    <Fragment>
      <header className='header'>
        <Link to='/' id='logo'>
          <RoboticsBigLogo className='header__logo--1' />
        </Link>
        <Navigation></Navigation>
        <div className='header__profile-pic-container'>
          <img
            onClick={handleImageClick}
            alt="User's profile"
            src={require("../../assets/icons/profile.png")}
            className='header__profile-pic'
            id='profile-pic'
          />
          {isDropdownVisible && (
            <div className='header__profile-pic-dropdown-container'>
              <div className='header__profile-pic-dropdown'>
                <Link
                  to='/register'
                  className='header__profile-pic-dropdown-item header__profile-pic-dropdown-item--1'
                  onClick={() => handleOptionClick()}>
                  Register
                </Link>
                <Link
                  to='/login'
                  className='header__profile-pic-dropdown-item header__profile-pic-dropdown-item--1'
                  onClick={() => handleOptionClick()}>
                  Login
                </Link>
                <Link
                  className='header__profile-pic-dropdown-item header__profile-pic-dropdown-item--1'
                  onClick={() => handleOptionClick("logout")}>
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;

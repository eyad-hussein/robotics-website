import "./header.styles.scss";
import Navigation from "../../components/navigation/navigation.component";
import { ReactComponent as RoboticsBigLogo } from "../../assets/logos/robo-horizontal-white.svg";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useEffect } from "react";

const Header = () => {
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
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;

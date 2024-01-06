import "./navigation_list.styles.scss";
import NavItem from "../nav_item/nav_item.component";
import { useEffect } from "react";

const NavList = () => {
  useEffect(() => {
    const navList = document.getElementById("nav-list");

    const resetLinks = () => {
      const navItems = navList.querySelectorAll(".nav__nav-item");
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active--link");
      }
    };
    const checkIfActive = (e) => {
      const element = e.target;

      if (element.tagName === "A") {
        resetLinks();
        element.parentNode.classList.add("active--link");
      }
    };

    if (navList) {
      navList.addEventListener("click", checkIfActive);
    }

    return () => {
      if (navList) {
        navList.removeEventListener("click", checkIfActive);
      }
    };
  }, []);

  return (
    <ul className='nav__nav-list' id='nav-list'>
      <NavItem route='/workshops' content='Workshops'></NavItem>
      <NavItem route='/mekatro' content='Mekatro'></NavItem>
      <NavItem route='/competitions' content='Competitions'></NavItem>
      <NavItem route='/projects' content='Projects'></NavItem>
      <NavItem route='/about' content='About'></NavItem>
    </ul>
  );
};

export default NavList;

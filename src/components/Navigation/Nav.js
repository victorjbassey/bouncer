import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavToggle from "./NavToggle/NavToggle";
import styles from "./Nav.module.css";

export default function Nav({ links }) {
  const [navState, setNavState] = useState(styles.nav);
  const toggleNav = () => {
    console.log("clicked");
    if (navState === styles.nav) {
      setNavState(styles.showNav);
    } else setNavState(styles.nav);
  };
  return (
    <>
      <div className={styles.logoContainer}>
        <Logo />
        <NavToggle toggleNav={toggleNav} />
      </div>
      <nav className={navState}>
        <ul className={styles.navList}>
          {links.map(({ name, path }, i) => (
            <li key={i}>
              <NavLink
                className={styles.navLink}
                to={path}
                activeClassName={styles.activeNav}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

Nav.defaultProps = {
  links: [
    {
      name: "home",
      path: "/"
    },
    {
      name: "store",
      path: "/store"
    },
    {
      name: "iphone",
      path: "/iphone"
    },
    {
      name: "ipad",
      path: "/ipad"
    },
    {
      name: "macbook",
      path: "/macbook"
    },
    {
      name: "acessories",
      path: "/acessories"
    }
  ]
};

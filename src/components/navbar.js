import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import useTheme from "../theme";

const CustomNavLink = ({ to, children }) => (
  <div className="nav-item-container">
    <NavLink 
      to={to}
      className="nav-link"
    >
      {children}
    </NavLink>
<svg 
  viewBox="0 0 120 12" 
  className="wiggle-line"
>
  <path
    d="M 0 6 Q 5 0, 10 6 T 20 6 T 30 6 T 40 6 T 50 6 T 60 6 T 70 6 T 80 6 T 90 6 T 100 6 T 110 6 T 120 6"
    fill="none"
    stroke="currentColor"
    strokeWidth="4" 
    strokeLinecap="round"
  />
</svg>
  </div>
);

function NavBar() {
  const [theme, toggleTheme] = useTheme();
  const [visible, setVisible] = useState(true);

  const handleThemeChange = () => {
    toggleTheme();
    setVisible(false);
    setTimeout(() => setVisible(true), 0);
  };

  return (
    <div>
      <nav className="flex flex-col space-y-4">
        <CustomNavLink to="/">home</CustomNavLink>
        <CustomNavLink to="/about">about</CustomNavLink>
        <CustomNavLink to="/projects">projects</CustomNavLink>
        {/* <CustomNavLink to="/resume">resume</CustomNavLink> */}

        <p class="links">
        <a
          href="https://www.linkedin.com/in/shraddhasinggh/"
          target="_blank"
          class="fa fa-linkedin fa-lg"
        ></a>
        <a
          href="https://github.com/shrad059"
          target="_blank"
          class="fa fa-github fa-lg"
        >
          {" "}
        </a>
        <a
          href="mailto:sh913738@dal.ca"
          class="fa fa-envelope fa-lg"
        >
          {" "}
        </a>
      </p>
        {/* <CSSTransition
          in={visible}
          appear={true}
          timeout={500}
          classNames="fadeIn"
        >
          <a onClick={handleThemeChange} className="fadeIn theme-toggle">
            {theme}
          </a>
        </CSSTransition> */}
      </nav>
    </div>
  );
}

export default NavBar;
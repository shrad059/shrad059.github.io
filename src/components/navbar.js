import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  const handleThemeChange = () => {
    toggleTheme();
    setVisible(false);
    setTimeout(() => setVisible(true), 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="nav-container">
      <nav className="flex flex-col space-y-4">
        <div className="menu-toggle" onClick={toggleMenu}>
          {/* Use FontAwesome icon for the hamburger menu */}
          <FontAwesomeIcon icon={faBars} size="1x" className="ham-icon" />
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <CustomNavLink to="/">home</CustomNavLink>
          <CustomNavLink to="/about">about</CustomNavLink>
          <CustomNavLink to="/projects">projects</CustomNavLink>
        </div>
      </nav>

      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <a
          href="https://www.linkedin.com/in/shraddhasinggh/"
          target="_blank"
          className="fa fa-linkedin fa-lg"
        ></a>
        <a
          href="https://github.com/shrad059"
          target="_blank"
          className="fa fa-github fa-lg"
        ></a>
        <a
          href="mailto:sh913738@dal.ca"
          className="fa fa-envelope fa-lg"
        ></a>
      </div>
    </div>
  );
}

export default NavBar;

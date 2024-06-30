import React from "react";
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("navbar-shrink");
      } else {
        navbar.classList.remove("navbar-shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div>
          <nav className="nav" id="navbar">
            <ul
              className={`nav-items ${isOpen ? "open" : ""}`}
              id="navbar-responsive"
            >
              <li>
                <NavLink to="/" className="navbar-a">
                  О компании
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="navbar-a">
                  Доставка и оплата
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="navbar-a">
                  Возврат
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="navbar-a">
                  Гарантии
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="navbar-a">
                  Контакты
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="navbar-a">
                  Блог
                </NavLink>
              </li>
              <li>
                <h6>8 (800) 890-46-56</h6>
              </li>
              <li>
                <NavLink to="/" className="navbar-a">
                  Заказать звонок
                </NavLink>
              </li>
            </ul>
            <button className="menu-btn" id="menu-btn" onClick={toggleNavbar}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

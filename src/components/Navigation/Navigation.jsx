import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import css from "./Navigation.module.css";
import styled from "styled-components";

const CustomDropdownItem = styled(Dropdown.Item)`
  color: #9e145b !important;
  display: flex;
  justify-content: center;
  &.active {
    color: #490537 !important;
  }
  &:hover {
    color: #490537 !important;
  }
`;

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1025);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = () => {
    if (isMobile) {
      setShowDropdown(false);
    }
  };

  return (
    <nav>
      <div className={css.nav}>
        {isLoggedIn && isMobile ? (
          <Dropdown
            show={showDropdown}
            onToggle={setShowDropdown}
            className={css.dropdown}
          >
            <Dropdown.Toggle
              as="div"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <TiThMenu className={css.icon} />
            </Dropdown.Toggle>
            <Dropdown.Menu className={css.custom_dropdown_menu}>
              <CustomDropdownItem as={NavLink} to="/" onClick={handleSelect}>
                Home
              </CustomDropdownItem>
              <CustomDropdownItem
                as={NavLink}
                to="/contacts"
                onClick={handleSelect}
              >
                Contacts
              </CustomDropdownItem>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <div className={css.nav_flex} >
            <NavLink to="/" className={({ isActive }) => (isActive ? `${css.nav_link} ${css.active}` : css.nav_link)} >
              <span>Home</span>
            </NavLink >
            {isLoggedIn && <NavLink to="/contacts" className={({ isActive }) => (isActive ? `${css.nav_link} ${css.active}` : css.nav_link)} >Contacts</NavLink>}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <div className={css.nav}>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>
    </nav>
  );
};

export default Navigation;

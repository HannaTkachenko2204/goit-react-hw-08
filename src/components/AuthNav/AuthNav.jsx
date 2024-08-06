import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/register" className={css.nav_link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.nav_link}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;

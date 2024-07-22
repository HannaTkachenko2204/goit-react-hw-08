import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./HomePage.module.css"

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.page_container}>
      {isLoggedIn ? (
        <PageTitle>This is a place to store your contacts!</PageTitle>
      ) : (
        <>
          <PageTitle>
            Please, <Link to="/register">register</Link> to continue
          </PageTitle>
        </>
      )}
    </div>
  );
}

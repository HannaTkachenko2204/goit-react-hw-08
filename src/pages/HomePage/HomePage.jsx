import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./HomePage.module.css";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <div>
          <PageTitle>
            Hi, dear! 🌸 This is a place for storing the contacts of your female
            friends
          </PageTitle>
          <img
            src="https://celes.club/uploads/posts/2022-06/1654440805_14-celes-club-p-oboi-na-rabochii-stol-pin-ap-krasivie-16.jpg"
            alt="Girl with phone"
            className={css.home_page_img}
          />
        </div>
      ) : (
        <>
          <PageTitle>
            Please,{" "}
            <Link to="/register" className={css.home_page_title_link}>
              register
            </Link>{" "}
            to continue
          </PageTitle>
          <img
            src="https://celes.club/uploads/posts/2022-06/1654440812_6-celes-club-p-oboi-na-rabochii-stol-pin-ap-krasivie-7.jpg"
            alt="Pin up girl"
            className={css.home_page_img}
          />
        </>
      )}
    </>
  );
}

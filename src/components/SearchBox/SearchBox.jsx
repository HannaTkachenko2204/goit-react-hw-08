import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleInputChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.find_input}>
      <h3>Find your female friend 🔎</h3>
      <label>By name:</label>
      <input type="text" value={filter} onChange={handleInputChange} />
    </div>
  );
};

export default SearchBox;

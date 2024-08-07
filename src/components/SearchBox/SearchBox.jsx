import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, changePhoneFilter } from "../../redux/filters/slice";
import { selectNameFilter, selectPhoneFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const phoneFilter = useSelector(selectPhoneFilter);

  const handleInputChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const handlePhoneInputChange = (event) => {
    dispatch(changePhoneFilter(event.target.value));
  };

  return (
    <div className={css.find_input}>
      <h3>Find your female friend 🔎</h3>
      <label>By name:</label>
      <input type="text" value={filter} onChange={handleInputChange} className={css.find_input_name}/>
      <label>By phone:</label>
      <input type="text" value={phoneFilter} onChange={handlePhoneInputChange} />
    </div>
  );
};

export default SearchBox;

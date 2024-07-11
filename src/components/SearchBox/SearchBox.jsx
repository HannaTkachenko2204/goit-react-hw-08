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
    <>
      <p className={css.nameOfInput}>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleInputChange} />
    </>
  );
};

export default SearchBox;

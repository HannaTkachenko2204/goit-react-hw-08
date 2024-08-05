import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleClickDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.item}>
      <div>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <MdLocalPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={handleClickDelete}>Delete</button>
    </div>
  );
};

export default Contact;

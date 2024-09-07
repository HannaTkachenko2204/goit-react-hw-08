import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { useState } from "react";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleClickDelete = () => dispatch(deleteContact(id));
  const handleClickEdit = () => setIsEditing(true);
  const handleSave = () => {
    dispatch(updateContact({ contactId: id, updatedContact: { name: editedName, number: editedNumber }}));
    setIsEditing(false);
  };

  return (
    <div className={css.item}>
      {isEditing ? (
        <div>
          <p className={css.name}>
            <FaUser className={css.icon} />
            <input
              id="name"
              name="name"
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              autoComplete="name"
            />
          </p>
          <p className={css.number}>
            <MdLocalPhone className={css.icon} />
            <input
              id="number"
              name="number"
              type="text"
              value={editedNumber}
              onChange={(e) => setEditedNumber(e.target.value)}
              autoComplete="tel"
            />
          </p>
          <button onClick={handleSave} className={css.btn_save} >Save</button>
        </div>
      ) : (
      <div>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <MdLocalPhone className={css.icon} />
          {number}
        </p>
      <button onClick={handleClickEdit} className={css.btn_edit} >Edit</button>
      <button onClick={handleClickDelete} className={css.btn_delete} >Delete</button>
      </div>
      )}
    </div>
  );
};

export default Contact;
